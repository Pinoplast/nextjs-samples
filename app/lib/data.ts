import { sql } from '@vercel/postgres';
import {
  MaterialField,
  CustomersTable,
  OrderForm,
  OrdersTable,
  LatestOrderRaw,
  User,
  Revenue,
} from './definitions';
import { formatCurrency } from './utils';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchRevenue() {
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    console.log('Fetching revenue data...');
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<Revenue>`SELECT * FROM revenue`;

    console.log('Data fetch complete after 3 seconds.');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchLatestOrders() {
  noStore();
  try {
    const data = await sql<LatestOrderRaw>`
      SELECT orders.id, orders.amount, orders.name, orders.description, orders.image_url, orders.id, orders.status, orders.complexity
      FROM orders
      ORDER BY orders.date DESC
      LIMIT 5`;

    const latestOrders = data.rows.map((order) => ({
      id: order.id,
      name: order.name,
      description: order.description,
      status: order.status,
      complexity: order.complexity,
      amount: order.amount,
      image_url: order.image_url
    }));

    console.log(latestOrders.length, "latestOrders");
    return latestOrders;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest orders.');
  }
}

export async function fetchCardData() {
  noStore();
  try {
    // You can probably combine these into a single SQL query
    // However, we are intentionally splitting them to demonstrate
    // how to initialize multiple queries in parallel with JS.
    const orderCountPromise = sql`SELECT COUNT(*) FROM orders`;
    const orderStatusPromise = sql`SELECT
         SUM(CASE WHEN status = 'done' THEN amount ELSE 0 END) AS "done",
         SUM(CASE WHEN status = 'in progress' THEN amount ELSE 0 END) AS "inprogress"
         FROM orders`;

    const data = await Promise.all([
      orderCountPromise,
      orderStatusPromise,
    ]);

    const numberOfOrders = Number(data[0].rows[0].count ?? '0');
    const totalDone = data[1].rows[0].done ?? '0';
    const totalInProgress = data[1].rows[0].inprogress ?? '0';

    return {
      numberOfOrders,
      totalDone,
      totalInProgress,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredOrders(
  query: string,
  currentPage: number,
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const orders = await sql<OrdersTable>`
      SELECT
        *
      FROM orders
      WHERE
        orders.name ILIKE ${`%${query}%`} OR
        orders.description ILIKE ${`%${query}%`} OR
        orders.complexity ILIKE ${`%${query}%`} OR
        orders.amount::text ILIKE ${`%${query}%`} OR
        orders.date::text ILIKE ${`%${query}%`} OR
        orders.status ILIKE ${`%${query}%`}
      ORDER BY orders.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return orders.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch orders.');
  }
}

export async function fetchOrdersPages(query: string) {
  noStore();
  try {
    const count = await sql`SELECT COUNT(*)
    FROM orders
    WHERE
      orders.name ILIKE ${`%${query}%`} OR
      orders.description ILIKE ${`%${query}%`} OR
      orders.complexity ILIKE ${`%${query}%`} OR
      orders.amount::text ILIKE ${`%${query}%`} OR
      orders.date::text ILIKE ${`%${query}%`} OR
      orders.status ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of orders.');
  }
}

export async function fetchOrderById(id: string) {
  noStore();
  try {
    const data = await sql<OrderForm>`
      SELECT
        orders.id,
        orders.material_id,
        orders.amount,
        orders.name,
        orders.description,
        orders.complexity,
        orders.status,
        orders.date
      FROM orders
      WHERE orders.id = ${id};
    `;

    const order = data.rows.map((order) => ({
      ...order,
      // Convert amount from cents to dollars
      amount: order.amount,
    }));

    return order[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch order.');
  }
}

export async function fetchMaterials() {
  noStore();
  try {
    const data = await sql<MaterialField>`
      SELECT
        id,
        name
      FROM materials
      ORDER BY name ASC
    `;

    const materials = data.rows;
    return materials;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all materials.');
  }
}

export async function getUser(email: string) {
  noStore();
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
