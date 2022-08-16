import faker from 'faker';

var N = 7;
var products = [...Array(N).keys()].map(p => `<div class='product'>${faker.commerce.productName()}</div>`)
document.querySelector('#dev-products').innerHTML = products.join('');