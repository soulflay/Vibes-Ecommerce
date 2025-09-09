let iconCart = document.querySelector(".cart_icon");
let cart = document.querySelector(".CartTab");
let Close = document.querySelector(".close");
let list = document.querySelector(".products");



// cart section javascript
iconCart.addEventListener('click', () => {
    cart.style.right = '0';
});

document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('close')) {
        cart.style.right = '-100%';
    }
});


let products = [
    {
        "id" : 1,
        "name" : "Plaid Hooded shirt without tee",
        "price" : 6000,
        "image" : "assets/images/Boys Buffalo Plaid Hooded Shirt Without Tee.jpg",
        "inCart" : 0,
        "productState" : "sale",
        "starIcons": [
            "fa-solid fa-star",
            "fa-solid fa-star",
            "fa-solid fa-star",
            "fa-solid fa-star",
            "fa-solid fa-star",              
        ]
    },

    
    {
        "id" : 2,
        "name" : "Women's Vintage A-line Pleated shirt",
        "price" : 3500,
        "image" : "assets/images/Dressever Women's Vintage A-line Printed Pleated Flared Midi Skirts.jpg",
        "inCart" : 0,
        "starIcons": [
            "fa-solid fa-star",
            "fa-solid fa-star",
            "fa-solid fa-star",
            "fa-solid fa-star",
            "fa-solid fa-star-half-stroke",        
        ]
    },

    
    {
        "id" : 3,
        "name" : "round Neck Short Sleeve T-Shirt",
        "price" : 4500,
        "image" : "assets/images/Breathable Solid Color round Neck Short Sleeve Cotton T-Shirts.jpg",
        "productState" : "hot",
        "inCart" : 0,
        "starIcons": [
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",              
            ]
    },

    
    {
        "id" : 4,
        "name" : "Bungee Cords Pockets Casual Joggers",
        "price" : 8000,
        "image" : "assets/images/Mens Solid Color Bungee Cords Pockets Designer Casual Jogger Pants - Black _ 2XL.jpg",
        "inCart" : 0,
        "starIcons": [
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",              
            ]
    },

    {
        "id" : 5,
        "name" : "men's Light-blue slant pocket jeans",
        "price" : 7000,
        "image" : "assets/images/Men Light Wash Slant Pocket Jeans.jpg",
        "inCart" : 0,
        "starIcons": [
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star-half-stroke",              
            ]
    },

    {
        "id" : 6,
        "name" : "Mens straight Baggy Jeans",
        "price" : 5000,
        "image" : "assets/images/Spring Summer Black Blue Men's Jeans Streetwear Denim Cotton Straight Baggy Pants Casual Hip Hop Loose Wide Jeans Trousers Black-38.jpg",
        "inCart" : 0,
        "productState" : "sale",
        "starIcons": [
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star-half-stroke",
                ]
    },

    {
        "id" : 7,
        "name" : "letter graphic Sweatshirt",
        "price" : 8000,
        "image" : "assets/images/DAZY Men Letter Graphic Drop Shoulder Sweatshirt Without Tee Size S _ 36.jpg",
        "inCart" : 0,
        "starIcons": [
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",              
            ]
    },

    {
        "id" : 8,
        "name" : "floral wrap tie side dress",
        "price" : 5500,
        "image" : "assets/images/Ditsy Floral Wrap Tie Side Dress.jpg",
        "inCart" : 0, 
        "productState" : "sale",
        "starIcons": [
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",              
            ]
    },

    {
        "id" : 9,
        "name" : "Ashawo gown",
        "price" : 3000,
        "image" : "assets/images/2022 Summer Short Halter Fairyshely Sexy Ruffle V Deep Evening Party Dress - M _ RED.jpg",
        "inCart" : 0,
        "productState" : "hot",
        "starIcons": [
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star-half-stroke",              
            ]
    },

    {
        "id" : 10,
        "name" : "women's white fall shirt",
        "price" : 3000,
        "image" : "assets/images/women's fall shirt.jpg",
        "inCart" : 0,
        "starIcons": [
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",              
            ]
    },

    {
        "id" : 11,
        "name" : "green plaid hooded shirt",
        "price" : 12500,
        "image" :"assets/images/Your friend give you $60 coupons -- Newchic.jpg",
        "inCart" : 0,
        "starIcons": [
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",              
            ]
        
    },

    {
        "id" : 12,
        "name" : "Soft-Washed Long-Sleeve T-Shirt 3-Pack",
        "price" : 4000,
        "image" :"assets/images/Men's Soft-Washed Long-Sleeve T-Shirt 3-Pack Brown Regular Size XXXL.jpg",
        "inCart" :0,
        "starIcons": [
            "fa-solid fa-star",
            "fa-solid fa-star",
            "fa-solid fa-star",
            "fa-solid fa-star",
            "fa-solid fa-star",              
        ]
    }
]
    

