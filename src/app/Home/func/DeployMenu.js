


export const DeployVehicles = () => {

    for(let x = 1; x < 5; x++){

        if(x == 1){
            document.getElementById('LogoTesla').style.color = 'black';
            document.getElementById(`Option${x}`).style.display = 'flex';
        }else{
            document.getElementById(`Option${x}`).style.display = 'none';
        }
    };

    for(let x = 1; x < 5; x++){
        document.querySelector(`.Option${x}`).style.color = 'black';
        if(x == 1){
            document.querySelector(`.Option${x}`).style.background = '#e5e7eb';
        }else{
            document.querySelector(`.Option${x}`).style.background = 'none';
        }
    };

    for(let x = 1 ; x < 4; x++){
        document.querySelector(`.HeaderBtn${x}`).style.color = 'black';
    }
};

export const DeployEnergy = () => {

    for(let x = 1; x < 5; x++){
        if(x == 2){
            document.getElementById('LogoTesla').style.color = 'black';
            document.getElementById(`Option${x}`).style.display = 'flex';
        }else{
            document.getElementById(`Option${x}`).style.display = 'none';
        }
    };

    for(let x = 1; x < 5; x++){
        document.querySelector(`.Option${x}`).style.color = 'black';
        if(x == 2){
            document.querySelector(`.Option${x}`).style.background = '#e5e7eb';
        }else{
            document.querySelector(`.Option${x}`).style.background = 'none';
        }
    };

    for(let x = 1 ; x < 4; x++){
        document.querySelector(`.HeaderBtn${x}`).style.color = 'black';
    }
};

export const DeployCharging = () => {

    for(let x = 1; x < 5; x++){
        if(x == 3){
            document.getElementById('LogoTesla').style.color = 'black';
            document.getElementById(`Option${x}`).style.display = 'flex';
        }else{
            document.getElementById(`Option${x}`).style.display = 'none';
        }
    };

    for(let x = 1; x < 5; x++){
        document.querySelector(`.Option${x}`).style.color = 'black';

        if(x == 3){
            document.querySelector(`.Option${x}`).style.background = '#e5e7eb';
        }else{
            document.querySelector(`.Option${x}`).style.background = 'none';
        }
    };

    for(let x = 1 ; x < 4; x++){
        document.querySelector(`.HeaderBtn${x}`).style.color = 'black';
    }

};

export const DeployDiscover = () => {

    for(let x = 1; x < 5; x++){
        document.getElementById(`Option${x}`).style.display = 'none';
    };

    for(let x = 1; x < 6; x++){
        document.querySelector(`.Option${x}`).style.color = 'white';
        if(x == 4){
            document.querySelector(`.Option${x}`).style.background = 'none';
        }else{
            document.querySelector(`.Option${x}`).style.background = 'none';
        }
    };

    for(let x = 1 ; x < 4; x++){
        document.querySelector(`.HeaderBtn${x}`).style.color = 'black';
    }

};

export const DeployShop = () => {

    for(let x = 1; x < 5; x++){
        if(x == 4){
            document.getElementById('LogoTesla').style.color = 'black';
            document.getElementById(`Option${x}`).style.display = 'flex';
        }else{
            document.getElementById(`Option${x}`).style.display = 'none';
        }
    };

    for(let x = 1; x < 5; x++){
        document.querySelector(`.Option${x}`).style.color = 'black';
        if(x == 4){
            document.querySelector(`.Option${x}`).style.background = '#e5e7eb';
        }else{
            document.querySelector(`.Option${x}`).style.background = 'none';
        }
    };

    for(let x = 1 ; x < 4; x++){
        document.querySelector(`.HeaderBtn${x}`).style.color = 'black';
    }

};