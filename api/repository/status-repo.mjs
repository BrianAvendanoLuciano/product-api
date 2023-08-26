import StatusModel from "../model/status-model.mjs";
import CrudRepo from "./crud-repo.mjs";

export default class StatusRepo extends CrudRepo {
    constructor() {
        super(StatusModel);
    }
}