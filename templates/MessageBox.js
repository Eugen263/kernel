import { IndexedDB } from "../server/database/indexedDB.js";
import { Linear } from "../server/linear/Linear.js";
import { ChatBox } from "./ChatBox.js";

class MessageBox_class {
    render(props) {
        let db = IndexedDB.get({id: props.id});
        Linear.div({class: 'chat_inf_box'}, {id: 'chat_box'});
        Linear.div({class: 'chat_inf'}, {class: 'chat_inf_box'});

        //Chat Information
        Linear.div({class: 'chat_elem_box'}, {class: 'chat_inf'});
        Linear.div({id: 'chat_back_ico'}, {class: 'chat_elem_box'});
        Linear.i({class: 'fas fa-arrow-left'}, {id: 'chat_back_ico'});
        Linear.div({class: 'logo_ico', style: 'background-image: url('+db.img+');'}, {class: 'chat_elem_box'});
        Linear.div({id: 'chat_stats'}, {class: 'chat_elem_box'});
        Linear.div({class: 'chat_name', text: db.userName}, {id: 'chat_stats'});
        Linear.div({class: 'last_log', text: db.lastLogin}, {id: 'chat_stats'});

        //Chat Container
        Linear.div({class: 'chat_cont'}, {class: 'chat_inf'});
        Linear.div({class: 'chat_cont_ico', id: 'chat_cont_search'}, {class: 'chat_cont'});
        Linear.i({class: 'far fa-compass'}, {id: 'chat_cont_search'});
        Linear.div({class: 'chat_cont_ico', id: 'chat_cont_btn'}, {class: 'chat_cont'});
        Linear.i({class: 'fas fa-ellipsis-v'}, {id: 'chat_cont_btn'});

        //Main chat Container
        ChatBox.render({id: props.id});
    }
}

export var MessageBox = new MessageBox_class();