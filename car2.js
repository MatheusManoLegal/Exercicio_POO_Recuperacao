// criar uma nova extend para o carro

class Carro extends Veiculo {
    constructor(marca, modelo, anoFabricacao, numPortas) {
      super(marca, modelo, anoFabricacao);
      this._numPortas = numPortas;
    }
  

    infoCarro() {
      return `Número de Portas: ${this._numPortas}`;
    }
  

    descrever() {
      return `${super.descrever()}, ${this.infoCarro()}`;
    }
  }
  
// criar uma nova extend para a Moto

  class Moto extends Veiculo {
    constructor(marca, modelo, anoFabricacao, tipoMotor) {
      super(marca, modelo, anoFabricacao);
      this._tipoMotor = tipoMotor;
    }
  

    infoMoto() {
      return `Tipo de Motor: ${this.tipoMotor}`;
    }
  

    descrever() {
      return `${super.descrever()}, ${this.infoMoto()}`;
    }
  }
