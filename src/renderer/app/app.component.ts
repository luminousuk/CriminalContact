import { Component } from '@angular/core';
import { FileService } from "./file.service";
import { BankService } from './bank.service';
import { Player } from '../models/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CriminalContact';

  constructor(
    private fileService: FileService,
    private bankService: BankService)
  { }

  ngOnInit() {
    this.fileService.getFiles()
      .then((files: string[]) => {
        console.log(files);
      });

      this.testBank();
  }

  private testBank(): void {
    const bob = this.createAccountAndPlayer("Bob", 1000);
    const job = this.createAccountAndPlayer("Job", 1000);

    this.bankService.TransferFunds(bob.account.accountNumber, job.account.accountNumber, 250);
  }

  private createAccountAndPlayer(name: string, balance: number): Player {
    const account = this.bankService.OpenAccount(balance);
    console.log(`Opened account #${account.accountNumber} with £${account.balance}`);
    
    const player = new Player(name, account);
    console.log(`Created player ${player.name}`);

    return player;
}
}
