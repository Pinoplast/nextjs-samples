import Form from '@/app/ui/orders/edit-form';
import Breadcrumbs from '@/app/ui/orders/breadcrumbs';
import { fetchMaterials, fetchOrderById } from '@/app/lib/data';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [order, materials] = await Promise.all([
    fetchOrderById(id),
    fetchMaterials(),
  ]);

  if (!order) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Замовлення', href: '/dashboard/orders' },
          {
            label: 'Редагувати замовлення',
            href: `/dashboard/orders/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form order={order} materials={materials} />
    </main>
  );
}