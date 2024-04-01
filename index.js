const express = require('express');
const app = express();
const port = 3000;


let product3 = { id: 3, name: "Men's T-Shirt", price: "1900.99", sex: "Men", description: "A comfortable cotton t-shirt for men.njinhuhbnuhbnuhbnuhbhbnmibhgvbhjnhbgyvb bhbuhjniujhnubnuijklmhbujbn hbnjjiujhnhbnmkibjbni hnjkhjk,jbuhbnjhmnkm", imageURL: "https://i.postimg.cc/wBMFXrk5/temp-Image-OD87-He.avif", rating: 3, category: "TShirt" }

let product5 = { id: 5, name: "Women's Dress", price: "4900.99", sex: "Women",  description: "An elegant dress for women suitable for various occasions.", imageURL: "https://i.postimg.cc/d17PrgdG/temp-Image-Qe4un-A.avif", rating: 4, category: "dresses" }

let product1 = { id: 1, name: "Plunging Neck Tied Bowknot Crop Blouse", price: "2900.00", sex: "women",  description: "Make a statement with our Plunging Neck Tied Bowknot Crop Blouse, featuring a daring neckline and chic bow detail for a touch of elegance.", imageURL: "https://i.postimg.cc/Zq1Tw35R/temp-Imageyq-UFo-Y.avif", rating: 4, category: "dresses" }

let product4 = { id: 4, name: "Floral Eyelet Shirred Mini Dress WHITE", price: "3200.99", sex: "Women",  description: "Embrace sunny days in style with our Floral Eyelet Shirred Mini Dress in crisp white, featuring delicate floral details and flattering shirred accents.", imageURL: "https://i.postimg.cc/6QMx2vDq/temp-Image-F2330x.avif", rating: 5, category: "dresses" }

let product2 = { id: 2, name: "Unisex Hoodie", price: "2900.99", sex: "Unisex",  description: "Comfortable hoodie suitable for both men and women.", imageURL: "https://i.postimg.cc/L6rZCbRB/temp-Imagec9uypk.avif", rating: 4, category: "tshirt" }

let product6 = { id: 6, name: "Tokyo Printed T-shirt", price: "2300.00", sex: "Unisex",  description: "Comfortable unisex T-shirt suitable for both men and women.", imageURL: "https://i.postimg.cc/pLSwwKyH/temp-Image-Z0mn69.avif", rating: 3, category: "tshirt" }

let product7 = { id: 7, name: "Pants For Apron Belly", price: "2900.00", sex: "Women",  description: "Comfortable unisex T-shirt suitable for both men and women.", imageURL: "https://i.postimg.cc/qqvRmW1w/temp-Imagem-ZL1f-V.avif", rating: 5, category: "pants" }

let product8 = { id: 8, name: "Floral Print Pants", price: "4500.00", sex: "women",  description: "Comfortable unisex T-shirt suitable for both men and women.", imageURL: "https://i.postimg.cc/sxsnb4Ww/temp-Image-UW8g-Bh.avif", rating: 4, category: "pants" }

let product9 = { id: 9, name: "Corduroy Casual Pants", price: "3350.00", sex: "Men",  description: "Comfortable unisex T-shirt suitable for both men and women.", imageURL: "https://i.postimg.cc/HjGLpjpZ/temp-Image-JTvjeu.avif", rating: 3, category: "pants" }

let product10 = { id: 10, name: "Ear Jewelry", price: "1600.00", sex: "Unisex",  description: "Comfortable unisex T-shirt suitable for both men and women.", imageURL: "https://i.postimg.cc/8PFy9cf8/temp-Image8tp-Hl1.avif", rating: 5, category: "Accessories" }

let product11 = { id: 11, name: "Rose Pendent Necklace", price: "900.00", sex: "Women",  description: "Comfortable unisex T-shirt suitable for both men and women.", imageURL: "https://i.postimg.cc/C5vxqJH2/temp-Imageg-D0z3-E.aviff", rating: 3, category: "Accessories" }

let product12 = { id:12, name: "Adidas Ladies Shoes", price: "5500.00", sex: "Women",  description: "Comfortable unisex T-shirt suitable for both men and women.", imageURL: "https://i.postimg.cc/jjJc3FDz/temp-Imagef64-Jc-F.avif", rating: 2, category: "shoes" }

let product13 = { id: 13, name: "Casual Sandles", price: "1700.00", sex: "Unisex",  description: "Comfortable unisex T-shirt suitable for both men and women.", imageURL: "https://i.postimg.cc/L6JnKKVg/temp-Image1r-Qffr.avif", rating: 3, category: "shoes" }

let product14 = { id: 14, name: "Asthetic Flower Tote Bag ", price: "2100.00", sex: "Unisex",  description: "Comfortable unisex T-shirt suitable for both men and women.", imageURL: "https://i.postimg.cc/FFZBtwKv/temp-Imageg-RHY24.avif", rating: 5, category: "bags" }

let prds = [product1, product2, product3, product4, product5, product6, product7, product8, product9,product10,product11,product12,product13,product14]

app.get('/products', (req, res) => {
    res.send(prds);
});

app.post('/searchProducts', (req, res) => {
    let products = [];

    for (const prd of prds) {
        products.push(prd)
    }



    res.send(products)
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
