export default class Meal {
    constructor(id, categoryIds, title, affordablity, complexity, imageUrl, duration, ingredients, steps, isGlutenFree,
        isVegan, isLactoseFree, isVegetarian) {
            this.id = id;
            this.categoryIds = categoryIds;
            this.title = title,
            this.affordablity = affordablity;
            this.complexity = complexity;
            this.imageUrl = imageUrl,
            this.duration = duration;
            this.ingredients = ingredients;
            this.steps = steps;
            this.isGlutenFree = isGlutenFree;
            this.isVegan = isVegan;
            this.isVegetarian = isVegetarian;
            this.isLactoseFree = isLactoseFree;
    }
}