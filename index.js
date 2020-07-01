window.onload = function (){

let who = ['Un elefante','Devian','Mi compañero de clase','Mi ordenador'];
let what = ['pisoteó','comió','reventó','escupió'];         
let where =['en un helicoptero','en un lago', 'en el desierto', 'en lo alto de la montaña'];     
let when = ['esta mañana','hace 10 minutos','anoche','durante la clase de Jimena','la semana pasada.'];

    for (var i = 0; i < who.length; i++){
        let whoAleatorio = Math.floor(Math.random() * (who.length -1) +1);
        let whatAleatorio = Math.floor(Math.random() * (what.length -1) +1);
        let whereAleatorio = Math.floor(Math.random() * (where.length -1) +1);
        let whenAleatorio = Math.floor(Math.random() * (when.length -1) +1);

        let concatena = who[whoAleatorio].concat(" ", what[whatAleatorio], " ", where[whereAleatorio], " ",when[whenAleatorio]);
        console.log(concatena);
        document.getElementById("excuse").innerHTML = concatena;
    }

}




  