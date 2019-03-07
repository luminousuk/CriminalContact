import { Injectable } from '@angular/core';
import { Account } from "../models/account.model";
import { SettingsService } from './settings.service';
import { ToastrService } from 'ngx-toastr';
import { CcError } from '../core/cc-error';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  private readonly _accounts: Account[] = [];
  private readonly _accountNumbers: Map<number, Account> = new Map<number, Account>();
  private readonly _playerAccounts: Map<Player, Account> = new Map<Player, Account>();
  private _defaultInterestPct: number;

  constructor(
      private readonly _settingsService: SettingsService,
      private readonly _toastrService: ToastrService
  ) {
      this._settingsService.accountInterestPct$.subscribe(interestPct => {
        this._defaultInterestPct = interestPct;
        console.debug(`BankService._interestPct = ${interestPct}`);
      });
  }

  public OpenAccount(player: Player, openingBalance: number): void {
    const accountNumber = this.GetNextAccountNumber();
    const account = new Account(player, accountNumber, openingBalance);

    this.AddAccount(account, player);

    player.accountNumber = accountNumber;
}

public GetAccount(accountNumber: number): Account {
    if (!this._accountNumbers.has(accountNumber)) {
        throw new CcError(`Account #${accountNumber} does not exist`);
    }

    return this._accountNumbers.get(accountNumber) as Account;
}

public Deposit(accountNumber: number, amount: number): void {
    const account: Account = this.GetAccount(accountNumber);
    account.Deposit(amount, "Cash deposit");
}

public Withdraw(accountNumber: number, amount: number): void {
    const account: Account = this.GetAccount(accountNumber);
    account.Withdraw(amount, "Cash withdrawal");
}

public TransferFunds(from: number, to: number, amount: number): void {
    if (amount <= 0) {
        throw new CcError("Cannot transfer a negative amount");
    }
    
    const fromAccount: Account = this.GetAccount(from);
    const toAccount: Account = this.GetAccount(to);

    fromAccount.Withdraw(amount, `Transfer to #${to}`);
    toAccount.Deposit(amount, `Transfer from #${from}`);

}

public GenerateInterest(): void {
    this._playerAccounts.forEach((account: Account, player: Player) => {

        if (player.isDead) {
            return;
        }

        const interestAmount = account.balance * this.GetPlayerInterestPct(player);

        account.Deposit(interestAmount, "Interest");
    });

    this._toastrService.info(
        "Interest has been calculated for all players",
        "Bank");
}

public GetTotalMoneyInBank(): number {
    let total: number = 0;
    this._accounts.forEach((account) => total += account.balance);
    return total;
}

public GetTotalTransactionCount(): number {
    let total: number = 0;
    this._accounts.forEach((account) => total += account.transactions.length);
    return total;
}

private AddAccount(account: Account, player: Player): void {
    this._accounts.push(account);
    this._accountNumbers.set(account.accountNumber, account);
    this._playerAccounts.set(player, account);
}

private GetPlayerInterestPct(player: Player): number {
     if (!player.role || !player.role.config || !player.role.config.interestPct) {
         return this._defaultInterestPct;
     }

     return player.role.config.interestPct;
}

private GetNextAccountNumber(): number {
    const min = 1000;
    const max = 9999;

    let accountNumber: number;
    do {
        accountNumber = Math.floor(Math.random() * (max - min)) + min;
    }
    while (this._accountNumbers.has(accountNumber));

    return accountNumber;
}
}
