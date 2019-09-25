import utilities from '../helpers/utilities.js';

const printCheeseOptions = () => {
    let domString = 'Cheese';
    utilities.printToDom('cheese-counter', domString);
}

export default { printCheeseOptions };