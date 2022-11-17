window.scrollTo(0, 0)
let format_I_T_P = [];
let format_T_P_N_P_P = [];
const cont_one = document.querySelector(".cont-one");
const cont_two = document.querySelector(".cont-two");
const cont_three = document.querySelector(".cont-three");
const cont_four = document.querySelector(".cont-four");
const cont_five = document.querySelector(".cont-five");


// ---------------------- Imagen Titulo Parrafo menu------------------------
format_I_T_P.push({ inicio : {    
     imagen : "./assets/inicio/inicio-pos-01.jpg",
     alt : "imagen-inicio",
     titulo : "COMIENZA AHORA",
     description : "¡Ya no hay pretextos! Somos un equipo integrado por personas increíbles que se atreven a entrenar diferente para cumplir con sus objetivos.",
}})
format_I_T_P.push({ planes : {    
    imagen : "./assets/planes/planes-pos-01.png",
    alt : "personas haciendo ejercicio en el gym",
    titulo : "PLANES",
    description : "Planes con precios accesibles, te ofrecemos diferentes planes y opciones que se adaptan a tu tiempo para que logres la meta que deseas.",
}})
format_I_T_P.push({ personalizados : {    
    imagen : "./assets/personalizados/personalizados-pos-01.jpg",
    alt : "imagen-personalizados",
    titulo : "PERSONALIZADOS",
    description : "El coach profesional que necesitan tus metas ¡Nuestra motivación es ver que logres transformar tu vida!",
}})
format_I_T_P.push({ rutinas : {    
     imagen : "./assets/rutinas/rutinas-pos-01.jpg",
     alt : "imagen-rutinas",
     titulo : "RUTINAS PIERNAS",
     description : "Ejercicios para piernas que todo el mundo debería conocer",
}})
format_I_T_P.push({ nutricion : {    
     imagen : "./assets/nutricion/nutricion-pos-01.jpg",
     alt : "imagen-nutricion",
     titulo : "NUTRICION",
     description : "La nutrición puede ayudar a mejorar el desempeño atlético, un estilo de vida activo y una rutina de ejercicios, junto con una buena alimentación, es la mejor manera de permanecer saludable.<br><br>Consumir una buena dieta puede ayudar a brindar la energía necesitas para terminar una carrera o simplemente para disfrutar un deporte o una actividad recreativa. Eres más propenso a cansarse y a desempeñarse de manera insuficiente durante los deportes cuando no recibe suficientes:<br><br> - Calorias<br><br> - Carbohidratoa<br><br> - Liquidos<br><br> - Hierro, vitaminas, otros minerales<br><br> - Proteinas",
}})
format_I_T_P.push({ suplementos : {    
     imagen : "./assets/suplementos/suplementos-pos-01.jpg",
     alt : "imagen-suplementos",
     titulo : "SUPLEMENTOS",
     description : "Los suplementos deportivos se consideran suplementos dietéticos o alimenticios.<br/><br/>Los suplementos alimenticios son productos que se toman por vía oral (por la boca) para complementar la dieta.<br/><br/>Los suplementos alimenticios no requieren la aprobación de la Administración de Alimentos y Medicamentos (FDA, por sus siglas en inglés) de Estados Unidos para que se puedan vender.<br/><br/>Se supone que las compañías que fabrican estos suplementos siguen las buenas prácticas de fabricación recomendadas por la FDA para garantizar la calidad y la seguridad de los productos.<br/><br/>Pero estas medidas de seguridad no siempre se cumplen y algunos suplementos pueden contener sustancias farmacológicas y aditivos que no aparecen en sus etiquetas.",
}})
format_I_T_P.push({ salud : {    
     imagen : "./assets/salud/salud-pos-01.jpg",
     alt : "imagen-salud",
     titulo : "SALUD",
     description : "La actividad física es importante para a aumentar el gasto calórico, controlar el peso, mantenerse en forma, estimular el sistema inmunitario, entre otros beneficios para la salud, y además ayuda a combatir los trastornos mentales.",
}})
format_I_T_P.push({ sobre_nosotros : {    
     imagen : "./assets/sobre-nosotros/sobre-pos-01.jpg",
     alt : "imagen-sobre-nosotros",
     titulo : "SOBRE NOSOTROS",
     description : "Porque nos apasiona lo que hacemos y nos gusta el Fitnes, creamos el gimnasio e implementamos una Cultura Fisica en donde podemos transmitir a nuestros clientes la importancia de mantenerse activos y realizar ejercicios.<br/><br/>Nuestro gimnasio cuenta con entrenadores certificados que le brindaran las directrices para poder establecer un plan de entrenamiento y asi usted pueda lograr las metas a traves del ejercicio continuo y las directrices de nuestros entrenadores.<br/><br/>Ven a nuestro gimnasio, te invitamos a que seas parte de la moda Fitnes la cual es una actividad física realizada de forma repetida (varias veces por semana) que tiene el objetivo de que nos sintamos mejor, tanto física como psicológicamente.",
}})

