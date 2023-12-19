import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const productos =  [
  {"brand": "Adidas",
   "model": "Forum 84 High Lakers",
    "size": [38, 39, 40, 41, 42, 43],
    "category": "Adidas",
    "price":  10000,
    "photo":"/img/Adidas Forum 84 High Lakers.webp",
      "stock": 10},

  {"brand": "Adidas",
   "model": "Forum Bad Bunny Back to school",
    "size": [38, 39, 40, 41, 42, 43],
    "category": "Adidas",
    "price":  10000,
    "photo":"/img/Adidas Forum Bad Bunny Back to school.webp",
      "stock": 10},

  {"brand": "Adidas",
   "model": "Forum Bad Bunny Blue Tint",
    "size": [38, 39, 40, 41, 42, 43],
    "category": "Adidas",
    "price":  10000,
    "photo":"/img/Adidas Forum Bad Bunny Blue Tint.webp",
      "stock": 10},

    {"brand": "Adidas",
   "model": "Yeezy Boost 350 V2 Oreo",
    "size": [38, 39, 40, 41, 42, 43],
    "category": "Adidas",
    "price":  10000,
    "photo":"/img/Adidas Yeezy Boost 350 V2 Oreo.webp",
      "stock": 10},

    {"brand": "Adidas",
   "model": "Yeezy Boost 350 V2 Zebra",
    "size": [38, 39, 40, 41, 42, 43],
    "category": "Adidas",
    "price":  10000,
    "photo":"/img/Adidas Yeezy Boost 350 V2 Zebra.webp",
      "stock": 10},

    {"brand": "New Balance",
   "model": "550 White Grey",
    "size": [38, 39, 40, 41, 42, 43],
    "category": "New Balance",
    "price":  10000,
    "photo":"/img/New Balance 550 White Grey.webp",
      "stock": 10},

    {"brand": "Nike",
   "model": "Air Force One Classic",
    "size": [38, 39, 40, 41, 42, 43],
    "category": "Nike",
    "price":  10000,
    "photo":"/img/Nike Air Force One Classic.webp",
      "stock": 10},

    {"brand": "Nike",
   "model": "Air Jordan 1 Low x Travis Scott Mocha Reverse",
    "size": [38, 39, 40, 41, 42, 43],
    "category": "Nike",
    "price":  10000,
    "photo":"/img/Nike Air Jordan 1 Low x Travis Scott Mocha Reverse.webp",
      "stock": 10},

    {"brand": "Nike",
   "model": "Air Jordan 1 Mid Chicago Black Toe",
    "size": [38, 39, 40, 41, 42, 43],
    "category": "Nike",
    "price":  10000,
    "photo":"/img/Nike Air Jordan 1 Mid Chicago Black Toe.webp",
      "stock": 10},

    {"brand": "Nike",
   "model": "Air Jordan 1 Retro High Mocha",
    "size": [38, 39, 40, 41, 42, 43],
    "category": "Nike",
    "price":  10000,
    "photo":"/img/Nike Air Jordan 1 Retro High Mocha.webp",
      "stock": 10},

    {"brand": "Nike",
   "model": "Air Jordan 1 Retro Low Travis Scott Fragment",
    "size": [38, 39, 40, 41, 42, 43],
    "category": "Nike",
    "price":  10000,
    "photo":"/img/Nike Air Jordan 1 Retro Low Travis Scott Fragment.webp",
      "stock": 10},

    {"brand": "Nike",
   "model": "Blazer Mid 77' Vintage",
    "size": [38, 39, 40, 41, 42, 43],
    "category": "Nike",
    "price":  10000,
    "photo":"/img/Nike Blazer Mid 77' Vintage.webp",
      "stock": 10},

    {"brand": "Nike",
   "model": "sb Dunk panda",
    "size": [38, 39, 40, 41, 42, 43],
    "category": "Nike",
    "price":  10000,
    "photo":"/img/Nike sb Dunk panda.webp",
      "stock": 10}
];


export const seedProducts = () => {

    productos.forEach( producto => {
        addDoc(collection( db, "productos"), producto)
    })

}