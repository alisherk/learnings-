const obj = {
    name: 'Kim', 
    active: true, 
    cart: [], 
    purchases: []
}; 

const compose = (f,g) => (...args) => f(g(...args));
const purchaseItem = (...fns) => fns.reduce(compose);

console.log(purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart,
)(obj, {name: 'laptop', price: 200}));

/* const pipe = (f,g) => (...args) => g(f(...args));
const purchaseItem = (...fns) => fns.reduce(pipe); 

console.log(purchaseItem(
    addItemToCart,
    applyTaxToItems,
    buyItem,
    emptyCart,
)(obj, {name: 'laptop', price: 200}));
 */


function addItemToCart(user, item){
    const updatedCart = user.cart.concat(item); 
    return Object.assign({}, user, {cart: updatedCart});
}

function applyTaxToItems(user){
    const {cart} = user; 
    const taxRate = 0.5; 
    const updatedCart = cart.map(item => {
        return {
            name: item.name, 
            price: item.price * taxRate
        }
    })
    return Object.assign({}, user, {cart: updatedCart});
}

function buyItem(user){
    return Object.assign({}, user, {purchases: user.cart});
}

function emptyCart(user){
    return Object.assign({}, user, {cart: []})
}

