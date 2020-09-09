export const initialState = {
  basket: [
    {
      id: "12345",
      title:
        "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses",
      price: 800,
      rating: 5,
      image:
        "https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      id: "12657656hyf345",
      title:
        "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses",
      price: 800,
      rating: 5,
      image:
        "https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY327_FMwebp_QL65_.jpg",
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //Logic for adding item to
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      //Logic for removing item from basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        //items exists in basket, remove it...
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `cant remove prodect (id: ${action.id}) as its not there in basket`
        );
      }
      return { ...state, basket: newBasket };

    default:
      return state;
  }
};
export default reducer;

/*
 */
