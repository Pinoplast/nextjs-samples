'use server';

import { signIn } from '@/auth';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export type State = {
  errors?: {
    name?: string[];
    description?: string[];
    complexity?: string[];
    materialId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

const CreateFormSchema = z.object({
  id: z.string(),
  materialId: z.string({
    invalid_type_error: 'Виберіть матеріал.'
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Вкажіть кількість більше 0' }),
  date: z.string(),
  name: z.string().min(1, "Введіть найменування"),
  description: z.string().min(1, "Введіть опис"),
  complexity: z.enum(['easy', 'medium', 'difficult'], {
    invalid_type_error: 'Вкажіть складність.'
  })
});

const UpdateFormSchema = z.object({
  id: z.string(),
  materialId: z.string({
    invalid_type_error: 'Виберіть матеріал.'
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Вкажіть кількість більше 0' }),
  date: z.string(),
  status: z.string(),
  name: z.string().min(1, "Введіть найменування"),
  description: z.string().min(1, "Введіть опис"),
  complexity: z.enum(['easy', 'medium', 'difficult'], {
    invalid_type_error: 'Вкажіть складність.'
  })
});
 
const CreateOrder = CreateFormSchema.omit({ id: true, date: true });
const UpdateOrder = UpdateFormSchema.omit({ id: true, date: true });

export async function createOrder(prevState: State, formData: FormData) {
  const validatedFields = CreateOrder.safeParse({
    materialId: formData.get('materialId'),
    amount: formData.get('amount'),
    name: formData.get('name'),
    description: formData.get('description'),
    complexity: formData.get('complexity'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Order.',
    };
  }

  const { materialId, amount, name, description, complexity } = validatedFields.data;
  const date = new Date().toISOString().split('T')[0];
  const status = 'in progress';
  const imageUrl = '';

  console.log("success", validatedFields.data);
  try{
    await sql`
    INSERT INTO orders (material_id, name, description, amount, status, complexity, date, image_url)
    VALUES (${materialId}, ${name}, ${description}, ${amount}, ${status}, ${complexity}, ${date}, ${imageUrl})
  `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Order.',
      error: error
    }
  }
  
  revalidatePath('/dashboard/orders');
  redirect('/dashboard/orders');
}

export async function updateOrder(id: string, prevState: State, formData: FormData) {

  const { materialId, amount, status, name, description, complexity } = UpdateOrder.parse({
    materialId: formData.get('materialId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
    name: formData.get('name'),
    description: formData.get('description'),
    complexity: formData.get('complexity'),
  });
 
  try {
    await sql`
    UPDATE orders
    SET material_id = ${materialId}, amount = ${amount}, status = ${status}, name = ${name}, description = ${description}, complexity = ${complexity}
    WHERE id = ${id}
  `;
  } catch(error) {
    return {
      message: 'Database Error: Failed to Update Order.'
    }
  }

  revalidatePath('/dashboard/orders');
  redirect('/dashboard/orders');
}

export async function deleteOrder(id: string) {
  try {
    await sql`DELETE FROM orders WHERE id = ${id}`;
    revalidatePath('/dashboard/orders');
    return { message: 'Deleted Order.' };
  } catch (error) {
    return {
      message: 'Database Error: Failed to Delete Order.'
    }
  }
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', Object.fromEntries(formData));
  } catch (error) {
    if ((error as Error).message.includes('CredentialsSignin')) {
      return 'CredentialsSignin';
    }
    throw error;
  }
}