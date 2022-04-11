import { Linear } from "./linear/Linear.js";
import { MessageBox } from "../templates/MessageBox.js";

class PageController_class {
    urlChange(props) {
        let url = window.location.pathname.split('/');
        if (url[1] === 'messages') {
            if (url[2].split('?')[0] === 'info') {
                console.log('info');
            }
            PageController.messageGenerator(props.id);
        }
    }

    messageGenerator(messageId) {
        PageController.changeState({order: messageId, place: '.contact_box'});
    }

    changeState(element) {
        //if (Linear.get({place: '.contact_active'})) {
            /*let contact = Linear.get({place: element.place, order: element.order});
            let contact_active = Linear.get({place: '.contact_active'});
            contact_active.className = element.class;
            contact.className = contact.className + ' contact_active';*/
        //} else {
            //let contact = Linear.get({place: '.'+element.class, order: element.order});
            //console.log(contact);
            //let class_name = contact.className;
            //class_name = class_name + ' contact_active';
            //contact.className = class_name;
        //}
        Linear.get({place: '#chat_box'});//.innerHTML = '';
        //MessageBox.render({id: element.order});
    }
}

export var PageController = new PageController_class();