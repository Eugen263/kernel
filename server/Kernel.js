import { Linear } from "./linear/Linear.js";
import { LeftBox } from "../templates/LeftBox.js";
import { StartBox } from "../templates/StartBox.js";

class Kernel_class {
    pageGenerator(box) {
        console.log('Kernel.js: Creating div id="left_box"');
        Linear.div({'id': 'left_box', 'class': 'scroll'}, {place: '.root'});
        Linear.div({'id': 'chat_box'}, {place: '.root'});

        //Render Message Box
        console.log('Kernel.js: Render LeftBox.js');
        LeftBox.render();

        //middle box
        console.log('Kernel.js: Render StartBox.js');
        StartBox.render();
    }
}

export var Kernel = new Kernel_class();