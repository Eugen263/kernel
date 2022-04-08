import { Linear } from "../../server/linear/Linear.js";

class ContButton_class {
    fullName = 'Ivan Bogaevski';
    messTime = '11:45';
    lastMess = 'Hello))';
    messCount = '200';
    render(props) {
        Linear.div({class: 'contact_box'}, {class: 'conts_scrolled'});
        Linear.div({class: 'cont_elem_box'}, {class: 'contact_box', order: props.id});
        Linear.div({class: 'cont_logo', style: 'background-image: url('+props.img+')'}, {class: 'cont_elem_box', order: props.id});
        if (props.lastLogin === 'online') {
            Linear.div({class: 'online_stat'}, {class: 'cont_logo', order: props.id});
        }
        //Linear.div({class: 'online_stat'}, {class: 'cont_logo', order: props.id});
        Linear.div({class: 'cont_name_box'}, {class: 'cont_elem_box', order: props.id});
        //name box
        Linear.div({class: 'cont_name'}, {class: 'cont_name_box', order: props.id});
        Linear.h(3, {text: props['userName']}, {class: 'cont_name', order: props.id});
        Linear.div({class: 'stat_time', text: props.time}, {class: 'cont_name', order: props.id});

        //last message box
        Linear.div({class: 'last_mess'}, {class: 'cont_name_box', order: props.id});

        if (props.type === 'text') {
            Linear.h(3, {text: props.lastMess, class: 'h3_last_mess'}, {class: 'last_mess', order: props.id});
        } else if (props.type === 'voice') {
            Linear.h(3, {text: 'Voice Message', class: 'h3_last_mess'}, {class: 'last_mess', order: props.id});
            Linear.div({class: 'last_mess_ico', html: '<i class="fas fa-microphone-alt"></i>'}, {class: 'h3_last_mess', order: props.id, paste: 'before'});
        } else if (props.type === 'video') {
            if ('text' in props) {
                Linear.h(3, {text: props.text, class: 'h3_last_mess'}, {class: 'last_mess', order: props.id});
            } else {
                Linear.h(3, {text: 'Video', class: 'h3_last_mess'}, {class: 'last_mess', order: props.id});
            }
            Linear.div({class: 'last_mess_ico', html: '<i class="fas fa-video"></i>'}, {class: 'h3_last_mess', order: props.id, paste: 'before'});
        }


        if (props.missed !== undefined) {
            Linear.div({'class': 'missed_mess', 'text': props.missed}, {'class': 'last_mess', 'order': props.id});
        }
    }
}

export var ContButton = new ContButton_class();