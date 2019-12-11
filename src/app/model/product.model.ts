//le ? permet de passer malgré le typage
export class Product{
    constructor(
        public id?: number,
        public name?: string,
        public category?: string,
        public price?: number){
            
        }
}