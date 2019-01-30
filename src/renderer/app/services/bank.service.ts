import { Injectable } from '@angular/core';
import { Account } from "../shared/models/account.model";

@Injectable({
  providedIn: 'root'
})
export class BankService {

  private readonly _accounts: Map<number, Account> = new Map<number, Account>();

  constructor() { }

  public OpenAccount(openingBalance: number): Account {
    const accountNumber = this.GetNextAccountNumber();
    const account = new Account(accountNumber, openingBalance);
    this._accounts.set(accountNumber, account);

    return account;
}

public GetAccount(accountNumber: number): Account {
    if (!this._accounts.has(accountNumber)) {
        throw new Error(`Account #${accountNumber} does not exist`);
    }

    return this._accounts.get(accountNumber) as Account;
}

public TransferFunds(from: number, to: number, amount: number) {
    if (amount <= 0) {
        throw new Error("Cannot transfer a negative amount");
    }
    
    const fromAccount: Account = this.GetAccount(from);
    const toAccount: Account = this.GetAccount(to);

    fromAccount.Withdraw(amount, `Transfer to #${to}`);
    toAccount.Deposit(amount, `Transfer from #${from}`);

}

private GetNextAccountNumber(): number {
    const min = 1000;
    const max = 9999;

    let accountNumber: number;
    do {
        accountNumber = Math.floor(Math.random() * (max - min)) + min;
    }
    while (this._accounts.has(accountNumber));

    return accountNumber;
}
}
