import AccountRepository from "./Repository/AccountRepository";
import Account from "./DataTransferObejct/Account";
import AccountFacade from "./Facade/AccountFacade";

class App {
    private accountRepo: AccountRepository;
    private accountService: AccountFacade;
    constructor() {
        this.accountRepo = new AccountRepository();
        this.accountService = new AccountFacade();
    }

    save = async (account: Account) => {
        const { id, name, email, address, balance } = account;
        let result: any = {};
        if(id) {
            result = await this.accountRepo.updateAction(id, {name, email, address, balance})
        }else{
            result = await this.accountRepo.saveAction({name, email, address, balance})
        }
        console.log(result)
    }

    accountTransfer = async (fromId: number, toId: number, amount: number) => {
        const acc1 = new Account();
        acc1.id = fromId;

        const acc2 = new Account();
        acc2.id = toId;

        const result = await this.accountService.transfer(acc1, acc2, amount);
    }
}

export default App;