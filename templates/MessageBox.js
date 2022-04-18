import { IndexedDB } from "../server/database/indexedDB.js";
import { Linear } from "../server/linear/Linear.js";
import { ChatBox } from "./ChatBox.js";
import { Router } from "../server/router/Router.js";

//render all message page
class MessageBox_class {
    render(props) {
        let db = IndexedDB.get({id: props.id});
        Linear.div({class: 'chat_inf_box'}, {place: '#chat_box'});
        Linear.div({class: 'chat_inf'}, {place: '.chat_inf_box'});

        //Chat Information
        Linear.div({class: 'chat_elem_box'}, {place: '.chat_inf'});
        Linear.div({id: 'chat_back_ico'}, {place: '.chat_elem_box'});
        Linear.i({class: 'fas fa-arrow-left'}, {place: '#chat_back_ico'});
        Linear.div({class: 'logo_ico', style: 'background-image: url('+db.img+');'}, {place: '.chat_elem_box'});
        Linear.div({id: 'chat_stats'}, {place: '.chat_elem_box'});
        Linear.div({class: 'chat_name', text: db.userName}, {place: '#chat_stats'});
        Linear.div({class: 'last_log', text: db.lastLogin}, {place: '#chat_stats'});

        //Chat Container
        Linear.div({class: 'chat_cont'}, {place: '.chat_inf'});
        Linear.div({class: 'chat_cont_ico', id: 'chat_cont_search'}, {place: '.chat_cont'});
        Linear.i({class: 'far fa-compass'}, {place: '#chat_cont_search'});
        Linear.div({class: 'chat_cont_ico', id: 'chat_cont_btn'}, {place: '.chat_cont'});
        Linear.i({class: 'fas fa-ellipsis-v'}, {place: '#chat_cont_btn'});

        //Main chat Container
        ChatBox.render({id: props.id});

        //input box
        Linear.div({class: 'chat_input_box'}, {place: '.chat_box'});
        Linear.div({class: 'chat_input'}, {place: '.chat_input_box'});
        Linear.input({type: 'text', class: 'chat_input_but', placeholder: 'Type'}, {place: '.chat_input'});

        //input box icons
        Linear.div({class: 'inp_but_box'}, {place: '.chat_input'});
        Linear.div({class: 'input_smile_ico'}, {place: '.inp_but_box'});
        Linear.i({class: 'far fa-smile'}, {place: '.input_smile_ico'});
        Linear.div({class: 'input_pin'}, {place: '.inp_but_box'});
        Linear.i({class: 'fas fa-paperclip'}, {place: '.input_pin'});
        Linear.button({class: 'send'}, {place: '.inp_but_box'});
        Linear.i({class: 'far fa-paper-plane'}, {place: '.send'});

        Linear.click({place: '.chat_elem_box'}, 'click', {event: [Router.to, '?info']});
    }
}

export var MessageBox = new MessageBox_class();