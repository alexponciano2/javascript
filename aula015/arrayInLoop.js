let num = [8, 6, 5, 4, 7];

/*
for (let c = 0; c < num.length; c++) {
    console.log(`O valor ${num[c]} está na posição ${c}`);
}*/


for (let c in num) {
    console.log(`O valor ${num[c]} está na posição ${c}`);
}


let pos = num.indexOf(7)      // COM ISSO, ELE BUSCA UM VALOR NO VETOR, NO CASO O VALOR 7, ELE RESPONDE EM QUAL INDICE VAI ESTAR

if(pos == -1){               // AQUI ELE TESTA SE O  NÚMERO EXISTE NO ARRAY
    console.log('O valor nao existe');
}else{
    console.log(`O valor está na posição ${pos}`);
}