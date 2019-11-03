import { app_start_menus , app_cli} from './common.js';
import command from './cli/commands.js';


//canvas cli
let cli_display = document.createElement("div");
app_cli.appendChild(cli_display);


//cli input field
let cli = document.createElement("input");
cli.setAttribute('type', 'text');
cli.setAttribute('autofocus', true);
cli.addEventListener('keydown', (evt)=>{
    if (evt.keyCode == 13) {
        command.execute(evt.srcElement.value)
        evt.srcElement.value = '';
        return false;
    }
});
app_cli.appendChild(cli);


//canvas action event
let canvas_click_event = (evt) => {

    //hide start menu if visible
    if (!app_start_menus.classList.contains('d-none')) {
        app_start_menus.classList.add('d-none');
    }

    //auto focus any where clicked on canvas
    cli.focus();
};

export default canvas_click_event;