//------------------------Imagen Titulo Parrafo info------------------------------------------------
// inicio
format_I_T_P.push({ unete : {    
    imagen : "./assets/inicio/inicio-pos-02.jpg",
    alt : "pareja haciendo ejercicio",
    titulo : "UNETE A NUESTRO EQUIPO",
    description : "Al entrenar en nuestro gimnasio contarás con área de peso integrado, peso libre y área de cardio equipadas con los mejores aparatos y el material necesario para que cada sesión sea una experiencia única.<br> <br>Además, nuestros profesionales de la salud están preparados para brindarte el mejor servicio y acompañamiento a través de nuestro programa de entrenamiento semipersonalizado y de nutrición. Atrévete a darle un giro intenso a tu entrenamiento.<br> <br>¡Estos servicios están incluidos en tu membresía y te ayudarán a cumplir tus objetivos de manera integral. ¡Entrena diferente!",
}});
// personalizados
format_I_T_P.push({ coach : {    
     imagen : "./assets/personalizados/personalizados-pos-02.jpg",
     alt : "coach",
     titulo : "TU ENTRENAMIENTO ESTA EN LAS MEJORES MANOS",
     description : "El personal de profesionales de la salud y la actividad física, comprometidos con brindarte el mejor servicio mientras te acompañan en tu progreso y se aseguran de llevarte directo a tu meta. <br><br>Tu coach será la persona encargada de guiarte, supervisar tus entrenamientos y enseñarte las técnicas correctas de los ejercicios sin dejar de lado la motivación que necesitas para cada entrenamiento.",
}});
format_I_T_P.push({ coach_two : {    
     imagen : "./assets/personalizados/personalizados-pos-03.jpg",
     alt : "coach",
     titulo : "GUIANDOTE EN CADA PASO PARA LOGRAR TUS METAS",
     description : "Tu proceso iniciará con una evaluación física, con esta información tu coach diseñará una rutina especial para ti enfocada en tus objetivos, lo suficientemente retadora para dirigirte a los resultados y que seas capaz de demostrarte a ti mismo que cada día te vuelves más fuerte.<br><br>Vive con nosotros la pasión del deporte, el compañerismo y el compromiso de transformar tu vida.",
}});

// rutinas
format_I_T_P.push({ sentadilla : {    
     imagen : "./assets/rutinas/rutinas-pos-02.jpg",
     alt : "foto sentallida",
     titulo : "",
     description : "Sentadillas con barra: 4 series x 8/10 reps.",
}});
format_I_T_P.push({ prensa : {    
     imagen : "./assets/rutinas/rutinas-pos-03.jpg",
     alt : "foto prensa",
     titulo : "",
     description : "Prensa en máquina: 4 series x 8/10 reps",
}});format_I_T_P.push({ pesoMuerto : {    
     imagen : "./assets/rutinas/rutinas-pos-04.jpg",
     alt : "foto peso muerto",
     titulo : "",
     description : "Peso muerto: 4 series x 8/10 reps",
}});format_I_T_P.push({ zancada : {    
     imagen : "./assets/rutinas/rutinas-pos-05.jpg",
     alt : "foto zancada",
     titulo : "",
     description : "Zancada con mancuernas: 4 series x 8/10 reps.",
}});

