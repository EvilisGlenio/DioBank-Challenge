import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { StudentAccount } from "./class/StudentAccount";

// User
const peopleAccount: PeopleAccount = new PeopleAccount(
  3136327,
  "Glenio",
  20231201
);
console.log("Dados:");
console.log(`Nome: ${peopleAccount.getName()}`);
peopleAccount.showBalance();
peopleAccount.deposit(80);
peopleAccount.showBalance();
peopleAccount.withdraw(45);
peopleAccount.showBalance();

console.log(` `);
// Company
const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20231202);
console.log("Dados:");
console.log(`Razão social: ${companyAccount.getName()}`);
companyAccount.showBalance();
companyAccount.deposit(80);
companyAccount.showBalance();
companyAccount.withdraw(20);
companyAccount.showBalance();
companyAccount.getLoan(2000);
companyAccount.showBalance();

console.log(` `);

// Student
const studentAccount: StudentAccount = new StudentAccount("Raíssa", 20231203);
console.log("Dados:");
console.log(`Nome: ${studentAccount.getName()}`);
studentAccount.showBalance();
studentAccount.studentDeposit(90);
studentAccount.showBalance();
studentAccount.withdraw(30);
studentAccount.showBalance();
