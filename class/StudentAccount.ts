import { DioAccount } from "./DioAccount";

export class StudentAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (newBalance: number): void => {
    if (this.validateStatus()) {
      this.balance += newBalance + 10;
    }
  };
}
