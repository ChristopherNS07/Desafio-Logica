// #1️⃣ Desafio Classificador de nível de Herói

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 6.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"

let nome = 'Christopher'

let = xpPersonagem = 15500;

let lista = ['Ferro','Bronze','Prata','Ouro','Platina','Ascendente','Imortal','Radiante'];

let rank;


for (i = 0; i < lista.length; i++){
let elo = lista[i];
   
    if (elo === 'Ferro' && xpPersonagem >=0 && xpPersonagem <= 1000){
      rank = elo;
        break
    }
    else if (elo === 'Bronze' && xpPersonagem >= 1001 && xpPersonagem <= 2000){
      rank = elo;
        break
    }
    else if (elo === 'Prata' && xpPersonagem >= 2001 && xpPersonagem <= 5000){
      rank = elo;
        break
    }
    else if (elo === 'Ouro' && xpPersonagem >= 5001 && xpPersonagem <=  7000){
      rank = elo;
        break
     }
     else if (elo === 'Platina' && xpPersonagem >= 7001 && xpPersonagem <= 8000){
      rank = elo;
        break
     }
     else if (elo === 'Ascendente' && xpPersonagem >= 8001 && xpPersonagem <= 9000){
      rank = elo;
        break
     }
     else if (elo === 'Imortal' && xpPersonagem >= 9001 && xpPersonagem <= 10000){
      rank = elo;
        break
     }
     else if (elo === 'Radiante' && xpPersonagem >= 10001){
      rank = elo;
        break
     }
}

console.log('O Herói de nome ' + nome + ' está no nivel de ' + rank);
