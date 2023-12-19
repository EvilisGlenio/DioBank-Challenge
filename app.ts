import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

// User
const peopleAccount: PeopleAccount = new PeopleAccount(
  3136327,
  "Glenio",
  20231201
);
peopleAccount.deposit(80);
peopleAccount.withdraw(40);
console.log(peopleAccount.getBalance());

// Company
const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20231202);
companyAccount.deposit(80);
companyAccount.withdraw(20);
console.log(companyAccount.getBalance());
