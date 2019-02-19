import { Component } from '@angular/core';

import { NumbersOfBills } from '../numbers-of-bills';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.less']
})
export class OverviewComponent {
  public numbersOfBills: NumbersOfBills;
  public transactionHistory: Array<[boolean, string]> = new Array();

  constructor(private transactionService: TransactionService) {
    if (this.transactionService.getNumbersOfBills() === null) {
      this.transactionService.setNumbersOfBills(10, 10, 10, 10, 10, 10);
    }

    this.numbersOfBills = this.transactionService.getNumbersOfBills();
    this.transactionHistory = this.transactionService.getTransactionHistory();
  }
}
