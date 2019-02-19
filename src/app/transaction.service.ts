import { Injectable } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';

import { NumbersOfBills } from './numbers-of-bills';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private numbersOfBills: NumbersOfBills;
  private transactionHistory: Array<[boolean, string]>;

  constructor(private storage: SessionStorageService) {
    this.transactionHistory = new Array();
  }

  public getNumbersOfBills() {
    return this.storage.get('numbersOfBills');
  }

  public getTransactionHistory() {
    if (this.storage.get('transactionHistory') !== null) {
      return this.storage.get('transactionHistory');
    }

    else {
      return new Array();
    }
  }

  public saveTransactionHistory(record: [boolean, string]) {
    this.transactionHistory.push(record);
    this.storage.set('transactionHistory', this.transactionHistory);
  }

  public setNumbersOfBills(hundreds: number, fifties: number, twenties: number, tens: number, fives: number, ones: number) {
    this.numbersOfBills = {
      numberOfHundreds: hundreds,
      numberOfFifties: fifties,
      numberOfTwenties: twenties,
      numberOfTens: tens,
      numberOfFives: fives,
      numberOfOnes: ones
    };
    this.storage.set('numbersOfBills', this.numbersOfBills);
  }
}
