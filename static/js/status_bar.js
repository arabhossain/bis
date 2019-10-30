import { app_status_bar} from './common.js';

let status_bar = {
    elems: [],
    generated: [],

    generate : () => {
        status_bar.generated = [];
        app_status_bar.innerHTML = '';
        status_bar.elems.forEach(function (elem) {
            let icon =document.createElement('i');
            icon.setAttribute('class', elem.icon+' align-middle');

            let label =document.createElement('label');
            label.appendChild(document.createTextNode(elem.name));

            let span =document.createElement('span');
            span.setAttribute('id', elem.id);
            span.appendChild(icon);
            span.appendChild(label);
            span.addEventListener(elem.event_type, elem.event);
            app_status_bar.appendChild(span);
        });
    },

    add: (id, name, icon, event_type , event) =>{
        let elem = {
            id: id,
            name: name,
            icon : icon,
            event_type : event_type,
            event : event
        };

        status_bar.elems.push(elem);
        status_bar.generate();
    },

    remove : (id) => {

    },

    list : () => {
        return status_bar.elems;
    }
};




export default status_bar;
