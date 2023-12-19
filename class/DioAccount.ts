export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log("Nome alterado com sucesso!");
  };

  getName = (): string => {
    return this.name;
  };

  deposit = (newBalance: number): void => {
    if (this.validateStatus()) {
      this.balance += newBalance;
    }
  };

  withdraw = (newWithdraw: number): void => {
    if (this.validateBalance(newWithdraw)) {
      this.balance -= newWithdraw;
    }
  };

  getBalance = (): void => {
    console.log(this.balance);
  };

  private validateStatus = (): boolean => {
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
