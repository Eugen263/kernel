class LinearDOM_class {

    domStructure;

    render() {
        this.domStructure = document.querySelector('.page');
        //console.log(this.domStructure);
    }
}

export var LinearDOM = new LinearDOM_class();
LinearDOM.render();

class Linear_class extends LinearDOM_class {
    paste(place, data) {
        //console.log('Linear.js: Pasting element');
        if ('id' in place) {
            let elem = document.getElementById(place['id']);
        }

        this.div();
    }

    click(element, eventType, event) {
        //console.log('Linear.js: Click event');
        let order = 0;
        if ('order' in element) {
            order = element.order;
        }
        if ('place' in element) {
            LinearDOM.domStructure.querySelectorAll(element.place)[order].addEventListener(eventType, function (){
                if (Array.isArray(event.event)) {
                    let e = event.event[0];
                    if (event.id === undefined) {
                        e({event: event.event[1]});
                    } else {
                        e({event: event.event[1], id: event.id});
                    }
                }
            })
        }
    }

    get(element) {
        //console.log('Linear.js: Getting element');
        if ('class' in element) {
            let order = 0;
            if ('order' in element) {
                order = element.order;
            }
            return 'text';//LinearDOM.domStructure.querySelectorAll(element.place)[order];
        }
    }

    div(create, place) {
        //console.log('Linear.js: Generate "div" element');
        let div = document.createElement('div');
        if ('id' in create) {
            div.id = create['id'];
        }
        if ('class' in create) {
            div.className = create['class'];
        }
        if ('style' in create) {
            div.style = create['style'];
        }
        if ('text' in create) {
            div.innerText = create['text'];
        }
        if ('html' in create) {
            div.innerHTML = create.html;
        }
        if (place !== '') {
            let order = 0;
            if ('order' in place) {
                order = place['order'];
            }
            if ('paste' in place) {
                if ('class' in place) {
                    let block = LinearDOM.domStructure.querySelectorAll('.'+place['class'])[order];
                    block.insertBefore(div, block.lastChild);
                } else if ('id' in place) {
                    let block = LinearDOM.domStructure.querySelector('#'+place.id).appendChild(div);
                    block.insertBefore(div, block.lastChild);
                }
            } else {
                if ('class' in place) {
                    //document.getElementsByClassName(place['class'])[order].appendChild(div);
                    LinearDOM.domStructure.querySelectorAll('.'+place.class)[order].appendChild(div);
                } else if ('id' in place) {
                    LinearDOM.domStructure.querySelector('#'+place.id).appendChild(div);
                    //document.getElementById(place['id']).appendChild(div);
                }
            }
        }
    }

    i(create, place) {
        //console.log('Linear.js: Generate "i" element');
        let i_elem = document.createElement('i');
        if ('id' in create) {
            i_elem.id = create['id'];
        }
        if ('class' in create) {
            i_elem.className = create['class'];
        }
        if (place !== '') {
            if ('class' in place) {
                let order = 0;
                if ('order' in place) {
                    order = place['order'];
                }
                LinearDOM.domStructure.querySelectorAll('.'+place.class)[order].appendChild(i_elem);
            } else if ('id' in place) {
                document.getElementById(place['id']).appendChild(i_elem);
            }
        }
    }

    input(create, place) {
        //console.log('Linear.js: Generate "input" element');
        let input = document.createElement('input');
        if ('class' in create) {
            input.className = create['class'];
        }
        if ('id' in create) {
            input.id = create['id'];
        }
        if ('type' in create) {
            input.type = create['type'];
        }
        if ('placeholder' in create) {
            input.placeholder = create['placeholder'];
        }
        if (place !== '') {
            if ('class' in place) {
                let order = 0;
                if ('order' in place) {
                    order = place['order'];
                }
                LinearDOM.domStructure.querySelectorAll('.'+place.class)[order].appendChild(input);
            } else if ('id' in place) {
                document.getElementById(place['id']).appendChild(input);
            }
        }
    }

    h(size, create, place) {
        //console.log('Linear.js: Generate "h'+size+'" element');
        let h = document.createElement('h'+size);
        if ('class' in create) {
            h.className = create['class'];
        }
        if ('id' in create) {
            h.id = create['id'];
        }
        if ('text' in create) {
            h.innerText = create['text'];
        }
        if (place !== '') {
            if ('class' in place) {
                let order = 0;
                if ('order' in place) {
                    order = place['order'];
                }
                LinearDOM.domStructure.querySelectorAll('.'+place.class)[order].appendChild(h);
            } else if ('id' in place) {
                document.getElementById(place['id']).appendChild(h);
            }
        }
    }

    button(create, place) {
        let order = 0;
        if ('order' in place) {
            order = place.order;
        }
        let button = document.createElement('button');
        if ('id' in  create) {
            button.id = create.id;
        }
        if ('class' in create) {
            button.className = create.class;
        }

        if ('class' in place) {
            LinearDOM.domStructure.querySelectorAll('.'+place.class)[order].appendChild(button);
        }
        if ('id' in place) {
            LinearDOM.domStructure.querySelectorAll('#'+place.id).appendChild(button);
        }
    }

    overflow(place) {
        //console.log('Linear.js: Generate "Overflow"');
        if (place !== '') {
            let box = document.createElement('div');
            box.id = 'overflow_cont_box';
            box.innerHTML = '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>';
            if ('class' in place) {
                LinearDOM.domStructure.querySelectorAll('.'+place.class)[0].appendChild(box);
            }

            if ('id' in place) {
                document.getElementById(place['id']).appendChild(box);
            }
        }
    }
}

export var Linear = new Linear_class();