import createItem from "./services/item.js";
import * as cartServices from "./services/cart.js";

const cart = [];
const wishList = [];

const item1 = await createItem("Hotwheels", 20.99, 2);
const item2 = await createItem("Hotwheels Vrumvrum", 42.49, 5);
const item3 = await createItem("Carrinho", 15.39, 1);

await cartServices.addItem(cart, item1);
await cartServices.addItem(cart, item2);
await cartServices.addItem(wishList, item3);

// await cartServices.removeItemByIndex(cart, 1);
await cartServices.removeItem(cart, item2);

await cartServices.displayCart(cart);

console.log(item1.subtotal());

await cartServices.calculateTotal(cart);
