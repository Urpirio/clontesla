
export const OffDeployMenu = () => {
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