import Product from "../models/product.model.js";
const coffeeProducts = [
    {
        name: "Espresso Classic",
        description: "Strong single-shot espresso with rich crema.",
        price: 2.5,
        category: "coffee",
        inStock: true,
        imageUrl: "https://example.com/images/espresso-classic.jpg"
    },
    {
        name: "Iced Caramel Latte",
        description: "Smooth espresso, milk, and caramel over ice.",
        price: 4.25,
        category: "coffee",
        inStock: true,
        imageUrl: "https://example.com/images/iced-caramel-latte.jpg"
    },
    {
        name: "Vietnamese Drip Coffee",
        description: "Slow-dripped robusta with condensed milk.",
        price: 3.75,
        category: "coffee",
        inStock: true,
        imageUrl: "https://example.com/images/vietnamese-drip-coffee.jpg"
    }
];
export const getAllProducts = async () => Product.find();
export const seedCoffeeProducts = async () => {
    const existingCoffee = await Product.countDocuments({ category: "coffee" });
    if (existingCoffee > 0) {
        return { inserted: 0, message: "Coffee products already exist." };
    }
    const insertedDocs = await Product.insertMany(coffeeProducts);
    return { inserted: insertedDocs.length, message: "Coffee products seeded successfully." };
};
