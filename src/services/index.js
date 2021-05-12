export default class BurgerStoreService {
  getBurgers() {
    return [
      {
        id: 1,
        name: 'Дабл Чікен Кентукі',
        img: 'https://www.mcdonalds.com/is/image/content/dam/ua/nutrition/nfl-product/product/hero/Double%20Chicken%20Kentuky.png?$Product_Desktop$',
        ingredients: ['Булочка','Сыр','Котлета', 'Соус Кентукі'],
      },
      {
        id: 2,
        name: 'Біг Мак',
        img: 'https://www.mcdonalds.com/is/image/content/dam/ua/nutrition/nfl-product/product/hero/thumb.Sdwch_BigMac.png?$Product_Desktop$',
        ingredients: ['Булочка','Сыр','Котлета', 'Огурец'],
      },
      {
        id: 3,
        name: 'Дабл Чізбургер',
        img: 'https://www.mcdonalds.com/is/image/content/dam/ua/nutrition/nfl-product/product/hero/SdwchDoubleCheeseburger.png?$Product_Desktop$',
        ingredients: ['Булочка','Сыр','Котлета', 'Зелень'],
      },
      {
        id: 4,
        name: 'Роял Чізбургер',
        img: 'https://www.mcdonalds.com/is/image/content/dam/ua/nutrition/nfl-product/product/hero/Royal_Cheese.png?$Product_Desktop$',
        ingredients: ['Булочка','Сыр','Котлета', 'Помидор'],
      },
    ];
  }
}
