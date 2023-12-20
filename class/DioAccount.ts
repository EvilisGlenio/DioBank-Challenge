export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  };

  deposit = (newBalance: number): void => {
    if (this.validateStatus()) {
      this.balance += newBalance;
      console.log(`Você aportou ${newBalance}`);
    }
  };

  withdraw = (newWithdraw: number): void => {
    if (this.validateBalance(newWithdraw)) {
      this.balance -= newWithdraw;
      console.log(`você sacou ${newWithdraw}`);
    }
  };

  getBalance = (): number => {
    return this.balance;
  };

  readonly validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };

  private validateBalance = (withdraw: number): boolean => {
    if (this.balance - withdraw >= 0) {
      return true;
    }

    throw new Error("Saldo incompatível");
  };
}
