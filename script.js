// Elements Variable
const imagePreviewer = document.querySelector(".productImage");
const basket = document.querySelector(".basket");
const cart = document.querySelector(".conts")
const images = document.querySelectorAll(".image");
const quantityElement = document.querySelector(".quan");
const qq = document.querySelector(".qq")

const thumbnailImagePreviewer = document.getElementById("img");
const imgs = document.querySelectorAll(".image_");
const close = document.querySelector(".close");
const thumbnail = document.querySelector(".imgs");
let thumnailCurrentIndex = 0;

// Other Variables
const imageLinks = [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg",
] 
let currentIndex = 0;
let numberOfQuantity = 1;

// Product
let product = {
    name: "Fall Limited Edition Sneakers",
    imageLink: imageLinks[0],
    quantity: 0,
    price: 125,
    totalPrice: 0,
}

//Mobile Methods
const ViewNext=()=>{
    currentIndex += 1;

    if(currentIndex == imageLinks.length) currentIndex = 0;


    const duc = document.getElementById("img");
    console.log(duc)
    duc.src = imageLinks[currentIndex];

    imagePreviewer.src = imageLinks[currentIndex];

    changeClassOfImage(images[currentIndex], images);
} 

const ViewPrevious=()=>{
    currentIndex -= 1;

    if(currentIndex < 0) currentIndex = imageLinks.length-1;

    imagePreviewer.src = imageLinks[currentIndex]

    changeClassOfImage(images[currentIndex], images)
} 


const ToggleMobileMenu = () =>{
    const mob_menu = document.querySelector(".mobile-menu-container")
    if(mob_menu.classList.contains("hide"))
        mob_menu.classList.remove("hide") 
    else mob_menu.classList.add("hide");
}


// Desktop
// ChangeImage
function changeClassOfImage(image,list){
    list.forEach(i=>i.classList.remove("selected"))
    image.classList.add("selected");
}

const ChangeImageWithTime =()=>{
    currentIndex += 1;

    if(currentIndex == imageLinks.length) currentIndex = 0;

    imagePreviewer.src = imageLinks[currentIndex]

    changeClassOfImage(images[currentIndex],images)
}

// General Methods 

const increaseQuantity = () =>{
    numberOfQuantity += 1;
    quantityElement.innerHTML = numberOfQuantity;
}

const DecreaseQuantity = () =>{
    if(numberOfQuantity == 1) return;

    numberOfQuantity -= 1;
    quantityElement.innerHTML = numberOfQuantity;
}

const ToggleCart = () =>{
    if(basket.classList.contains("hide"))
        basket.classList.remove("hide");
    else basket.classList.add("hide")
}


const AddToCart = () =>{
    product.quantity += numberOfQuantity;
    product.totalPrice = product.quantity * product.price;

    // Create Product Card for cart
    CreateNewProductCardToCart();

    if(qq.classList.contains("hide")) qq.classList.remove("hide")


    qq.innerHTML = product.quantity
    numberOfQuantity = 1;
    quantityElement.innerHTML = numberOfQuantity;
}


const CreateNewProductCardToCart = () =>{
    const productCard = document.createElement("div");
    productCard.classList.add("productCard")

    const productDetails = document.createElement("div");
    productDetails.classList.add("productDetails");

    const productImgEle = document.createElement("img");
    const productNameEle = document.createElement("p"); 
    const productPriceEle = document.createElement("p");

    const deleteIcon = document.createElement("img")
    deleteIcon.classList.add("delIcon")
    deleteIcon.addEventListener("click", ClearCart)
    deleteIcon.src = "images/icon-delete.svg"

    // Setting all values for the Card
    productImgEle.src = product.imageLink;
    productNameEle.innerHTML = product.name;
    productPriceEle.innerHTML = `$${product.price}.00 x ${product.quantity} <b>$${product.totalPrice}.00</b>`


    productDetails.appendChild(productNameEle);
    productDetails.appendChild(productPriceEle);

    productCard.appendChild(productImgEle);
    productCard.appendChild(productDetails);
    productCard.appendChild(deleteIcon);


    // Creating the Checkout Button
    const button = document.createElement("button");
    button.classList.add("checkoutBtn")
    button.innerHTML = "checkout";
    button.addEventListener("click", ClearCart)

    cart.innerHTML = "";
    cart.appendChild(productCard);
    cart.appendChild(button);
}


const ClearCart = ()=>{
    product.quantity = 0,
    product.totalPrice = 0;

    cart.innerHTML = "<p>Your Cart is empty</p>"
    qq.classList.add("hide");
}


const ThumbNailViewNext=()=>{
    thumnailCurrentIndex += 1;

    if(thumnailCurrentIndex == imageLinks.length) thumnailCurrentIndex = 0;


    thumbnailImagePreviewer.src = imageLinks[thumnailCurrentIndex]; 

    console.log("Hello");
    
    changeClassOfImage(imgs[thumnailCurrentIndex],imgs);
} 

const ThumbNailPrevious=()=>{
    thumnailCurrentIndex -= 1;

    if(thumnailCurrentIndex < 0) thumnailCurrentIndex = imageLinks.length-1;

    thumbnailImagePreviewer.src = imageLinks[thumnailCurrentIndex]; 

    console.log("Hello");

    changeClassOfImage(imgs[thumnailCurrentIndex],imgs);
} 



// Changing the image with time
setInterval(ChangeImageWithTime,5000)
quantityElement.innerHTML = numberOfQuantity;


// Events
close.addEventListener("click",()=>{
    thumbnail.classList.add("hide");
})

imagePreviewer.addEventListener("click",()=>{
    thumbnail.classList.remove("hide")
    thumnailCurrentIndex = currentIndex;
    thumbnailImagePreviewer.src = imageLinks[thumnailCurrentIndex];

    changeClassOfImage(imgs[thumnailCurrentIndex],imgs);
});

images.forEach((image,i)=>{
    image.addEventListener("click",()=>{
        changeClassOfImage(image,images);
        currentIndex = i;
        imagePreviewer.src = image.src;
    })
})

imgs.forEach((image,i)=>{
    image.addEventListener("click",()=>{
        changeClassOfImage(image,imgs);
        thumnailCurrentIndex = i;
        thumbnailImagePreviewer.src = image.src;
    })
})