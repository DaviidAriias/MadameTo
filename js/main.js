//-------------------- Show Grammar
function showV(){
    document.querySelector('#button-vocabulary').classList.toggle('buttonSwitch--checked');
    document.querySelector('#button-grammar').classList.toggle('buttonSwitch--checked');
    document.querySelector('#vocabulary').classList.toggle('hidden');
    document.querySelector('#grammar').classList.toggle('hidden');
}

function showG(){
    document.querySelector('#button-vocabulary').classList.toggle('buttonSwitch--checked');
    document.querySelector('#button-grammar').classList.toggle('buttonSwitch--checked');
    document.querySelector('#vocabulary').classList.toggle('hidden');
    document.querySelector('#grammar').classList.toggle('hidden');
}



function showVH(){
    document.querySelector('#button-vocabulary').classList.add('buttonSwitch--checked');
    document.querySelector('#vocabulary').classList.remove('hidden');
    document.querySelector('#grammar').classList.add('hidden');
}

function showGH(){
    document.querySelector('#button-vocabulary').classList.remove('buttonSwitch--checked');
    document.querySelector('#vocabulary').classList.add('hidden');
    document.querySelector('#grammar').classList.remove('hidden');
}



function showButtons(){
    document.querySelector('#header-buttons').classList.toggle('header--buttons--hidden');
    document.querySelector('#showButtons').classList.toggle('showButtons-checked');
}


//#region pop Up
//funcion para mostrat pop Up - resive como parametro el id del pop Up
const showModal = idModal =>{
    let modal = document.getElementById(idModal);
    let cuerpo = document.body;
    modal.classList.add('modalOverlay--isShow');
    cuerpo.classList.add('is--scrollLocked');

}

//funcion para ocultar pop Up - resive como parametro el id del pop Up
const hideModal = idModal =>{
    let modal = document.getElementById(idModal);
    let cuerpo = document.body;
    modal.classList.remove('modalOverlay--isShow');
    cuerpo.classList.remove('is--scrollLocked');
}
//#endregion pop Up