clear_containers ();
inicio();

const header = document.querySelector(".header");
const img_intro = document.querySelector(".img-intro");
const cont_btn = document.querySelector(".cont-btn");
const body = document.querySelector(".body");
const menu = document.querySelector(".menu");
const text_menu = document.querySelector(".text-menu");
const text_cerrar = document.querySelector(".text-cerrar");
const opacar = document.querySelector(".opacar");
const btn = document.querySelector(".btn");
const boton_click = document.querySelectorAll(".boton-click");

cont_btn.addEventListener("click", open_close );


function open_close () {
    body.classList.toggle("congelar");
    menu.classList.toggle("hide");
    text_menu.classList.toggle("on-off");
    text_cerrar.classList.toggle("on-off");
    btn.classList.toggle("equis");
    opacar.classList.toggle("opacado");
    menu.scrollTop = 0;
};

[].forEach.call(boton_click, function(item){
    item.addEventListener("click", (event) => {
        if (event.target.innerText === ">\nINICIO") {
          open_close();
          clear_containers ();
          inicio();
        }
        else if (event.target.innerText === ">\nPLANES") {
          open_close();
          clear_containers ();
          planes();
        }
        else if (event.target.innerText === ">\nPERSONALIZADOS") {
          open_close();
          clear_containers ();
          personalizados()
        }
        else if (event.target.innerText === ">\nRUTINAS") {
          open_close();
          clear_containers ();
          rutinas();
        }
        else if (event.target.innerText === ">\nNUTRICION") {
          open_close();
          clear_containers ();
          nutricion()
        }
        else if (event.target.innerText === ">\nSUPLEMENTOS") {
          open_close();
          clear_containers ();
          suplementos();
        }
        else if (event.target.innerText === ">\nSALUD") {
          open_close();
          clear_containers ();
          salud();
        }
        else if (event.target.innerText === ">\nSOBRE NOSOTROS") {
          open_close();
          clear_containers ();
          sobre_nosotros();
        }
    })
})

function clear_containers () {
  cont_one.innerHTML = "";
  cont_two.innerHTML = "";
  cont_three.innerHTML = "";
  window.scrollTo(0, 0)
}
function inicio() {
  rend_I_T_P("inicio", cont_one, "selec-head");
  rend_I_T_P("unete", cont_three, "selec-cont");
}
function planes() {
  rend_I_T_P("planes", cont_one, "selec-head");
  rend_T_P_N_P_P("mensual", cont_three);
  rend_T_P_N_P_P("semanal", cont_three);
  rend_T_P_N_P_P("visita", cont_three);
}
function personalizados() {
  rend_I_T_P("personalizados", cont_one, "selec-head");
  rend_I_T_P("coach", cont_two, "selec-cont");
  rend_I_T_P("coach_two", cont_two, "selec-cont");
}
function rutinas() {
  rend_I_T_P("rutinas", cont_one, "selec-head");
  rend_I_T_P("sentadilla", cont_two, "selec-cont");
  rend_I_T_P("prensa", cont_two, "selec-cont");
  rend_I_T_P("pesoMuerto", cont_two, "selec-cont");
  rend_I_T_P("zancada", cont_two, "selec-cont");

}
function nutricion() {
  rend_I_T_P("nutricion", cont_one, "selec-head");
  rend_I_T_P("carbohidrato", cont_two, "selec-cont");
  rend_I_T_P("proteinas", cont_two, "selec-cont");
  rend_I_T_P("grasas", cont_three, "selec-cont");

}
function suplementos() {
  rend_I_T_P("suplementos", cont_one, "selec-head");
}
function salud() {
  rend_I_T_P("salud", cont_one, "selec-head");
  rend_I_T_P("beneficios", cont_three, "selec-cont");

}
function sobre_nosotros() {
  rend_I_T_P("sobre_nosotros", cont_one, "selec-head");
}