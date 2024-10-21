window.addEventListener('pageshow', function(event) {
    if (event.persisted) {  // Checks if the page was loaded from cache
        window.location.reload();  // Forces a reload to get fresh data
    }
});


export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) cart = [];

export function saveCartInLocalStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(name){
    let element;

    cart.forEach((value) => {
        if (name === value.name) element = value;
    })

    if (element){
        element.quantity += 1;
    }
    else{
        cart.push({
            name: name,
            quantity: 1
        })
    }
    console.log(cart);

    saveCartInLocalStorage();
}

export function removeFromCart(name){
    let newCart = [];
    cart.forEach((value) =>{
        if (value.name !== name){
            newCart.push(value);
        }
    })
    cart = newCart;

    saveCartInLocalStorage();
}