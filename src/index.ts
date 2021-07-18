import App from "./App";

const app = new App();

// to create new account
// const account1 = new Account();
// account1.id = 1;
// account1.name = "Puimek";
// account1.email = "puimek@gmail.com";
// account1.address = "Phuket";
// account1.balance = 2000000;
// app.save(account1);

// transfer from account with id 1 to account with id 2
app.accountTransfer(1, 2, 2000000);