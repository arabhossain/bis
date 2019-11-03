import { app_cli} from '../common.js';
import cli_functions from  './functions.js';

//create display up in the text field
let cli_display = document.createElement("div");
app_cli.appendChild(cli_display);

//pass commands here and append response to the display
let command = {

    execute(command){
        let response = cli_functions.passCommand(command, cli_display);
        this.append(response);
    },

    append(response){
        if (typeof response !== "boolean" && response !== undefined){
            let response_elm = document.createElement("p")
            response_elm.innerHTML = response;
            cli_display.appendChild(response_elm);
        }
    }
};

export default command;