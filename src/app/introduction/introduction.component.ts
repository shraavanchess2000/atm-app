import { Component } from '@angular/core';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.less']
})
export class IntroductionComponent{
  constructor(private transactionService: TransactionService) {
    if (this.transactionService.getNumbersOfBills() === null) {
      this.transactionService.setNumbersOfBills(10, 10, 10, 10, 10, 10);
    }
  }
}
