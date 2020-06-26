export class Gasto{
    constructor(
        public id:string,
        public fecha:Date,
        public valor:number,
        public concepto:string
    ){}
}