import { PageController } from "../PageController.js";

class Router_class {
    to(link) {
        history.pushState('', 'link', link.event);
        PageController.urlChange({id: link.id});
    }

    checkPopState(){
        window.addEventListener('popstate', function(event) {
            console.log('history change');
        })
    }
}

export var Router = new Router_class();