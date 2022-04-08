import { Linear } from "../server/linear/Linear.js";

class StartBox_class {
    render() {
        Linear.div({'class': 'empty_chat', 'text': 'Selected chat will be here'}, {'id': 'chat_box'});
    }
}

export var StartBox = new StartBox_class();