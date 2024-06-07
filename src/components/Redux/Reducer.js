
const initialState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  deteils: JSON.parse(localStorage.getItem("deteils")) || {},
  favorite: JSON.parse(localStorage.getItem("favorite")) || [],
  search: {},
  favCaunt: 0,
  basCaunt: 0,
};
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GREATE_PRODUCT":
      let changeProduct = [...state.product, action.payload];
      localStorage.setItem("product", JSON.stringify(changeProduct));
      return { ...state, product: changeProduct };

    case "ADD_TO_BASKET":
      action.payload.quantity = 1;
      let resBasket = [...state.basket, action.payload];
      localStorage.setItem("basket", JSON.stringify(resBasket));
      return { ...state, basket: resBasket };

    case "ADD_TO_DETEILS":
      return { ...state, deteils: action.payload };
    case "ADD_FAVORITE":
      let findFav = state.favorite.find((el) => el.id === action.payload.id);
      if (findFav) {
        let filterFav = state.favorite.filter(
          (el) => el.id !== action.payload.id
        );
        localStorage.setItem("favorite", JSON.stringify(filterFav));
        return { ...state, favorite: filterFav };
      } else {
        let changeFavorite = [...state.favorite, action.payload];
        localStorage.setItem("favorite", JSON.stringify(changeFavorite));
        return { ...state, favorite: changeFavorite };
      }

    case "REMOVE_BASKET":
      let resRemove = state.basket.filter((el) => el.id !== action.payload.id);
      localStorage.setItem("basket", JSON.stringify(resRemove));
      return { ...state, basket: resRemove };

    case "INCRIMENT":
      return { ...state, basket: state.basket.map((el) => el.id === action.payload.id ? {...el, quantity: el.quantity + 1} : el)};

    case "DECRIMENT":
      return {
        ...state,
        basket: state.basket.map((el) =>
          el.id === action.payload.id
            ? { ...el, quantity: el.quantity - 1 }
            : el
        ),
      };


    default:
      return state;
  }
};
