/**
 * Initializes a burger menu.
 * @param {string} menuSelector - CSS selector to find the menu element.
 * @param {string} burgerSelector - CSS selector to find the burger element.
 * @throws {Error} If either the menu element or burger element is not found.
 */
const burger = (menuSelector, burgerSelector) => {
    let burgerElem = document.querySelector(burgerSelector);
    let menuElem = document.querySelector(menuSelector);

    if (menuElem === null) {
        throw new Error(`Menu element with selector ${menuSelector} not found`);
    }

    if (burgerElem === null) {
        throw new Error(`Burger element with selector ${burgerSelector} not found`);
    }

    menuElem.style.display = 'none';

    burgerElem.addEventListener('click', () => {
        if (menuElem.style.display === 'none' && window.screen.availWidth < 993) {
            menuElem.style.display = 'block';
        }
        else {
            menuElem.style.display = 'none';
        }
    });

    window.addEventListener('resize', () => {
        if (window.screen.availWidth > 992) {
            menuElem.style.display = 'none';
        }
    });
}

export default burger;