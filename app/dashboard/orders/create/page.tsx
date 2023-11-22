import Form from '@/app/ui/orders/create-form';
import Breadcrumbs from '@/app/ui/orders/breadcrumbs';
import { fetchMaterials } from '@/app/lib/data';
 
export default async function Page() {
  const materials = await fetchMaterials();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Замовлення', href: '/dashboard/orders' },
          {
            label: 'Створити замовлення',
            href: '/dashboard/orders/create',
            active: true,
          },
        ]}
      />
      <Form materials={materials} />
    </main>
  );
}