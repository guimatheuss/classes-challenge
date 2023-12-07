class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
  ​
  }
  ​
    atacar() {
      let ataque;
  ​
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque indefinido';
      }
  ​
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
   
   }
  ​
  }
  ​
  const heroi1 = new Heroi('Lord Kliff', 30, 'guerreiro');
  const heroi2 = new Heroi('The Amazing Mage', 100, 'mago');
  ​
  heroi1.atacar();
  heroi2.atacar();