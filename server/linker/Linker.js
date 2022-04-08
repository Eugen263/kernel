import config from './config.js';

class Linker {
    config;
    constructor(config) {
        this.config = config;
    }
    linkAll() {
        let head = document.getElementsByTagName('head')[0];
        let body = document.getElementsByTagName('body')[0];
        for (let key of config.keys()) {
            let value = config.get(key);
            if (key === 'css') {
                for (let link of value) {
                    let css = document.createElement('link');
                    css.rel = 'stylesheet';
                    css.href = link;
                    head.appendChild(css);
                }
            } else if (key === 'js') {
                for (let link of value) {
                    let css = document.createElement('script');
                    css.type = 'text/javascript';
                    css.src = link;
                    body.appendChild(css);
                }
            }
        }
    }
}

export var linker = new Linker(config);