import { Component } from '@angular/core';

import { NumbersOfBills } from '../numbers-of-bills';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.less']
})
export class WithdrawComponent {
  public dispensedAmount: number = 0;
  public numbersOfBills: NumbersOfBills;
  public sufficientFunds: boolean = true;
  public withdrawalAmount: number;

  constructor(private transactionService: TransactionService) {
    if (this.transactionService.getNumbersOfBills() === null) {
      this.transactionService.setNumbersOfBills(10, 10, 10, 10, 10, 10);
    }
  }
  
  public onSubmit() {
    this.sufficientFunds = true;
    this.numbersOfBills = this.transactionService.getNumbersOfBills();
    let updatedNumberOfHundreds = this.numbersOfBills.numberOfHundreds;
    let updatedNumberOfFifties = this.numbersOfBills.numberOfFifties;
    let updatedNumberOfTwenties = this.numbersOfBills.numberOfTwenties;
    let updatedNumberOfTens = this.numbersOfBills.numberOfTens;
    let updatedNumberOfFives = this.numbersOfBills.numberOfFives;
    let updatedNumberOfOnes = this.numbersOfBills.numberOfOnes;
    let updatedWithdrawalAmount = this.withdrawalAmount;

    if (updatedWithdrawalAmount > 0 && ~~(updatedWithdrawalAmount / 100) > 0) {
      if (updatedNumberOfHundreds <= ~~(updatedWithdrawalAmount / 100)) {
        updatedWithdrawalAmount = updatedWithdrawalAmount - 100 * updatedNumberOfHundreds;
        updatedNumberOfHundreds = 0;
      }
      else {
        updatedNumberOfHundreds = updatedNumberOfHundreds - ~~(this.withdrawalAmount / 100);
        updatedWithdrawalAmount = updatedWithdrawalAmount - 100 * ~~(updatedWithdrawalAmount / 100);
      }
    }

    if (updatedWithdrawalAmount > 0 && ~~(updatedWithdrawalAmount / 50) > 0) {
      if (updatedNumberOfFifties <= ~~(updatedWithdrawalAmount / 50)) {
        updatedWithdrawalAmount = updatedWithdrawalAmount - 50 * updatedNumberOfFifties;
        updatedNumberOfFifties = 0;
      }
      else {
        updatedNumberOfFifties = updatedNumberOfFifties - ~~(updatedWithdrawalAmount / 50);
        updatedWithdrawalAmount = updatedWithdrawalAmount - 50 * ~~(updatedWithdrawalAmount / 50);
      }
    }

    if (updatedWithdrawalAmount > 0 && ~~(updatedWithdrawalAmount / 20) > 0) {
      if (updatedNumberOfTwenties <= ~~(updatedWithdrawalAmount / 20)) {
        updatedWithdrawalAmount = updatedWithdrawalAmount - 20 * updatedNumberOfTwenties;
        updatedNumberOfTwenties = 0;
      }
      else {
        updatedNumberOfTwenties = updatedNumberOfTwenties - ~~(updatedWithdrawalAmount / 20);
        updatedWithdrawalAmount = updatedWithdrawalAmount - 20 * ~~(updatedWithdrawalAmount / 20);
      }
    }

    if (updatedWithdrawalAmount > 0 && ~~(updatedWithdrawalAmount / 10) > 0) {
      if (updatedNumberOfTens <= ~~(updatedWithdrawalAmount / 10)) {
        updatedWithdrawalAmount = updatedWithdrawalAmount - 10 * updatedNumberOfTens;
        updatedNumberOfTens = 0;
      }
      else {
        updatedNumberOfTens = updatedNumberOfTens - ~~(updatedWithdrawalAmount / 10);
        updatedWithdrawalAmount = updatedWithdrawalAmount - 10 * ~~(updatedWithdrawalAmount / 10);
      }
    }

    if (updatedWithdrawalAmount > 0 && ~~(updatedWithdrawalAmount / 5) > 0) {
      if (updatedNumberOfFives <= ~~(updatedWithdrawalAmount / 5)) {
        updatedWithdrawalAmount = updatedWithdrawalAmount - 5 * updatedNumberOfFives;
        updatedNumberOfFives = 0;
      }
      else {
        updatedNumberOfFives = updatedNumberOfFives - ~~(updatedWithdrawalAmount / 5);
        updatedWithdrawalAmount = updatedWithdrawalAmount - 5 * ~~(updatedWithdrawalAmount / 5);
      }
    }

    if (updatedWithdrawalAmount > 0) {
      if (updatedNumberOfOnes < updatedWithdrawalAmount) {
        this.sufficientFunds = false;
      }
      else {
        updatedNumberOfOnes = updatedNumberOfOnes - updatedWithdrawalAmount;
        updatedWithdrawalAmount = 0;
      }
    }

    if (this.sufficientFunds == true) {
      this.dispensedAmount = this.withdrawalAmount;
      this.transactionService.setNumbersOfBills(updatedNumberOfHundreds, updatedNumberOfFifties, updatedNumberOfTwenties, updatedNumberOfTens, updatedNumberOfFives, updatedNumberOfOnes);
      this.transactionService.saveTransactionHistory([true, 'Dispensed $' + this.dispensedAmount.toString()]);
    }

    else {
      this.transactionService.saveTransactionHistory([false, 'Insufficient Funds']);
    }
  }
}
