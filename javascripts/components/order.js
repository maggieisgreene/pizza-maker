import cheese from './cheese.js';
import utilities from '../helpers/utilities.js';

const createFinalOrder = (arr) => {
    let domString2 = '';
    for (let i = 0; i < arr.length; i ++) {
        domString2 += `<h2>${arr[i].name}</h2>`;
    }
    utilities.printToDom('final-order', domString2);
};

const createOrderEvent = () => {
    const selectedCheeses = cheese.getSelectedCheeses();
    createFinalOrder(selectedCheeses);
};

const printOrderButton = () => {
    let domString = `<button class="btn btn-light" id="order-button">Make Pizza</button>`
    utilities.printToDom('final-order', domString);
    document.getElementById('order-button').addEventListener('click', createOrderEvent);
};

export default { printOrderButton };