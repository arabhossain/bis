import _dom from '../utilites/dom.js';

let cli_functions = {
    passCommand(command, app_cli){
        switch (command) {

            case 'clear':
                app_cli.innerHTML = '';
                return false;
                break;

            case command.startsWith('screen') ? command: '':
                let commands = command.split(" ");
                if (commands[1] !== undefined){
                    if (commands[1] === 'maximize'){
                        _dom.openFullscreen();
                        return command;
                    }else if    (commands[1] === 'minimize'){
                        _dom.closeFullscreen();
                        return command;
                    }

                    return false;
                }

                break;
            default:
                return 'Invalid Command';
                break;

        }
    }
};


export default cli_functions;