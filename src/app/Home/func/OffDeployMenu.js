import { IsMenuDeploy } from "./DeployMenu";

// export let IsNotMenuDeploy = [
//     {
//         boleano: true,
//     }
// ];
export const OffDeployMenu = () => {
    IsMenuDeploy.Boleano = false;
    document.getElementById('HeaderHome').style.position = 'absolute';
    for(let x = 1; x < 5; x++){
        document.getElementById('LogoTesla').style.color = 'white';
        document.getElementById(`Option${x}`).style.display = 'none';
    };

    for(let x = 1; x < 5; x++){
        document.querySelector(`.Option${x}`).style.color = 'white';
        document.querySelector(`.Option${x}`).style.background = 'none';
    };

    for(let x = 1 ; x < 4; x++){
        document.querySelector(`.HeaderBtn${x}`).style.color = 'white';
    }
};