// nutricion
format_I_T_P.push({ carbohidrato : {    
     imagen : "./assets/nutricion/nutricion-pos-02.jpg",
     alt : "carbohidratos",
     titulo : "CARBOHIDRATOS",
     description : "Los carbohidratos se necesitan para brindar energía durante el ejercicio. Se almacenan sobre todo en los músculos y el hígado.",
}});
format_I_T_P.push({ proteinas : {    
     imagen : "./assets/nutricion/nutricion-pos-03.jpg",
     alt : "proteinas",
     titulo : "PROTEINAS",
     description : "La proteína es importante para el desarrollo muscular y la reparación de los tejidos corporales. También la puede usar el cuerpo para obtener energía, pero solo después de que las reservas de carbohidratos se agotan.",
}});
format_I_T_P.push({ grasas : {    
     imagen : "./assets/nutricion/nutricion-pos-04.jpg",
     alt : "grasas",
     titulo : "GRASAS",
     description : "Las grasas no saturadas son grasas “buenas” que se encuentran principalmente en las verduras, frutos secos, semillas y pescado. A temperatura ambiente, estas grasas son líquidas, no sólidas. Hay dos categorías grandes de grasas buenas: grasas monoinsaturadas y poliinsaturadas. Las encuentra en la mayoría de los frutos secos, productos de soja, aceite de oliva, aceite de maní, aceite de canola, aguacates (paltas), atún blanco y salmón.",
}});
// salud
format_I_T_P.push({ beneficios : {    
     imagen : "./assets/salud/salud-pos-02.jpg",
     alt : "beneficios",
     titulo : "BENEFICIOS",
     description : "La constante actividad fisica tiene efectos positivos en la salud mental y mejora la calidad de vida, algunos de sus aportes son:<br><br>Disminución en la presión arterial, mejoras en la frecuencia cardíaca y la regulación del colesterol.<br><br>Disminución de la depresión.<br><br>Regulación del peso corporal.<br><br>Fortalecimiento de la autoestima.",
}});

function rend_I_T_P(seccion, container){
     for (let items of format_I_T_P){
          for (let item in items){
               if (item == seccion){
                    let var_imagen = items[item].imagen;
                    let var_alt = items[item].alt;
                    let titulo = items[item].titulo;
                    let description = items[item].description;
                    container.innerHTML=`
                    <div class="cont-titulo-parrafo">
                         <img class="img-intro" src=${var_imagen} alt=${var_alt}>
                         <h2 class="sub-parrafo">${titulo}</h2>
                         <p class="parrafo-info">${description}</p>
                    </div>`
               }
          }
     }
}

// --------------- Titulo Parrafo Numero Parrafo Parrafo -----------------
format_T_P_N_P_P.push({ mensual : {    
    plan : '"mensual plan"',
    type : "PLAN MENSUAL",
    p1 : "Entrena a cualquier hora o cualquier dia dentro de los horarios y dias de servicio de EVOLUTION HEALTHY",
    p2 : "$ 450.00",
    p3 : "- Sin contrato",
    p4 : "- Sin inscripcion",
}});
format_T_P_N_P_P.push({ semanal : {    
     plan : '"semanal plan"',
     type : "PLAN SEMANAL",
     p1 : "Entrena a cualquier hora o cualquier dia dentro de los horarios y dias de servicio de EVOLUTION HEALTHY",
     p2 : "$ 200.00",
     p3 : "- Sin contrato",
     p4 : "- Sin inscripcion",
}});
format_T_P_N_P_P.push({ visita : {    
     plan : '"visita plan"',
     type : "POR VISITA",
     p1 : "Entrena a cualquier hora o cualquier dia dentro de los horarios y dias de servicio de EVOLUTION HEALTHY",
     p2 : "$ 50.00",
     p3 : "- Sin contrato",
     p4 : "- Sin inscripcion",
}});

function rend_T_P_N_P_P(seccion, container){
    for (let items of format_T_P_N_P_P){
         for (let item in items){
           if (item == seccion){
               let var_plan = items[item].plan;
               let var_type = items[item].type;
               let parrafo_one = items[item].p1;
               let parrafo_two = items[item].p2;
               let parrafo_three = items[item].p3;
               let parrafo_four = items[item].p4;

               container.innerHTML+=`
               <div class=${var_plan}>
                    <h2 class="sub-planes">${var_type}</h2>
                    <p class="parrafo-planes">${parrafo_one}</p>
                    <p class="parrafo-precio">${parrafo_two}</p>
                    <p class="parrafo-condiciones">${parrafo_three}</p>
                    <p class="parrafo-condiciones">${parrafo_four}</p>
               </div>`
              }
         }
    }
}