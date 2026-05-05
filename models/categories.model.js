const categories = [];
let nextId = 1;

export const CategoryModel = {
    findAll() {
        return categories;
    },

    findById(id) {
        return categories.find((category) => category.id === id) || null; 
    },

    create(data) {
        const newCategory = {
            id: nextId++,
            name: data.name
        };
        categories.push(newCategory);
        return newCategory;
    }
}