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




function backModal() {
    var images = activity__p.querySelectorAll('img');
    let i;
    for (i = 0; i < images.length; i++) {
        images[i].classList.add('hidden');
    }
    contbuttons__p.style.display = "";
    buttonBack__modal1.style.visibility = "hidden";
}

const ActivitieP = idActivitie =>{

    let activitie = document.getElementById(idActivitie);
    
    //console.log(idActivitie);
    
    activitie.classList.remove('hidden');
    contbuttons__p.style.display = "none";
    buttonBack__modal1.style.visibility = "visible";
}



const ActivitieP2 = idActivitie =>{

    let activitie = document.getElementById(idActivitie);
    
    //console.log(idActivitie);
    
    activitie.classList.remove('hidden');
    contbuttons__p2.style.display = "none";
    buttonBack__modal2.style.visibility = "visible";
}

function backModal2() {
    var images = activity__p2.querySelectorAll('img');
    let i;
    for (i = 0; i < images.length; i++) {
        images[i].classList.add('hidden');
    }
    contbuttons__p2.style.display = "";
    buttonBack__modal2.style.visibility = "hidden";
}



const ActivitiePP = idActivitie =>{

    let activitie = document.getElementById(idActivitie);
    
    console.log(idActivitie);
    
    activitie.classList.remove('hidden');
    contbuttons__p3.style.display = "none";
    buttonBack__modal3.style.visibility = "visible";
}

function backModal3() {
    var images = activity__p3.querySelectorAll('img');
    let i;
    for (i = 0; i < images.length; i++) {
        images[i].classList.add('hidden');
    }
    contbuttons__p3.style.display = "";
    buttonBack__modal3.style.visibility = "hidden";
}




const ActivitieP3 = idActivitie =>{

    let activitie = document.getElementById(idActivitie);
    
    //console.log(idActivitie);
    
    activitie.classList.remove('hidden');
    contbuttons__p4.style.display = "none";
    buttonBack__modal4.style.visibility = "visible";
}

function backModal4() {
    var images = activity__p4.querySelectorAll('img');
    let i;
    for (i = 0; i < images.length; i++) {
        images[i].classList.add('hidden');
    }
    contbuttons__p4.style.display = "";
    buttonBack__modal4.style.visibility = "hidden";
}