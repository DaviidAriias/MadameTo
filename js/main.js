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

function showButtons(){
    document.querySelector('#header-buttons').classList.toggle('header--buttons--hidden');
    document.querySelector('#showButtons').classList.toggle('showButtons-checked');
}