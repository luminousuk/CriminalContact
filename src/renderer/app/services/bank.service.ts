import { Injectable } from '@angular/core';
import { Account } from "../shared/models/account.model";
import { TimerService } from './timer.service';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  private readonly _accounts: Map<number, Account> = new Map<number, Account>();
  private _interestIntervalMs: number = 10000;
  private _interestTimerId: string;

  constructor(
      private _timerService: TimerService
  ) {
      this._interestTimerId = _timerService.subscribe(() => this.GenerateInterest(0.1), this._interestIntervalMs);
  }

  public get interestIntervalMs(): number {
      return this._interestIntervalMs;
  }

  public SetInterestIntervalMs(interval: number): void {
      this._interestIntervalMs = interval;
      this._timerService.unsubscribe(this._interestTimerId);
      this._interestTimerId = this._timerService.subscribe(() => this.GenerateInterest(0.1), this._interestIntervalMs);
  }

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

public GenerateInterest(interestPct: number) {
    this._accounts.forEach((act: Account, key: number) => {
        const interestAmount = act.balance * interestPct;
        act.Deposit(interestAmount, "Interest");
    });
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
