import bcrypt from "bcryptjs";
const data = {
  orders: [
    {
      orderItems: [
        {
          name: " vivobook",
          Image: "/images/product2.png",
          price: 200000,
          countInStock: 5,
          product: "62792654e22cd29c68af8408",
          qty: 1,
        },
      ],
      shippingAddress: {
        fullName: "keziz mouayed",
        address: "khenchela",
        city: "ouled rechache",
        postalCode: "40013",
      },
      itemsPrice: "100",
      shippingPrice: "20",
      totalPrice: "120",
      user: "627e68f3e59f0e9f65c3a4db",
      traite: false,
    },
    {
      orderItems: [
        {
          name: " vivobook",
          Image: "/images/product2.png",
          price: 200000,
          countInStock: 5,
          product: "62792654e22cd29c68af8408",
          qty: 3,
        },
      ],
      shippingAddress: {
        fullName: "moncef bouchenacha",
        address: "bouira",
        city: "ouladi aiche",
        postalCode: "9000",
      },
      itemsPrice: "100",
      shippingPrice: "20",
      totalPrice: "120",
      user: "627e68f3e59f0e9f65c3a4dc",
      traite: true,
    },
  ],
  users: [
    {
      name: "amine",
      lastname: "hamoutene",
      email: "amine@estin.dz",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
      wilaya: "15-Tizi-Ouzou",
      phone: "7777777777",
    },
    {
      name: "mouayed",
      lastname: "keziz",
      email: "mouayed@estin.dz",
      password: bcrypt.hashSync("6969", 8),
      isAdmin: false,
      wilaya: "40-Khenchela",
      phone: "6666666666",
    },

    {
      name: "moncef",
      lastname: "bouchenacha",
      email: "mo@estin.dz",
      password: bcrypt.hashSync("123456", 8),
      isAdmin: false,
      wilaya: "09-Blida",
      phone: "5555555555",
    },
  ],

  products: [],
};

export default data;
