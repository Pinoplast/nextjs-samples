// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Order = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestOrder = {
  id: string;
  name: string;
  image_url: string;
  description: string;
  status: string;
  complexity: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestOrderRaw = Omit<LatestOrder, 'amount'> & {
  amount: number;
};

export type OrdersTable = {
  id: string;
  material_id: string;
  name: string;
  description: string;
  amount: number;
  complexity: 'easy' | 'medium' | 'difficult';
  image_url: string;
  date: string;
  
  status: string;
};

export type CustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_orders: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_orders: number;
  total_pending: string;
  total_paid: string;
};

export type MaterialField = {
  id: string;
  name: string;
};

export type OrderForm = {
  id: string;
  material_id: string;
  name: string;
  description: string;
  amount: number;
  complexity: 'easy' | 'medium' | 'difficult';
  image_url: string;
  date: string;
  
  status: string;
};
