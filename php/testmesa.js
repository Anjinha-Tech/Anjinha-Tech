// Declaração de Variáveis
var a = 5; 
var b = 7;

for(i=0; i<=5; i++){
// Um loop que começa com i = 0 e continua até i = 5, incluindo esse valor (ou seja, o loop será executado para i = 0, 1, 2, 3, 4, 5).
    if(b < i){
        console.log(a)
    }
// Dentro do loop, há uma condição que verifica se b é menor que i. Se essa condição for verdadeira, o valor de a será impresso no console.    
    a=i-1;
    b--
// Após a verificação, a é atualizado para i - 1 e b é decrecido em 1.    
}

// i = 0:

// b (7) não é menor que i (0), então nada é impresso.
// a se torna 0 - 1 = -1, b se torna 6.
// i = 1:

// b (6) não é menor que i (1), nada é impresso.
// a se torna 1 - 1 = 0, b se torna 5.
// i = 2:

// b (5) não é menor que i (2), nada é impresso.
// a se torna 2 - 1 = 1, b se torna 4.
// i = 3:

// b (4) não é menor que i (3), nada é impresso.
// a se torna 3 - 1 = 2, b se torna 3.
// i = 4:

// b (3) não é menor que i (4), nada é impresso.
// a se torna 4 - 1 = 3, b se torna 2.
// i = 5:

// b (2) é menor que i (5), então 3 (o valor atual de a) é impresso.
// a se torna 5 - 1 = 4, b se torna 1.