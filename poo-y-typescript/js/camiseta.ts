class Camiseta{
	public color:string;
	public modelo:string;
	public marca:string;
	public talla:string;
	public precio:number;

	constructor(color, modelo, marca, talla, precio ){
		this.color = color;
		this.modelo = modelo;
		this.marca = marca;
		this.talla = talla;
		this.precio = precio;
	}
}

var camiseta = new Camiseta("Rojo","Manga Larga","Nike","L",10);

console.log(camiseta)