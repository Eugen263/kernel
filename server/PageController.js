import { Linear } from "./linear/Linear.js";
import { MessageBox } from "../templates/MessageBox.js";

class PageController_class {
    urlChange(props) {
        let url = window.location.pathname;
        if (url === '/messages/'+props.id) {
            PageController.messageGenerator(props.id);
        }
    }

    messageGenerator(messageId) {
        PageController.changeState({order: messageId, class: 'contact_box'});
    }

    changeState(element) {
        if (Linear.get({class: 'contact_active'})) {
            let contact = Linear.get({class: element.class, order: element.order});
            let contact_active = Linear.get({class: 'contact_active'});
            contact_active.className = element.class;
            contact.className = contact.className + ' contact_active';

        } else {
            let contact = Linear.get({class: element.class, order: element.order});
            let class_name = contact.className;
            class_name = class_name + ' contact_active';
            contact.className = class_name;
        }
        Linear.get({id: 'chat_box'}).innerHTML = '';
        MessageBox.render({id: element.order});
    }
}

export var PageController = new PageController_class();