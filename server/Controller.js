if (window.location.href !== 'http://kernel.loc/') {
    window.location.href = 'http://kernel.loc/';
}

console.log('Controller.js: Start working');
console.log('Controller.js: Importing scripts');

import { linker } from './linker/Linker.js';
import { Kernel } from './Kernel.js';
import { Router } from './router/Router.js';
import { PageController } from "./PageController.js";

console.log('Linker.js: Importing CSS and JS');
linker.linkAll();

/*let openRequest = indexedDB.open("chats", 1);

// создаём хранилище объектов для books, если ешё не существует
openRequest.onupgradeneeded = function() {
    let db = openRequest.result;
    if (!db.objectStoreNames.contains('0')) { // если хранилище "books" не существует
        db.createObjectStore('0', {keyPath: 'id', autoIncrement: true}); // создаем хранилище
    }
};*/

console.log('Kernel.js: Start to loading page');
Kernel.pageGenerator('leftBox');
PageController.messageGenerator('2');

class Controller_class {
    click(type, elem, event) {
        if (type === 'class') {
            document.getElementsByClassName(elem)[0].addEventListener('click', function (){
                if (Array.isArray(event)) {
                    let e = event[0];
                    e(event[1]);
                }
            })
        }
    }
}
export var Controller = new Controller_class();


Router.checkPopState();