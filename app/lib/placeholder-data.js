// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Admin',
    email: "admin@gmail.com",
    password: '123456',
  },
];

const materials = [
  {
    id: '671c289a-73fd-43eb-b92c-f09e23ad9d80',
    name: 'PLA'
  },
  {
    id: '05e8f9f0-2a5e-49ae-8b4b-4b8aacb11b00',
    name: 'ABS'
  },
  {
    id: '062c7941-3749-4345-9c7d-3e54f5884aa4',
    name: 'PETG'
  },
  {
    id: '639ecd74-7ea3-46da-8092-f2f28fc7daa3',
    name: 'Nylon'
  },
  {
    id: 'f2755b32-2d12-4394-b71b-aa5ae07623cf',
    name: 'TPE'
  },
];

const ordersInfo = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Кріплення',
    description: "Кріплення для FPV",
    image_url: '/orders/images-1.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Корпус для вога',
    description: "Корпус для вога, треба виконати дуже швидко",
    image_url: '/orders/images-2.png',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Корпус FPV дронів',
    description: "Корпус, на який кріпиться плата, моторчики та батарея.",
    image_url: '/orders/images-3.png',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Секретна деталь',
    description: "Без коментарів",
    image_url: '/orders/images-4.png',
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'Кріплення для FPV',
    description: "Кріплення моторчиків для FPV",
    image_url: '/orders/images-5.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Тримач для надводного дрона',
    description: "Нам треба міцний та термостійкий матеріал",
    image_url: '/orders/images-6.png',
  },
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Секретна деталь',
    description: "Без коментарів",
    image_url: '/orders/images-7.png',
  },
  {
    id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    name: 'Підставка під рацію',
    description: "Підставка під рацію в HUMVEE",
    image_url: '/orders/images-8.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Тримач зброї в авто',
    description: "Тримач, який можна поставити в багажник і безпечно розприділити зброю",
    image_url: '/orders/images-9.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Корпус FPV дронів',
    description: "Корпус для вога, треба виконати дуже швидко",
    image_url: '/orders/images-10.png',
  },
  {
    id: 'bf4ae42e-dbdf-42b4-b0a9-5b23336f23fe',
    name: 'Тримач для надводного дрона',
    description: "Нам треба міцний та термостійкий матеріал",
    image_url: '/orders/images-11.png',
  },
  {
    id: '8a7af3ba-1b3a-4975-9d33-321f7c1a4b2a',
    name: 'Секретна деталь',
    description: "Без коментарів",
    image_url: '/orders/images-12.png',
  },
  {
    id: '272f38c0-4e72-44d0-ab9a-30e7e77ce64f',
    name: 'Підставка під рацію',
    description: "Підставка під рацію в HUMVEE",
    image_url: '/orders/images-13.png',
  },
  {
    id: '663efe80-dd51-4307-9f89-1d3d76a0519a',
    name: 'Тримач зброї в авто',
    description: "Тримач, який можна поставити в багажник і безпечно розприділити зброю",
    image_url: '/orders/images-14.png',
  },
  {
    id: 'a0f98737-80ed-49dd-9f9e-f13e4ae4d4b0',
    name: 'Корпус FPV дронів',
    description: "Корпус для вога, треба виконати дуже швидко",
    image_url: '/orders/images-15.png',
  },
];

const orders = [
  {
    ...ordersInfo[0],
    amount: 10,
    status: 'done',
    complexity: 'easy',
    material_id: '671c289a-73fd-43eb-b92c-f09e23ad9d80',
    date: '2022-06-05',
  },
  {
    ...ordersInfo[1],
    amount: 50,
    status: 'done',
    complexity: 'medium',
    material_id: '671c289a-73fd-43eb-b92c-f09e23ad9d80',
    date: '2022-12-06',
  },
  {
    ...ordersInfo[2],
    amount: 10,
    status: 'done',
    complexity: 'easy',
    material_id: '05e8f9f0-2a5e-49ae-8b4b-4b8aacb11b00',
    date: '2022-11-14',
  },
  {
    ...ordersInfo[3],
    amount: 35,
    status: 'done',
    complexity: 'medium',
    material_id: '062c7941-3749-4345-9c7d-3e54f5884aa4',
    date: '2022-10-29',
  },
  {
    ...ordersInfo[4],
    amount: 80,
    status: 'in progress',
    complexity: 'difficult',
    material_id: '639ecd74-7ea3-46da-8092-f2f28fc7daa3',
    date: '2023-09-10',
  },
  {
    ...ordersInfo[5],
    amount: 30,
    status: 'in progress',
    complexity: 'easy',
    material_id: 'f2755b32-2d12-4394-b71b-aa5ae07623cf',
    date: '2023-08-05',
  },
  {
    ...ordersInfo[6],
    amount: 20,
    status: 'in progress',
    complexity: 'medium',
    material_id: '671c289a-73fd-43eb-b92c-f09e23ad9d80',
    date: '2023-07-16',
  },
  {
    ...ordersInfo[7],
    amount: 50,
    status: 'in progress',
    complexity: 'easy',
    material_id: '05e8f9f0-2a5e-49ae-8b4b-4b8aacb11b00',
    date: '2023-06-27',
  },
  {
    ...ordersInfo[8],
    amount: 50,
    status: 'in progress',
    complexity: 'easy',
    material_id: '062c7941-3749-4345-9c7d-3e54f5884aa4',
    date: '2023-06-09',
  },
  {
    ...ordersInfo[9],
    amount: 45,
    status: 'in progress',
    complexity: 'easy',
    material_id: '062c7941-3749-4345-9c7d-3e54f5884aa4',
    date: '2023-06-17',
  },
  {
    ...ordersInfo[10],
    amount: 35,
    status: 'in progress',
    complexity: 'easy',
    material_id: '671c289a-73fd-43eb-b92c-f09e23ad9d80',
    date: '2023-06-07',
  },
  {
    ...ordersInfo[11],
    amount: 15,
    status: 'in progress',
    complexity: 'difficult',
    material_id: '671c289a-73fd-43eb-b92c-f09e23ad9d80',
    date: '2023-08-19',
  },
  {
    ...ordersInfo[12],
    amount: 100,
    status: 'done',
    complexity: 'difficult',
    material_id: '062c7941-3749-4345-9c7d-3e54f5884aa4',
    date: '2023-06-03',
  },
  {
    ...ordersInfo[13],
    amount: 20,
    status: 'done',
    complexity: 'medium',
    material_id: '639ecd74-7ea3-46da-8092-f2f28fc7daa3',
    date: '2023-06-18',
  },
  {
    ...ordersInfo[14],
    amount: 50,
    status: 'in progress',
    complexity: 'medium',
    material_id: '639ecd74-7ea3-46da-8092-f2f28fc7daa3',
    date: '2021-10-04',
  }
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

module.exports = {
  users,
  orders,
  materials,
  revenue,
};
