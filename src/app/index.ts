import { BankService } from "./services/bank-service";
import { Player } from "./models/player";

const bank = new BankService();

function createAccountAndPlayer(name: string, balance: number): Player {
    const account = bank.OpenAccount(balance);
    console.log(`Opened account #${account.accountNumber} with £${account.balance}`);
    
    const player = new Player(name, account);
    console.log(`Created player ${player.name}`);

    return player;
}

const p1 = createAccountAndPlayer("Bob Saget", 500);
const p2 = createAccountAndPlayer("Noel Edmunds", 700);

bank.TransferFunds(p2.account.accountNumber, p1.account.accountNumber, 100);

