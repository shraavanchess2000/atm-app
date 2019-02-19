import { Component } from '@angular/core';

import { NumbersOfBills } from '../numbers-of-bills';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-restock',
  templateUrl: './restock.component.html',
  styleUrls: ['./restock.component.less']
})
export class RestockComponent {
  public numberOfHundreds: number;
  public numberOfFifties: number;
  public numberOfTwenties: number;
  public numberOfTens: number;
  public numberOfFives: number;
  public numberOfOnes: number;

  private numbersOfBills: NumbersOfBills;
  public restocked: boolean = false;

  constructor(private transactionService: TransactionService) {
    if (this.transactionService.getNumbersOfBills() === null) {
      this.transactionService.setNumbersOfBills(10, 10, 10, 10, 10, 10);
    }

    this.numbersOfBills = this.transactionService.getNumbersOfBills();
    this.numberOfHundreds = this.numbersOfBills.numberOfHundreds;
    this.numberOfFifties = this.numbersOfBills.numberOfFifties;
    this.numberOfTwenties = this.numbersOfBills.numberOfTwenties;
    this.numberOfTens = this.numbersOfBills.numberOfTens;
    this.numberOfFives = this.numbersOfBills.numberOfFives;
    this.numberOfOnes = this.numbersOfBills.numberOfOnes;
  }

  public onSubmit() {
    this.restocked = false;
    this.transactionService.setNumbersOfBills(this.numberOfHundreds, this.numberOfFifties, this.numberOfTwenties, this.numberOfTens, this.numberOfFives, this.numberOfOnes);
    let updatedNumbersOfBills = this.transactionService.getNumbersOfBills();
    if (updatedNumbersOfBills.numberOfHundreds == this.numberOfHundreds &&
      updatedNumbersOfBills.numberOfFifties == this.numberOfFifties,
      updatedNumbersOfBills.numberOfTwenties == this.numberOfTwenties,
      updatedNumbersOfBills.numberOfTens == this.numberOfTens,
      updatedNumbersOfBills.numberOfFives == this.numberOfFives,
      updatedNumbersOfBills.numberOfOnes == this.numberOfOnes) {
      this.restocked = true;
    }
  }
}
