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
const PrismaClient_1 = __importDefault(require("../Connections/PrismaClient"));
class ProductRepository {
    constructor() {
        this.getAllAction = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield PrismaClient_1.default.product.findMany();
                return response;
            }
            catch (e) {
                console.log(e);
            }
        });
        this.saveAction = (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, price, description } = params;
                const save = yield PrismaClient_1.default.product.create({
                    data: { name, price, description },
                });
                return save;
            }
            catch (e) {
                console.log(e);
            }
        });
        this.findOneAction = (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                const productId = PrismaClient_1.default.product.findUnique({
                    where: { id: params.id }
                });
                return productId;
            }
            catch (e) {
                console.log(e);
            }
        });
        this.updateAction = (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, name, price, description } = params;
                const updateProduct = yield PrismaClient_1.default.product.update({
                    where: { id },
                    data: { name, price, description }
                });
                return updateProduct;
            }
            catch (e) {
                console.log(e);
            }
        });
        this.deleteProductAction = (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                const deleteProductId = yield PrismaClient_1.default.product.delete({
                    where: { id: params.id }
                });
                return deleteProductId;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
exports.default = ProductRepository;
//# sourceMappingURL=ProductRepository.js.map