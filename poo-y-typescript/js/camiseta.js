var Camiseta = /** @class */ (function () {
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    return Camiseta;
}());
var camiseta = new Camiseta("Rojo", "Manga Larga", "Nike", "L", 10);
console.log(camiseta);
