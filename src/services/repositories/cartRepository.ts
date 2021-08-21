import IProduct from "../../types/models/IProduct";

const addProductToCart = (product: IProduct) => {
  return new Promise((resolve, reject) => {
    const serializedState = JSON.stringify(product);
    const productList = localStorage.getItem("cart-key") || '[]';
    try {
      let productListParsed = JSON.parse(productList) as IProduct[];
      productListParsed = [...productListParsed, product];
      localStorage.setItem('cart-key', JSON.stringify(productListParsed));
      resolve(true);
    }
    catch (err) {
      console.error(err);
      reject(serializedState);
    }
  })
}

const deleteProductToCart = (productId: number) : Promise<IProduct[]> => {
  return new Promise( ( resolve, reject ) => {
    let productList = localStorage.getItem("cart-key") || '[]';
    try {
        let productListParsed = JSON.parse(productList) as IProduct[];
        if(productListParsed === undefined){
            reject(false);
        }
        let editedProductList = productListParsed.filter(product => product.id !== productId);
        localStorage.setItem("cart-key", JSON.stringify(editedProductList));
        resolve(editedProductList as IProduct[]);
    } 
    catch (err){
        alert("delete repo:" + err)
    }
})
}

const getProductsInCart = (): Promise<IProduct[]> => {
  return new Promise((resolve, reject) => {
    try {
      const serializedState = localStorage.getItem('cart-key') || '[]';
      if (serializedState === null) {
        reject(false);
      }
      resolve(JSON.parse(serializedState));
    }
    catch (err) {
      console.log(err);
    }
  })
}

const cartRepository = {
  addProductToCart,
  getProductsInCart,
  deleteProductToCart
}
export default cartRepository