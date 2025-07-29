// import comida1Img from '../assets/comida1.jpg'; // Importe a imagem

// Combine tudo no seu arquivo menubar.js
import feijoadaImg from '../assets/comida1.jpg'; // Adjust to your actual feijoada image name
import grilledSalmonImg from '../assets/salmao.jpg';     // Make sure these images are in your assets directory
import caesarSaladImg from '../assets/caesar_salad.jpg';
import greenDetoxJuiceImg from '../assets/suco_detox.jpg';
import acaiBowlImg from '../assets/acai_bowl.jpg';

const menuItems = [
    {
        name: "Light Feijoada",
        price: "R$ 22.50", // Prices usually remain in local currency
        serves: "Serves up to 3 people",
        description: "Enjoy our Light Feijoada, a carefully crafted reinterpretation of the beloved Brazilian classic. We've preserved all the authentic flavor and comforting warmth you adore, but with a touch of lightness.",
        image: feijoadaImg
    },
    {
        name: "Grilled Salmon",
        price: "R$ 38.00",
        serves: "Serves 1 person",
        description: "Fresh salmon fillet grilled to perfection, served with sautéed vegetables and brown rice. A healthy and delicious option.",
        image: grilledSalmonImg
    },
    {
        name: "Caesar Salad",
        price: "R$ 25.00",
        serves: "Serves 1 person",
        description: "Fresh romaine lettuce, crispy croutons, Parmesan cheese, and creamy Caesar dressing. Grilled chicken option available.",
        image: caesarSaladImg
    },
    {
        name: "Green Detox Juice",
        price: "R$ 12.00",
        serves: "Individual glass",
        description: "A refreshing combination of kale, green apple, ginger, and lemon. Ideal for energizing and purifying the body.",
        image: greenDetoxJuiceImg
    },
    {
        name: "Açaí Bowl with Fruits",
        price: "R$ 19.00",
        serves: "Individual bowl",
        description: "Pure açaí blended with banana, topped with crispy granola, fresh strawberries, and kiwi. Flavor and energy for your day.",
        image: acaiBowlImg
    }
];


function createMenuItemCard(itemData) {
    // ... (o código da função que você definiu acima)
    const comidaContainer = document.createElement("div");
    comidaContainer.classList.add("comida-container");

    const comidaHeader = document.createElement("div");
    comidaContainer.appendChild(comidaHeader);
    comidaHeader.classList.add("comida-header");

    const comidaTitle = document.createElement("div");
    comidaHeader.appendChild(comidaTitle);
    comidaTitle.textContent = itemData.name;
    comidaTitle.classList.add("comida-title");

    const comidaPreco = document.createElement("div");
    comidaHeader.appendChild(comidaPreco);
    comidaPreco.textContent = itemData.price;
    comidaPreco.classList.add("comida-preco");

    const comidaContent = document.createElement("div");
    comidaContainer.appendChild(comidaContent);
    comidaContent.classList.add("comida-content");

    const comidaImg = new Image();
    comidaImg.src = itemData.image;
    comidaContent.appendChild(comidaImg);
    comidaImg.classList.add("comida-img");

    const comidaContentText = document.createElement("div");
    comidaContent.appendChild(comidaContentText);
    comidaContentText.classList.add("comida-content-text");

    const comidaServ = document.createElement("div");
    comidaContentText.appendChild(comidaServ);
    comidaServ.textContent = itemData.serves;
    comidaServ.classList.add("comida-serv");

    const comidaDesc = document.createElement("div");
    comidaContentText.appendChild(comidaDesc);
    comidaDesc.textContent = itemData.description;
    comidaDesc.classList.add("comida-desc");

    return comidaContainer;
}


export default function menubar(contentDiv){
    contentDiv.textContent = "";
    console.log("menu");

    // Loop para criar e adicionar cada card ao contentDiv
    menuItems.forEach(item => {
        const card = createMenuItemCard(item);
        contentDiv.appendChild(card);
    });
}