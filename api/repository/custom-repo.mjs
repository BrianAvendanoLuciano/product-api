import CustomModel from "../model/custom-model.mjs";
import CrudRepo from "./crud-repo.mjs";

export default class CustomRepo extends CrudRepo {
    constructor() {
        super(CustomModel);
    }
}