// # 3️⃣ Escrevendo as classes de um Jogo

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções
// - Classes e Objetos

// ## Objetivo:

// Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

// - nome
// - idade
// - tipo (ex: guerreiro, mago, monge, ninja )

// além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

// - exibir a mensagem: "o {tipo} atacou usando {ataque}")
// - aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
// - e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

// se mago -> no ataque exibir (usou magia)
// se guerreiro -> no ataque exibir (usou espada)
// se monge -> no ataque exibir (usou artes marciais)
// se ninja -> no ataque exibir (usou shuriken)

// ## Saída

// Ao final deve se exibir uma mensagem:

// - "o {tipo} atacou usando {ataque}"
//   ex: mago atacou usando magia
//   guerreiro atacou usando espada
//-------------------------------------------------------------------------------------------------------

// Lista de tipos de ataques para cada classe
let dano = ['magia','espada','artes marciais','shuriken']

// Variável que armazena o tipo de ataque de cada classe segundo o método
let tipoAtaque

class game{
    constructor(nome,idade,classe){
        this.nome = nome
        this.idade = idade
        this.classe = classe
    }

    //Método que contem o processo de laço de repetição que verifica uma lista e seleciona o dado correspondente segundo as condições impostas na estrutura de decisão
    ataque(){
        for(let i = 0; i < dano.length; i++){
            let tipoDano = dano[i]
            
            if (this.classe === 'mago' && tipoDano === 'magia'){
                tipoAtaque = tipoDano
            }
            else if (this.classe === 'guerreiro' && tipoDano === 'espada'){
                tipoAtaque = tipoDano
            }
            else if (this.classe === 'monge' && tipoDano === 'artes marciais'){
                tipoAtaque = tipoDano
            }
            else if (this.classe === 'ninja' && tipoDano === 'shuriken'){
                tipoAtaque = tipoDano
            }
        }
        console.log(`O herói ${this.nome} da classe ${this.classe} atacou usando ${tipoAtaque}`)
    }
}
// Istancia criada para poder chamar o metodo da nossa classe a seguir
let resultado = new game('Arthur',19,'mago')

resultado.ataque()
