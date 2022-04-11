import { Linear } from "../server/linear/Linear.js";

class ChatBox_class {
    render(props) {
        Linear.div({class: 'trans'}, {id: 'chat_box'});
        Linear.div({class: 'chat'}, {class: 'trans'});
        Linear.div({class: 'chat_box'}, {class: 'chat'});

        //messages
        Linear.div({class: 'chat_scroll'}, {class: 'chat_box'});
        ChatBox.messageIn({chatId: props.id, messageId: 0});
        ChatBox.messageOut({chatId: props.id, messageId: 1});
    }

    messageIn(props) {
        Linear.div({class: 'mess_in_box mess_box'}, {class: 'chat_scroll'});
        Linear.div({class: 'mess_in mess_cont'}, {class: 'mess_box', order: props.messageId});
        Linear.div({class: 'mess_text', text: 'Hey'}, {class: 'mess_cont', order: props.messageId});
        Linear.div({class: 'mess_time', text: '17:34'}, {class: 'mess_cont', order: props.messageId});
    }

    messageOut(props) {
        Linear.div({class: 'mess_out_box mess_box'}, {class: 'chat_scroll'});
        Linear.div({class: 'mess_out mess_cont'}, {class: 'mess_box', order: props.messageId});
        Linear.div({class: 'mess_text', text: 'Hey'}, {class: 'mess_cont', order: props.messageId});
        Linear.div({class: 'mess_time', text: '17:34'}, {class: 'mess_cont', order: props.messageId});
        let check_status = '<div class="mess_stat"><i class="fas fa-check"></i></div>';
        Linear.div({class: 'mess_stat', html: check_status}, {class: 'mess_cont', order: props.messageId});
    }
}

export var ChatBox = new ChatBox_class();