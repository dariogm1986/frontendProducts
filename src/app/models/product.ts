export class Product{
    constructor(
        public id:String,
        public codigo:String,
        public descripcion:String,
        public unidad_medida:String,
        public cantidad:Number,
        public precio:Number,
        public importe:Number
    ){}
}