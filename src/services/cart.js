async function addItem(userCart, item) {
    userCart.push(item);
}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if(index != -1) {
        userCart.splice(index, 1);
    }
}

async function removeItemByIndex(userCart, index) {
    const deleteIndex = index - 1;

    if(index >= 0 && index < userCart.length) {
        userCart.splice(deleteIndex, 1);
    }
}

async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    if(indexFound === -1) {
        console.log("Item não encontrado!");
        return;
    }

    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
    }

    if(userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
    }
}

async function calculateTotal(userCart) {
    const result = userCart.reduce((total, value) => total + value.subtotal(), 0);

    console.log(result);
}

async function displayCart(userCart) {
    console.log("Seu carrinho: ");
    userCart.forEach((element, index) => {
        console.log(`${index + 1}. ${element.name} - R$ ${element.price} | ${element.quantity}x | Subtotal = ${element.subtotal()}`);
    });
    
}

export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displayCart
}