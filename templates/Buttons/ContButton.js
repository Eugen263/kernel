import { Linear } from "../../server/linear/Linear.js";

class ContButton_class {
    fullName = 'Ivan Bogaevski';
    messTime = '11:45';
    lastMess = 'Hello))';
    messCount = '200';
    render(props) {
        Linear.div({class: 'contact_box'}, {place: '.conts_scrolled'});
        Linear.div({class: 'cont_elem_box'}, {place: '.contact_box', order: props.id});
        Linear.div({class: 'cont_logo', style: 'background-image: url('+props.img+')'}, {place: '.cont_elem_box', order: props.id});
        if (props.lastLogin === 'online') {
            Linear.div({class: 'online_stat'}, {place: '.cont_logo', order: props.id});
        }
        //Linear.div({class: 'online_stat'}, {class: 'cont_logo', order: props.id});
        Linear.div({class: 'cont_name_box'}, {place: '.cont_elem_box', order: props.id});
        //name box
        Linear.div({class: 'cont_name'}, {place: '.cont_name_box', order: props.id});
        Linear.h(3, {text: props['userName']}, {place: '.cont_name', order: props.id});
        Linear.div({class: 'stat_time', text: props.time}, {place: '.cont_name', order: props.id});

        //last message box
        Linear.div({class: 'last_mess'}, {place: '.cont_name_box', order: props.id});

        if (props.type === 'text') {
            Linear.h(3, {text: props.lastMess, class: 'h3_last_mess'}, {place: '.last_mess', order: props.id});
        } else if (props.type === 'voice') {
            Linear.h(3, {text: 'Voice Message', class: 'h3_last_mess'}, {place: '.last_mess', order: props.id});
            Linear.div({class: 'last_mess_ico', html: '<i class="fas fa-microphone-alt"></i>'}, {place: '.h3_last_mess', order: props.id, paste: 'before'});
        } else if (props.type === 'video') {
            if ('text' in props) {
                Linear.h(3, {text: props.text, class: 'h3_last_mess'}, {place: '.last_mess', order: props.id});
            } else {
                Linear.h(3, {text: 'Video', class: 'h3_last_mess'}, {place: '.last_mess', order: props.id});
            }
            Linear.div({class: 'last_mess_ico', html: '<i class="fas fa-video"></i>'}, {place: '.h3_last_mess', order: props.id, paste: 'before'});
        }


        if (props.missed !== undefined) {
            Linear.div({'class': 'missed_mess', 'text': props.missed}, {place: '.last_mess', order: props.id});
        }
    }
}

export var ContButton = new ContButton_class();