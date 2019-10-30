import status_bar from './status_bar.js';
import canvas_click_event from './canvas.js';
import { app_start_menus, app_canvas} from './common.js';
import start_menu from './components/start_menu.js';

//app canvas
app_canvas.addEventListener('click', canvas_click_event);



//bind start menu
app_start_menus.innerHTML = start_menu;


// create status bar icons
status_bar.add('start-icon', 'start', 'fas fa-bars', 'click', ()=>{
    app_start_menus.classList.toggle('d-none');
});

status_bar.add('start-emon', 'Emon', 'fab fa-accusoft', 'click', ()=>{
    alert('you just clicked in Emon');
});

