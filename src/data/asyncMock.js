const productos =
[
  {"brand": "Adidas",
   "model": "Forum 84 High Lakers",
    "id": 1,
    "size": [38, 39, 40, 41, 42, 43],
    "category": "Adidas",
    "price":  10000,
    "photo":"/img/Adidas Forum 84 High Lakers.webp",
      "stock": 10},

  {"brand": "Adidas",
   "model": "Forum Bad Bunny Back to school",
    "id": 2,
    "size": [38, 39, 40, 41, 42, 43],
    "category": "Adidas",
    "price":  10000,
    "photo":"/img/Adidas Forum Bad Bunny Back to school.webp",
      "stock": 10},

  {"brand": "Adidas",
   "model": "Forum Bad Bunny Blue Tint",
    "id": 3,
    "size": [38, 39, 40, 41, 42, 43],
    "category": "Adidas",
    "price":  10000,
    "photo":"/img/Adidas Forum Bad Bunny Blue Tint.webp",
      "stock": 10},

    {"brand": "Adidas",
   "model": "Yeezy Boost 350 V2 Oreo",
    "id": 4,
    "size": [38, 39, 40, 41, 42, 43],
    "category": "Adidas",
    "price":  10000,
    "photo":"/img/Adidas Yeezy Boost 350 V2 Oreo.webp",
      "stock": 10},

    {"brand": "Adidas",
   "model": "Yeezy Boost 350 V2 Zebra",
    "id": 5,
    "size": [38, 39, 40, 41, 42, 43],
    "category": "Adidas",
    "price":  10000,
    "photo":"/img/Adidas Yeezy Boost 350 V2 Zebra.webp",
      "stock": 10},

    {"brand": "New Balance",
   "model": "550 White Grey",
    "id": 6,
    "size": [38, 39, 40, 41, 42, 43],
    "category": "New Balance",
    "price":  10000,
    "photo":"/img/New Balance 550 White Grey.webp",
      "stock": 10},

    {"brand": "Nike",
   "model": "Air Force One Classic",
    "id": 7,
    "size": [38, 39, 40, 41, 42, 43],
    "category": "Nike",
    "price":  10000,
    "photo":"/img/Nike Air Force One Classic.webp",
      "stock": 10},

    {"brand": "Nike",
   "model": "Air Jordan 1 Low x Travis Scott Mocha Reverse",
    "id": 8,
    "size": [38, 39, 40, 41, 42, 43],
    "category": "Nike",
    "price":  10000,
    "photo":"/img/Nike Air Jordan 1 Low x Travis Scott Mocha Reverse.webp",
      "stock": 10},

    {"brand": "Nike",
   "model": "Air Jordan 1 Mid Chicago Black Toe",
    "id": 9,
    "size": [38, 39, 40, 41, 42, 43],
    "category": "Nike",
    "price":  10000,
    "photo":"/img/Nike Air Jordan 1 Mid Chicago Black Toe.webp",
      "stock": 10},

    {"brand": "Nike",
   "model": "Air Jordan 1 Retro High Mocha",
    "id": 10,
    "size": [38, 39, 40, 41, 42, 43],
    "category": "Nike",
    "price":  10000,
    "photo":"/img/Nike Air Jordan 1 Retro High Mocha.webp",
      "stock": 10},

    {"brand": "Nike",
   "model": "Air Jordan 1 Retro Low Travis Scott Fragment",
    "id": 11,
    "size": [38, 39, 40, 41, 42, 43],
    "category": "Nike",
    "price":  10000,
    "photo":"/img/Nike Air Jordan 1 Retro Low Travis Scott Fragment.webp",
      "stock": 10},

    {"brand": "Nike",
   "model": "Blazer Mid 77' Vintage",
    "id": 12,
    "size": [38, 39, 40, 41, 42, 43],
    "category": "Nike",
    "price":  10000,
    "photo":"/img/Nike Blazer Mid 77' Vintage.webp",
      "stock": 10},

    {"brand": "Nike",
   "model": "sb Dunk panda",
    "id": 13,
    "size": [38, 39, 40, 41, 42, 43],
    "category": "Nike",
    "price":  10000,
    "photo":"/img/Nike sb Dunk panda.webp",
      "stock": 10}
]

export const getProducts = () => {
  return new Promise((resolve, reject) => {

    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    } else {
      reject("No hay productos");
    }
  });
};

export const getItemById = (id) => {

   return new Promise ((resolve, reject) => {

    const item = productos.find((el) => el.id === id)

    if(item){
      resolve(item)
    } else {
      reject ("no se encontro el producto")
    }
   })
}