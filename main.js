class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "uma espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "uma shuriken";
                break;
            default:
                ataque = "uma batata";
        }

        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

const heroi1 = new Heroi("Reinhard", 30, "guerreiro");
const heroi2 = new Heroi("Roswall", 45, "mago");
const heroi3 = new Heroi("Bruce", 28, "monge");
const heroi4 = new Heroi("Oshimura", 25, "ninja");

heroi1.atacar(); 
heroi2.atacar(); 
heroi3.atacar(); 
heroi4.atacar();
