import _ from 'lodash';
import './style.css';

function component() {
    const element = document.createElement('div');
    element.classList = ['footer'];
    element.innerHTML = _.join(['Handcrafted. Source avai'], ' ');

    return element;
}

document.body.appendChild(component());