import axios from 'axios';

export default class ProductService {
    getProducts() {
        return axios.get('http://localhost:8080/api/products');
    }

    getByIdProduct(id) {
        return axios.get('http://localhost:8080/api/products/' + id);
    }

    addProduct(product) {
        return axios.post('http://localhost:8080/api/products/add', product);
    }
}