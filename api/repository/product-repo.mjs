import ProductModel from "../model/product-model.mjs";
import CrudRepo from "./crud-repo.mjs";

export default class ProductRepo extends CrudRepo {
    constructor() {
        super(ProductModel);
    }
}