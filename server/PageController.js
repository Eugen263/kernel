import { Linear } from "./linear/Linear.js";
import { MessageBox } from "../templates/MessageBox.js";
import { RightBox } from "../templates/RightBox.js";

class PageController_class {
    urlChange(props) {
        let url = window.location.pathname.split('/');
        if (url[1] === 'messages') {
            let chat_id = url[2];
            PageController.messageGenerator(chat_id, 'message');
            if (window.location.search.substring(1).split('&')[0] === 'info') {
                PageController.messageGenerator(chat_id, 'info');
            }
        }
    }

    messageGenerator(messageId, page) {
        if (page === 'message') {
            PageController.changeState({order: messageId, place: '.contact_box'});
        } else if (page === 'info') {
            PageController.rightBox({profileId: messageId});
        }
    }

    changeState(element) {
        if (Linear.get({place: '.contact_active'}) !== undefined) {
            let contact = Linear.get({place: element.place, order: element.order});
            let contact_act = Linear.get({place: '.contact_active'});
            contact_act.className = 'contact_box';
            contact.className = contact.className + ' contact_active';

        } else {
            let contact = Linear.get({place: element.place, order: element.order});
            contact.className = contact.className + ' contact_active';
        }
        Linear.get({place: '#chat_box'}).innerHTML = '';
        MessageBox.render({id: element.order});
    }

    rightBox(element) {
        RightBox.render({id: element.profileId});
    }
}

export var PageController = new PageController_class();