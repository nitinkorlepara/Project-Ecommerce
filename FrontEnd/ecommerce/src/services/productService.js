import axios from 'axios';

const productUrl="http://localhost:8080/productlist"

class ProductService{

    getProducts(){
        console.log(axios.get(productUrl));
        return axios.get(productUrl);
    }
}

export default new ProductService();