import { deleteOrder } from '@/app/lib/actions';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function CreateOrder() {
  return (
    <Link
      href="/dashboard/orders/create"
      className="flex h-10 items-center rounded-lg bg-yellow-600 px-4 text-sm font-medium text-white transition-colors hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
    >
      <span className="hidden md:block">Створити замовлення</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateOrder({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/orders/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

 
export function DeleteOrder({ id }: { id: string }) {
  const deleteOrderWithId = deleteOrder.bind(null, id);
 
  return (
    <form action={deleteOrderWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Видалити</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
