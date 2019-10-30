import { app_start_menus} from './common.js';

let canvas_click_event = (evt) => {
    if (!app_start_menus.classList.contains('d-none')) {
        app_start_menus.classList.add('d-none');
    }
};

export default canvas_click_event;