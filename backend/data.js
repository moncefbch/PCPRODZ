import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "amine",
      email: "amine@estin.dz",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
      wilaya: "15-Tizi-Ouzou",
    },
    {
      name: "mouayed",
      email: "mouayed@estin.dz",
      password: bcrypt.hashSync("6969", 8),
      isAdmin: false,
      wilaya: "15-Khenchela",
    },

    {
      name: "moncef",
      email: "mo@estin.dz",
      password: bcrypt.hashSync("123456", 8),
      isAdmin: false,
      wilaya: "09-Blida",
    },
  ],

  products: [
    {
      _name: "asus vivobook",
      brand: "asus",
      processeur: "i 5 8eme generation",
      ram: "8GO",
      disque: "250Go SSD",
      gpu: "RTX 3060",
      image: "/images/product2.png",
      category: "laptop",
      price: 200000,
      countInStock: 0,
      rating: 4,
    },
    {
      _name: "test name",
      brand: "asus",
      processeur: "i 5 8eme generation",
      ram: "8GO",
      disque: "250Go SSD",
      gpu: "RTX 3060",
      image: "/images/product2.png",
      category: "laptop",
      price: 200000,
      countInStock: 0,
      rating: 4,
    },
    {
      _name: "asus vivobook",
      brand: "test brand",
      processeur: "i 5 8eme generation",
      ram: "8GO",
      disque: "250Go SSD",
      gpu: "RTX 3060",
      image: "/images/product2.png",
      category: "laptop",
      price: 200000,
      countInStock: 0,
      rating: 4,
    },
    {
      _name: "asus vivobook",
      brand: "asus",
      processeur: "test processeur i7",
      ram: "8GO",
      disque: "250Go SSD",
      gpu: "RTX 3060",
      image: "/images/product2.png",
      category: "laptop",
      price: 200000,
      countInStock: 0,
      rating: 4,
    },
    {
      _name: "asus vivobook",
      brand: "asus",
      processeur: "i 5 8eme generation",
      ram: "test ram 14GB",
      disque: "250Go SSD",
      gpu: "RTX 3060",
      image: "/images/product2.png",
      category: "laptop",
      price: 200000,
      countInStock: 0,
      rating: 4,
    },
    {
      _name: "asus vivobook",
      brand: "asus",
      processeur: "i 5 8eme generation",
      ram: "8GO",
      disque: "test disque 69GB",
      gpu: "RTX 3060",
      image: "/images/product2.png",
      category: "laptop",
      price: 200000,
      countInStock: 0,
      rating: 4,
    },
    {
      _name: "asus vivobook",
      brand: "asus",
      processeur: "i 5 8eme generation",
      ram: "8GO",
      disque: "250Go SSD",
      gpu: "test gpu RTX 9999 TI",
      image: "/images/product2.png",
      category: "laptop",
      price: 200000,
      countInStock: 0,
      rating: 4,
    },
    {
      _name: "asus vivobook",
      brand: "asus",
      processeur: "i 5 8eme generation",
      ram: "8GO",
      disque: "250Go SSD",
      gpu: "RTX 3060",
      image: "/images/product2.png",
      category: "test category",
      price: 200000,
      countInStock: 0,
      rating: 4,
    },
    {
      _name: "asus phone",
      brand: "asus",
      processeur: "i 5 8eme generation",
      ram: "8GO",
      disque: "250Go SSD",
      gpu: "RTX 3060",
      image: "/images/product2.png",
      category: "phone",
      price: 200000,
      countInStock: 5,
      rating: 4,
    },
    {
      _name: " vivobook",
      brand: "acus",
      processeur: "i 3 8eme generation",
      ram: "816O",
      disque: "500Go SSD",
      gpu: "RTX 3060",
      image: "/images/product-1.jpg",
      category: "laptop",
      price: 200000,
      countInStock: 5,
      rating: 4,
    },

    {
      _name: " vivobook",
      brand: "acus",
      processeur: "i 3 8eme generation",
      ram: "816O",
      disque: "500Go SSD",
      gpu: "RTX 3060",
      image: "/images/product-3.jpg",
      category: "laptop",
      price: 200000,
      countInStock: 5,
      rating: 4,
    },

    {
      _name: " vivobook",
      brand: "acus",
      processeur: "i 3 8eme generation",
      ram: "816O",
      disque: "500Go SSD",
      gpu: "RTX 3060",
      image: "/images/product2.png",
      category: "laptop",
      price: 200000,
      countInStock: 5,
      rating: 4,
    },
    {
      _name: " vivobook",
      brand: "acus",
      processeur: "i 3 8eme generation",
      ram: "816O",
      disque: "500Go SSD",
      gpu: "RTX 3060",
      image: "/images/product2.png",
      category: "laptop",
      price: 200000,
      countInStock: 5,
      rating: 4,
    },
    {
      _name: " vivobook",
      brand: "acus",
      processeur: "i 3 8eme generation",
      ram: "816O",
      disque: "500Go SSD",
      gpu: "RTX 3060",
      image: "/images/product2.png",
      category: "laptop",
      price: 200000,
      countInStock: 5,
      rating: 4,
    },
  ],
};

export default data;
