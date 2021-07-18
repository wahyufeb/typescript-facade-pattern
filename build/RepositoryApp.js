"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductRepository_1 = __importDefault(require("./Repository/ProductRepository"));
class RepositoryApp {
    constructor() {
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.productRepo.getAllAction();
            console.log(result);
        });
        this.saveProduct = (params) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.productRepo.saveAction(params);
            console.log(result);
        });
        this.getProductId = (params) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.productRepo.findOneAction(params);
            console.log(result);
        });
        this.updateProductId = (params) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.productRepo.updateAction(params);
            console.log(result);
        });
        this.deleteProductId = (params) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.productRepo.deleteProductAction(params);
            console.log(result);
        });
        this.productRepo = new ProductRepository_1.default();
    }
}
exports.default = RepositoryApp;
//# sourceMappingURL=RepositoryApp.js.map