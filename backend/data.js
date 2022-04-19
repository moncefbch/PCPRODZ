import bcrypt from 'bcryptjs';
const data = {
  users : [
    {
    
      email:'amine@estin.dz',
      password: bcrypt.hashSync('1234',8),
      isAdmin : true,
    },
    {
      email:'mo@estin.dz',
      password: bcrypt.hashSync('123456',8),
      isAdmin : false,
    },
  ],

  products: [
    {
      
      _name: 'asus vivobook',
      brand: 'asus',
      processeur: 'i 5 8eme generation',
      ram: '8GO',
      disque: '250Go SSD',
      gpu: 'RTX 3060',
      image: "/images/product2.png",
      description:"ak Ta3ref",
      category: 'laptop',
      price: 200000,
      rating:4,
    },
    {
      
      _name: ' vivobook',
      brand: 'acus',
      processeur: 'i 3 8eme generation',
      ram: '816O',
      disque: '500Go SSD',
      gpu: 'RTX 3060',
      image: "/images/product-1.jpg",
      description:"ak Ta3ref",
      category: 'laptop',
      price: 200000,
      rating:4,
    },

    {
      
      _name: ' vivobook',
      brand: 'acus',
      processeur: 'i 3 8eme generation',
      ram: '816O',
      disque: '500Go SSD',
      gpu: 'RTX 3060',
      image: "/images/product-3.jpg",
      description:"ak Ta3ref",
      category: 'laptop',
      price: 200000,
      rating:4,
    },

    {
      
      _name: ' vivobook',
      brand: 'acus',
      processeur: 'i 3 8eme generation',
      ram: '816O',
      disque: '500Go SSD',
      gpu: 'RTX 3060',
      image: "/images/product2.png",
      description:"ak Ta3ref",
      category: 'laptop',
      price: 200000,
      rating:4,
    },
    {
      
      _name: ' vivobook',
      brand: 'acus',
      processeur: 'i 3 8eme generation',
      ram: '816O',
      disque: '500Go SSD',
      gpu: 'RTX 3060',
      image: "/images/product2.png",
      description:"ak Ta3ref",
      category: 'laptop',
      price: 200000,
      rating:4,
    },
    {
      
      _name: ' vivobook',
      brand: 'acus',
      processeur: 'i 3 8eme generation',
      ram: '816O',
      disque: '500Go SSD',
      gpu: 'RTX 3060',
      image: "/images/product2.png",
      description:"ak Ta3ref",
      category: 'laptop',
      price: 200000,
      rating:4,
    },

  ],
};

export default data;
