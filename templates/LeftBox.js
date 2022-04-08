import { Linear } from "../server/linear/Linear.js";
import { ContButton } from "./Buttons/Contbutton.js";
import { Router } from "../server/router/Router.js";
import { IndexedDB } from "../server/database/indexedDB.js";

class LeftBox_class {
    db = IndexedDB.get();

    render() {
        Linear.div({class: 'cont_head'}, {id: 'left_box'});
        Linear.div({id: 'menu_btn', class: 'menu_btn'}, {class: 'cont_head'});
        Linear.div({class: 'search_inp'}, {class: 'cont_head'});

        //menu_btn
        Linear.i({class: 'fas fa-bars'}, {id: 'menu_btn'});

        //search
        Linear.input({class: 'search', placeholder: 'Search', type: 'text'}, {class: 'search_inp'});
        Linear.div({class: 'search_ico'}, {class: 'search_inp'});
        Linear.i({class: 'fas fa-search'}, {class: 'search_ico'});

        //start chat button
        Linear.div({class: 'start_chat_btn_box'}, {id: 'left_box'});
        Linear.div({class: 'start_chat_btn'}, {class: 'start_chat_btn_box'});
        Linear.i({class: 'fas fa-pencil-alt'}, {class: 'start_chat_btn'});

        //overflow
        Linear.overflow({id: 'left_box'});

        //contacts box
        Linear.div({class: 'conts_box', id: 'conts_box'}, {id: 'left_box'});
        Linear.div({class: 'conts_top'}, {id: 'conts_box'});
        Linear.div({class: 'conts_scrolled'}, {class: 'conts_top'});
        for (const props of this.db) {
            ContButton.render(props);
            Linear.click({class: 'contact_box', order: props.id}, 'click', {event: [Router.to, '../messages/'+props.id], id: props.id});
        }
        //Linear.get({'class': 'contact_box', 'order': 0}).addEventListener('click', Router.to('/message/1'));
    }
}

export var LeftBox = new LeftBox_class();