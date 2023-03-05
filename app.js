function store(db, select, update) {
  let data = {
    productsStore: {
      carts: [
        { id: "1", user_id: "1", product_id: "2" },
        { id: "2", user_id: "2", product_id: "1" },
        { id: "3", user_id: "2", product_id: "1" },
        { id: "4", user_id: "2", product_id: "1" },
        { id: "5", user_id: "2", product_id: "1" },
        { id: "6", user_id: "2", product_id: "1" },
        { id: "7", user_id: "2", product_id: "1" },
        { id: "8", user_id: "2", product_id: "1" },
        { id: "9", user_id: "2", product_id: "1" },
        { id: "10", user_id: "2", product_id: "1" },
        { id: "11", user_id: "2", product_id: "1" },
        { id: "12", user_id: "2", product_id: "1" },
        { id: "13", user_id: "2", product_id: "1" },
        { id: "14", user_id: "2", product_id: "1" },
        { id: "15", user_id: "2", product_id: "1" },
        { id: "16", user_id: "2", product_id: "1" },
        { id: "17", user_id: "2", product_id: "1" },
        { id: "18", user_id: "2", product_id: "1" },
        { id: "19", user_id: "2", product_id: "1" },
        { id: "20", user_id: "2", product_id: "1" },
        { id: "21", user_id: "2", product_id: "1" },
      ],

      categories: [
        { id: "1", name: "JEANS" },
        { id: "2", name: "DRESSES" },
        { id: "3", name: "JUMPERS" },
        { id: "4", name: "COATS" },
        { id: "5", name: "OUTERWEAR" },
      ],

      products: [
        {
          id: "1",
          name: "massa non ante bibendum",
          category_id: "2",
          price: "89.56",
          img: "1.jpg",
          discount: "15",
          count: "39",
          hot: "0",
        },
        {
          id: "2",
          name: "id, libero. Donec consectetuer mauris id",
          category_id: "5",
          price: "48.25",
          img: "2.jpg",
          discount: "89",
          count: "45",
          hot: "1",
        },
        {
          id: "3",
          name: "tellus. Phasellus elit pede, malesuada vel,",
          category_id: "5",
          price: "2.37",
          img: "3.jpg",
          discount: "61",
          count: "28",
          hot: "1",
        },
        {
          id: "4",
          name: "nec tempus scelerisque, lorem ipsum sodales",
          category_id: "4",
          price: "55.44",
          img: "4.jpg",
          discount: "35",
          count: "27",
          hot: "1",
        },
        {
          id: "5",
          name: "molestie pharetra",
          category_id: "5",
          price: "3.28",
          img: "5.jpg",
          discount: "74",
          count: "8",
          hot: "0",
        },
        {
          id: "6",
          name: "mauris id sapien. Cras",
          category_id: "2",
          price: "7.44",
          img: "6.jpg",
          discount: "55",
          count: "47",
          hot: "1",
        },
        {
          id: "7",
          name: "augue ac",
          category_id: "1",
          price: "79.09",
          img: "7.jpg",
          discount: "0",
          count: "19",
          hot: "0",
        },
        {
          id: "8",
          name: "dolor quam, elementum",
          category_id: "2",
          price: "40.31",
          img: "8.jpg",
          discount: "88",
          count: "15",
          hot: "0",
        },
        {
          id: "9",
          name: "tincidunt adipiscing. Mauris molestie pharetra",
          category_id: "1",
          price: "70.76",
          img: "9.jpg",
          discount: "92",
          count: "45",
          hot: "1",
        },
        {
          id: "10",
          name: "ante, iaculis nec, eleifend non,",
          category_id: "5",
          price: "87.73",
          img: "10.jpg",
          discount: "15",
          count: "23",
          hot: "1",
        },
        {
          id: "11",
          name: "egestas. Fusce",
          category_id: "5",
          price: "71.31",
          img: "11.jpg",
          discount: "27",
          count: "1",
          hot: "0",
        },
        {
          id: "12",
          name: "egestas. Fusce aliquet magna a",
          category_id: "5",
          price: "18.19",
          img: "12.jpg",
          discount: "23",
          count: "49",
          hot: "0",
        },
        {
          id: "13",
          name: "laoreet lectus quis massa.",
          category_id: "4",
          price: "35.37",
          img: "13.jpg",
          discount: "97",
          count: "44",
          hot: "1",
        },
        {
          id: "14",
          name: "non, sollicitudin",
          category_id: "4",
          price: "10.57",
          img: "14.jpg",
          discount: "47",
          count: "8",
          hot: "0",
        },
        {
          id: "15",
          name: "magna",
          category_id: "1",
          price: "23.92",
          img: "15.jpg",
          discount: "49",
          count: "16",
          hot: "0",
        },
        {
          id: "16",
          name: "nisi a odio semper cursus. Integer",
          category_id: "1",
          price: "76.02",
          img: "16.jpg",
          discount: "61",
          count: "36",
          hot: "1",
        },
        {
          id: "17",
          name: "pharetra nibh. Aliquam ornare,",
          category_id: "3",
          price: "17.42",
          img: "17.jpg",
          discount: "12",
          count: "14",
          hot: "1",
        },
        {
          id: "18",
          name: "id, libero. Donec consectetuer mauris",
          category_id: "3",
          price: "59.17",
          img: "18.jpg",
          discount: "50",
          count: "23",
          hot: "0",
        },
      ],

      users: [{ id: "1", login: "u1", password: "123", role: "user" }],
    },
  };

  if (db && select) {
    return data[db][select];
  }
}

function register() {
  let login = prompt("Введите логин");
  let password = prompt("Введите пароль");

  if (login && password) {
    let users = store('productsStore', 'users', null)
    let isUser = false;

    for (let index = 0; index < users.length; index++) {
      if (login === users[index].login) {
        alert("Уже есть такой пользователь");
        break;
      }

      if (!isUser) {
        alert("Вы зарегестрированы");
      }
    }
  }

  
}

register();
