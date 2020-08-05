document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    const filterMenu = () => {
        const menu = document.querySelector('.filter'),
            openIcon = document.querySelector('.header_bar-menu'),
            closeIcon = document.querySelector('.close_icon')

        openIcon.addEventListener('click', () => {
            menu.style.display = 'block';

        });
        closeIcon.addEventListener('click', () => {
            menu.style.display = 'none';
        });
    }
    filterMenu();

    const rangeValue = () => {
        let range = document.querySelector(".filter_range-item");
        let valueRange = document.getElementById("range_value");
        valueRange.innerHTML = range.value;

        range.oninput = function () {
            valueRange.innerHTML = this.value;
        }
    }
    rangeValue();
});
