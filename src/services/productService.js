import axios from "axios";

export default class ProductService {
  getProducts() {
    return axios.get("http://localhost:3030/api/products/");
  }

  getProductsById(id) {
    return axios.get(`http://localhost:3030/api/products/${id}`);
  }
}
