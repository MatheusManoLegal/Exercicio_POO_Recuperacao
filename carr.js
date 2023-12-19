class Veiculo {
    constructor(marca, modelo, anoFabricacao) {
      this._marca = marca;
      this._modelo = modelo;
      this._anoFabricacao = anoFabricacao;
    }
  
    get marca() {
      return this._marca;
    }
  
    set marca(novaMarca) {
      this._marca = novaMarca;
    }
  
    get modelo() {
      return this._modelo;
    }
  
    set modelo(novoModelo) {
      this._modelo = novoModelo;
    }
  
    get anoFabricacao() {
      return this._anoFabricacao;
    }
  
    set anoFabricacao(novoAno) {
      this._anoFabricacao = novoAno;
    }
  

    descrever() {
      return `Veículo: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.anoFabricacao}`;
    }
  }
  

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
  

  class Moto extends Veiculo {
    constructor(marca, modelo, anoFabricacao, tipoMotor) {
      super(marca, modelo, anoFabricacao);
      this._tipoMotor = tipoMotor;
    }
  

    infoMoto() {
      return `Tipo de Motor: ${this._tipoMotor}`;
    }
  

    descrever() {
      return `${super.descrever()}, ${this.infoMoto()}`;
    }
  }
  

  const carro = new Carro('Peugeot', 'Sonic', 2013, 4);
  const moto = new Moto('Yamaha', '5600', 2021, '2 tempos');
  
  console.log(carro.descrever());
  console.log(moto.descrever());
  