let cartItems = {};


function addToCart(id) {
    let product = products.find(item => item.id === id);
    if (!cartItems[id]) {
        cartItems[id] = { ...product, inCart: 1 };
    } else {
        cartItems[id].inCart += 1;
        alert(`Another "${product.name}" has been added to your cart!`);
    }
    
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    displayCart();
}


function changeQuantity(id, action) {
    if (cartItems[id]) {
        if (action === 'increase') {
            cartItems[id].inCart += 1;
        } 
        else if (action === 'decrease') {
            if (cartItems[id].inCart > 1) {
                cartItems[id].inCart -= 1;
            } else {
                removeCartItem(id);
            }
        }
        
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
        displayCart();
    }
}

function removeCartItem(id) {
    delete cartItems[id];
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    displayCart();
}

iconCart.addEventListener('click', () => {
    cart.style.right = '0';
    displayCart();
});

Close.addEventListener('click', () => {
    cart.style.right = '-100%';
});

const initProducts = () => {
    let storedCart = localStorage.getItem("productsInCart");
    cartItems = storedCart ? JSON.parse(storedCart) : {};
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("row");
        const starIcons = value.starIcons;
        const h5Text = value.productState || '';
        newDiv.innerHTML = `
            <div class="productImg_section">
                <img src="${value.image}">
                <button class="prod_button slide" onclick="addToCart(${value.id})">Add to Cart</button>
            </div>
 
            <div class="product-text">
                ${h5Text ? `<h5>${h5Text}</h5>` : ''}
            </div>

            <div class="heart-icon">
                <i class="fa-regular fa-heart"></i>
            </div>

            <div class="rating">
                ${starIcons.map(iconClass => `<i class="${iconClass}"></i>`).join('')}
            </div>

            <div class="price">
                <h4>${value.name}</h4>
                <p>₦${value.price.toLocaleString()}</p>
            </div>
        `;

        list.appendChild(newDiv);
    });
    displayCart();
}



function displayCart() {
    let productContainer = document.querySelector(".item");
    let cartBtnContainer = document.querySelector(".cartBtn");
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        let totalCost = 0;
        let totalItems = 0;
        Object.values(cartItems).map(function (item) {
            totalCost += item.inCart * item.price;
            totalItems += item.inCart 
            productContainer.innerHTML += `
                <img src="${item.image}">
                <div class="content">
                    <div class="name">
                        ${item.name}
                    </div>

                    <div class="price">
                        ₦${item.price}
                    </div>

                    <div class="quantity">
                        <button class="decrease" onclick="changeQuantity(${item.id}, 'decrease')">-</button>
                        <span class="value">${item.inCart}</span>
                        <button class="increase" onclick="changeQuantity(${item.id}, 'increase')">+</button>
                    </div>
                </div>
                
                <div class="right-content">
                    <div class="cancel" data-id="${item.id}" onclick="removeCartItem(${item.id})">
                        <i class="fa-solid fa-xmark"></i>
                    </div>

                    <div class="total">₦${(item.inCart * item.price).toLocaleString()}</div>
                </div>
                
            `;
            
        });

        // Display total cost
        cartBtnContainer.innerHTML = '';
        cartBtnContainer.innerHTML += `   
         <button class="Checkout">Proceed to Checkout <p>₦${totalCost.toLocaleString()}</p></button>
         <button class="close">Close</button>

    
        `;

        document.querySelector(".cart_icon span").textContent = totalItems;
    }
}

displayCart();
initProducts();
