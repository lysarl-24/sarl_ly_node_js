const products = [];
let nextId = 1;

export const ProductModel = {
    findAll() {
        return products;
    },

    findById(id) {
        return products.find((product) => product.id === id) || null;
    },

    create(data) {
        const newProduct = {
            id: nextId++,
            name: data.name,
            price: data.price
        };

        products.push(newProduct);
        return newProduct;
    },

    update(id, data) {
        const product = products.find((item) => item.id === id);
        if (!product) return null;

        product.name = data.name ?? product.name;
        product.price = data.price ?? product.price;
        return product;
    },

    remove(id) {
        const index = products.findIndex((product) => product.id === id);
        if (index === -1) return false;

        products.splice(index, 1);
        return true;
    }
};
