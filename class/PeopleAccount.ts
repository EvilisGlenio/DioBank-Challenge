import { DioAccount } from "./DioAccount";

export class PeopleAccount extends DioAccount {
  private doc_id: number;

  constructor(doc_id: number, name: string, accountNumber: number) {
    super(name, accountNumber);
    this.doc_id = doc_id;
  }

  getDoc = (): number => {
    let doc_id = this.doc_id;
    return doc_id;
  };

  showBalance = (): void => {
    console.log(`Saldo: ${this.getBalance()}`);
  };
}
