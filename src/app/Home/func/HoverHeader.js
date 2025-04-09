
export const HoverHeader_MouseEnter = () =>{
    for(let x = 1; x < 5; x++){
        document.getElementById('LogoTesla').style.color = 'black';
    };

    for(let x = 1; x < 5; x++){
        document.querySelector(`.Option${x}`).style.color = 'black';
    };

    for(let x = 1 ; x < 4; x++){
        document.querySelector(`.HeaderBtn${x}`).style.color = 'black';
    }
};

export const HoverHeader_MouseLeave = () => {
    for(let x = 1; x < 5; x++){
        document.getElementById('LogoTesla').style.color = 'white';
    };

    for(let x = 1; x < 5; x++){
        document.querySelector(`.Option${x}`).style.color = 'white';
    };

    for(let x = 1 ; x < 4; x++){
        document.querySelector(`.HeaderBtn${x}`).style.color = 'white';
    }
}