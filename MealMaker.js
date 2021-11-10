const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  
  /*set courses (courses) {
    this._courses = courses;
  },*/

  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
  },
  set mains(mains) {
    this._courses.mains = mains;
  },
  set desserts(desserts) {
    this._courses.desserts = desserts;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };

    this._courses[courseName].push(dish);
  },

   getRandomDishFromCourse (courseName) {
     const dishes = this._courses[courseName];
     const randomIndex = Math.floor(Math.random() * dishes.length);
     return dishes[randomIndex];
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name} for a total price of ${totalPrice}`;
  }
};

menu.addDishToCourse('appetizers', 'app1', 5);
menu.addDishToCourse('appetizers', 'app2', 5);
menu.addDishToCourse('appetizers', 'app3', 5);
menu.addDishToCourse('mains', 'main1', 10);
menu.addDishToCourse('mains', 'main2', 10);
menu.addDishToCourse('mains', 'main3', 10);
menu.addDishToCourse('desserts', 'des1', 5);
menu.addDishToCourse('desserts', 'des2', 5);
menu.addDishToCourse('desserts', 'des3', 5);

const meal = menu.generateRandomMeal();
console.log('meal: '+ meal);


