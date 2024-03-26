function veiculo(marca, modelo, ano){
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
}

function carro(marca, modelo, ano, portas){
    veiculo.call(this, marca, modelo, ano)
    this.portas = portas;
}

function Moto(marca, modelo, ano, cilindradas) {
    veiculo.call(this, marca, modelo, ano);
    this.cilindradas = cilindradas;
}

const carro1 = new carro('Toyota', 'Corolla', 2020, 4);
const moto1 = new Moto('Honda', 'CB500', 2021, 500);
const carro2 = new carro('Volkswagen', 'Golf', 2019, 4);

console.log(carro1)
console.log(carro2)
console.log(moto1)