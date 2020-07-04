window.onload = function (){

let who = ['Un elefante','Un alienigena','Mi compañero de clase','Mi vecino',];
let what = ['lo pisoteó','lo comió','lo reventó','lo escupió', 'lo lanzó'];         
let where =['en un helicoptero', 'en un lago', 'en el desierto', 'en la luna'];     
let when = ['esta mañana','ahora','anoche','durante la clase de Jimena','la semana pasada.'];

   
        let whoAleatorio = Math.floor(Math.random() * (who.length -1) +1);
        let whatAleatorio = Math.floor(Math.random() * (what.length -1) +1);
        let whereAleatorio = Math.floor(Math.random() * (where.length -1) +1);
        let whenAleatorio = Math.floor(Math.random() * (when.length -1) +1)

        let concatena = who[whoAleatorio].concat(" ", what[whatAleatorio], " ", where[whereAleatorio], " ", when[whenAleatorio]);
        document.getElementById("excuse").innerHTML = concatena;
    

}






  