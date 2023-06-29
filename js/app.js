'use strict';

function AppState() {
  this.allProducts = [];
}

AppState.prototype.instantiateProducts = function () {

  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

  for (let i = 0; i < productNames.length; i++) {
    if (productNames[i] === 'sweep') {
      this.allProducts.push(new Product(productNames[i], 'png'))
    } else {
      this.allProducts.push(new Product(productNames[i]))
    }
  }

};

AppState.prototype.saveToLocalStorage = function () {
  // TODO: Fill in this instance method to save product data to local storage
  const productsToSave = this.allProducts.map(product => {
    return {
      name: product.name,
      fileExtension: product.source.split('.').pop(),
      timesClicked: product.timesClicked,
      timesShown: product.timesShown
    };
  });

    const productsString = JSON.stringify(productsToSave);
    localStorage.setItem('products', productsString);
};

AppState.prototype.loadItems = function () {

  // TODO: Update this instance method to retrieve data from local storage instead of creating new Products on each page load
  const productsString = localStorage.getItem('products');
  if(productsString) {
    const productsData = JSON.parse(productsString);
    this.allProducts = productsData.map(product => new Product(product.name, product.fileExtension, product.timesClicked, product.timesShown));
  } else {
    this.instantiateProducts();
  }
}


function Product(name, fileExtensions = ('jpg', 'png'), timesClicked = 0, timesShown = 0) {
  this.name = name;
  this.source = `assets/${name}.${fileExtensions}`;
  this.timesClicked = timesClicked;
  this.timesShown = timesShown;
}

const appState = new AppState();
appState.loadItems();

