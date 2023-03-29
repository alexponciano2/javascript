let amigo = {
    nome:'José', 
    sexo:'M', 
    peso: 85.4, 
    engordar(p=0){
        console.log('Engordou');
        this.peso = this.peso + p
    }}

amigo.engordar(5)
console.log(`Olá ${amigo.nome}, seu peso é ${amigo.peso}`);