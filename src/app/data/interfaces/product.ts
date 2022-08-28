export interface Product{
  id:number,
  name:string,
  price:number
}


export interface CreateProductDTO extends Omit<Product,'id'>{

}

export interface UpdateProductDTO extends Partial<CreateProductDTO>{

}
