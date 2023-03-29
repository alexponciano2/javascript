
let agora = new Date()

let hora = agora.getHours()
let minutos = agora.getMinutes()
let segundos = agora.getSeconds()

if(hora < 6){
    console.log(`Volta a dormir, doido. Ainda são ${hora} horas`);
}else if(hora < 12){
    console.log(`Acorda, VAGABUNDO!!! Já são ${hora}:${minutos}h. Vai ficar a manhã toda dormindo?`);
}else if(hora < 18){
    console.log(`Boa tarde!`);
}else if(hora < 22){
    console.log(`Boa noite`);
}else if(hora < 25){
    console.log('Hora de dormir, né? Já deu por hoje');
}else{
    console.log('Hora inválida');
}