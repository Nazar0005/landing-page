'use strict';

// document.addEventListener("DOMContentLoaded", namFunction); вызов функцию после загрузки DOM

document.querySelector('.user-account__sign').addEventListener('click', function () {
    var div = document.querySelector('.hidden-user');

    if (div.style.maxHeight) {
        div.style.maxHeight = null;
    } else {
        div.style.maxHeight = div.scrollHeight + 'px';
    }
});



