const PRODUCTS_BY_CATEGORY = {

  alcancias: [
      {name: "Bolsa de Dinero", img: "./assets/images/alcancias/BOLSA DE DINERO ALCANCIA.png"},
      {name: "Bulldog Alcancia", img: "./assets/images/alcancias/BULLDOG ALCANCIA.jpg"},
      {name: "Granada Bitcoin Alcancia", img: "./assets/images/alcancias/GRANADA BITCOIN ALCANCIA.jpg"},
      {name: "Unicornio Alcancia", img: "./assets/images/alcancias/UNICORNIO ALCANCIA.JPG"},
  ],
  esenciales: [
      {name: "Abuelos UP", img: "./assets/images/esenciales/ABUELOS UP.JPG"},
      {name: "Alas Portavela", img: "./assets/images/esenciales/ALAS PORTA VELA.JPG"},
      {name: "Calavera con Hacha", img: "./assets/images/esenciales/CALAVERA CON HACHA.JPG"},
      {name: "Corazón", img: "./assets/images/esenciales/CORAZON.JPG"},
      {name: "Goku", img: "./assets/images/esenciales/GOKU.jpg"},
      {name: "Perro Globo", img: "./assets/images/esenciales/PERRO GLOBO.JPG"},
      {name: "Taza de te con plato", img: "./assets/images/esenciales/TAZA DE TE CON PLATO.JPG"},
  ],
  kaws: [
      {name: "Kaws", img: "./assets/images/kaws/KAWS.JPG"},
      {name: "Elmo Kaws", img: "./assets/images/kaws/ELMO KAWS.JPG"},
  ],
  espiritual: [
      {name: "Arcángel San Miguel", img: "./assets/images/espiritual/ARCANGEL SAN MIGUEL.JPG"},
      {name: "Buda", img: "./assets/images/espiritual/BUDA.JPG"},
      {name: "Hamsa", img: "./assets/images/espiritual/HAMSA PORTA INCIENSO.jpg"},
      {name: "Virgen María", img: "./assets/images/espiritual/VIRGEN MARIA.JPG"},
  ],
  materas: [
      {name: "Escultura David", img: "./assets/images/materas/ESCULTURA DAVID MATERA.JPG"},
      {name: "Gato", img: "./assets/images/materas/GATO MATERA.JPG"},
      {name: "Groot", img: "./assets/images/materas/GROOT MATERA.JPG"},
      {name: "Vaca", img: "./assets/images/materas/MATERA VACA.jpg"},
  ],
  osos: [
      {name: "Oso Popobe", img: "./assets/images/osos/OSO POPOBE.JPG"},
      {name: "Oso Popobe Elegante", img: "./assets/images/osos/OSO POPOBE ELEGANTE.JPG"},
      {name: "Oso Teddy", img: "./assets/images/osos/OSO TEDDY.JPG"},
  ],
  starWars: [
      {name: "Yoda Alcancía", img: "./assets/images/star_wars/STORMTROOPER.JPG"},
      {name: "Stormtrooper Alcancía", img: "./assets/images/star_wars/STORMTROOPER.JPG"},
  ],
  superHeroes: [
      {name: "Spiderman", img: "./assets/images/super_heroes/SPIDERMAN.JPG"},
      {name: "Superman", img: "./assets/images/super_heroes/SUPERMAN.JPG"},
  ],
  superMario: [
      {name: "Luigi Alcancía", img: "./assets/images/super_mario/LUIGI ALCANCIA.JPG"},
      {name: "Mario Alcancía", img: "./assets/images/super_mario/MARIO BROS ALCANCIA.jpg"},
      {name: "Princesa Peach Alcancía", img: "./assets/images/super_mario/PRINCESA PEACH ALCANCIA.JPG"},
  ],
}


const categoryAnchors = document.querySelectorAll('.category__anchor');
const productGrid = document.getElementById('productGrid');
const hideButton = document.getElementById('hideButton');
let displayHideButton = false;


//click event listeners for the category anchors
categoryAnchors.forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const categoryId = anchor.querySelector('.category__name').id;
    showProducts(categoryId);
  });
});

//function to display the selected category elements
function showProducts(categoryId){
  const products = PRODUCTS_BY_CATEGORY[categoryId];
  if (products && products.length > 0){
    //Clear the existing products
    productGrid.innerHTML = '';

    //Create the product elements
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <img src="${product.img}" alt="${product.name}" class="product__img" />
        <div class="product__info">
          <h3 class="product__info__name">${product.name}</h3>
        </div>
      `;
      productGrid.appendChild(productElement);
      displayHideButton = true;
    });

    //Show the product grid
    productGrid.style.display = 'block';
  } else {
    //Hide the product grid
    productGrid.style.display = 'none';
  }
};
hideButton.style.display = !displayHideButton ? 'none' : 'block';
hideButton.addEventListener('click', () => {
  // Clear product grid and hide it
  productGrid.innerHTML = '';
  productGrid.style.display = 'none';
  displayHideButton = false;
});