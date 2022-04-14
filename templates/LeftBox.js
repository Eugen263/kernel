import { Linear } from "../server/linear/Linear.js";
import { ContButton } from "./Buttons/Contbutton.js";
import { Router } from "../server/router/Router.js";
import { IndexedDB } from "../server/database/indexedDB.js";

class LeftBox_class {
    db = IndexedDB.get();

    render() {
        Linear.div({class: 'cont_head'}, {place: '#left_box'});
        Linear.div({id: 'menu_btn', class: 'menu_btn'}, {place: '.cont_head'});
        Linear.div({class: 'search_inp'}, {place: '.cont_head'});

        //menu_btn
        Linear.i({class: 'fas fa-bars'}, {place: '#menu_btn'});

        //search
        Linear.input({class: 'search', placeholder: 'Search', type: 'text'}, {place: '.search_inp'});
        Linear.div({class: 'search_ico'}, {place: '.search_inp'});
        Linear.i({class: 'fas fa-search'}, {place: '.search_ico'});

        //start chat button
        Linear.div({class: 'start_chat_btn_box'}, {place: '#left_box'});
        Linear.div({class: 'start_chat_btn'}, {place: '.start_chat_btn_box'});
        Linear.i({class: 'fas fa-pencil-alt'}, {place: '.start_chat_btn'});

        //overflow
        Linear.overflow({id: 'left_box'});

        //contacts box
        Linear.div({class: 'conts_box', id: 'conts_box'}, {place: '#left_box'});
        Linear.div({class: 'conts_top'}, {place: '#conts_box'});
        Linear.div({class: 'conts_scrolled'}, {place: '.conts_top'});
        for (const props of this.db) {
            ContButton.render(props);
            Linear.click({place: '.contact_box', order: props.id}, 'click', {event: [Router.to, '../messages/'+props.id], id: props.id});
        }
        //Linear.get({'class': 'contact_box', 'order': 0}).addEventListener('click', Router.to('/message/1'));
    }
}

export var LeftBox = new LeftBox_class();