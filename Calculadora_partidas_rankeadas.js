// # 2️⃣ Calculadora de partidas niveleadas
// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções

// ## Objetivo:

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de niveleadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói **{nome}** está com o saldo de **{saldoVitorias}** e está no nível de **{nivel}**"

let nome = 'Christopher'

let saldoTotal = saldoSubtracao(45,15)

// Função para calcular a o saldo total
function saldoSubtracao(vitorias,derrotas){
let saldoRankeadas = vitorias - derrotas
    return saldoRankeadas
}

let lista = ['Ferro','Bronze','Prata','Ouro','Diamante','Lendário','Imortal'];

let nivel;

// Estrutura de decisão dentro de uma estrutura de repetição para passar por cada item da lista e selecionar o que corresponder nas condições. 
for (i = 0; i < lista.length; i++){
let elo = lista[i];
   
    if (elo === 'Ferro' && saldoTotal >=0 && saldoTotal <= 10){
      nivel = elo;
        break
    }
    else if (elo === 'Bronze' && saldoTotal >= 11 && saldoTotal <= 20){
      nivel = elo;
        break
    }
    else if (elo === 'Prata' && saldoTotal >= 21 && saldoTotal <= 50){
      nivel = elo;
        break
    }
    else if (elo === 'Ouro' && saldoTotal >= 51 && saldoTotal <= 80){
      nivel = elo;
        break
    }
    else if (elo === 'Diamante' && saldoTotal >= 81 && saldoTotal <= 90){
      nivel = elo;
        break
    }
    else if (elo === 'Lendário' && saldoTotal >= 91 && saldoTotal <= 100){
      nivel = elo;
        break
    }
    else if (elo === 'Imortal' && saldoTotal >= 101){
      nivel = elo;
        break
    }
}

console.log('O Herói ' + nome +' está com o saldo total de '+ saldoTotal + ' e está no nivel de ' + nivel);
