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
const AccountRepository_1 = __importDefault(require("../Repository/AccountRepository"));
class AccountFacade {
    constructor() {
        this.transfer = (fromAccount, toAccount, amount) => __awaiter(this, void 0, void 0, function* () {
            const account1 = yield this.accountRepo.findOneAction(fromAccount.id);
            const account2 = yield this.accountRepo.findOneAction(toAccount.id);
            if (account1 && account2) {
                const transfer1 = yield this.accountRepo.updateAction(fromAccount.id, { balance: Number(account1.balance) - amount });
                const transfer2 = yield this.accountRepo.updateAction(toAccount.id, { balance: Number(account2.balance) + amount });
                console.log(`Transfer from id ${account1.id} to ${account2.id} with amount ${amount}`);
                console.log("========================");
                console.log(`Account with id ${account1.id}\n`, transfer1);
                console.log(`Account with id ${account2.id}\n`, transfer2);
                console.log("========================");
            }
        });
        this.accountRepo = new AccountRepository_1.default();
    }
}
exports.default = AccountFacade;
//# sourceMappingURL=AccountFacade.js.map