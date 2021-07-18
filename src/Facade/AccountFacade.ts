import Account from "../DataTransferObejct/Account";
import AccountRepository from "../Repository/AccountRepository";

class AccountFacade {
    private accountRepo: AccountRepository;
    constructor() {
        this.accountRepo = new AccountRepository();
    }

    transfer = async (fromAccount: Account, toAccount: Account, amount: number) => {
        const account1 = await this.accountRepo.findOneAction(fromAccount.id);
        const account2 = await this.accountRepo.findOneAction(toAccount.id);

        if(account1 && account2){
            const transfer1 = await this.accountRepo.updateAction(fromAccount.id, {balance: Number(account1.balance) - amount});
            const transfer2 = await this.accountRepo.updateAction(toAccount.id, {balance: Number(account2.balance) + amount});
            console.log(`Transfer from id ${account1.id} to ${account2.id} with amount ${amount}`);
            console.log("========================");
            console.log(`Account with id ${account1.id}\n`, transfer1);
            console.log(`Account with id ${account2.id}\n`, transfer2);
            console.log("========================");
        }
    }
}
export default AccountFacade;