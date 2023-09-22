const shopContent = document.getElementById("shopContent");
const cart = [];//Este es nuestro carrito, un array vacio

productos.forEach((product) =>{
    const content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.productName}</h3>
    <p> class="price">${product.price} $</p>
    `;
    shopContent.append(content);

    //boton comprar
    const buyButton = document.createElement("button");
    buyButton.innerText = "Buy";

    content.append(buyButton);

    //evento de escucha a travez de un click
    buyButton.addEventListener("click", () => {
        cart.push({ //cargamos en el carrito
            id: product.id,
            productName: product.productName,
            price: product.price,
            quanty: product.quanty,
            img: product.img,
        });
        console.log(cart)
    })
});