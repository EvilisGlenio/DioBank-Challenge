import { DioAccount } from "./DioAccount";

export class StudentAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  studentDeposit = (newAport: number): void => {
    return this.deposit(newAport + 10);
  };

  showBalance = (): void => {
    console.log(`Saldo: ${this.getBalance()}`);
  };
}
