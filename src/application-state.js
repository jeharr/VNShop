// this file contains the default top-level application state that will be passed around
// and updated through the use of React's useContext hook

export default {
  cart: {}, // will store products that are added to the cart as well as the quantity of each item
  qtyTotal: 0,
  subtotal: "0.00",
  products: [] // will store all of the fetched products from the api call
};
