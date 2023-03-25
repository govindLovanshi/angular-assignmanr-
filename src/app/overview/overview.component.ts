import { Component, Input , OnInit } from '@angular/core';
import {DataServiceService} from '../service/data-service.service'
import { StringDataService } from '../service/string-data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})

export class OverviewComponent implements OnInit {


  hide!: boolean;
  cardType! : string;

  activeAccount = 'active account';
  accountAcctiveCharges = '6,90 €';
  DispoCredit = 'DispoCredit';
  DispoCreditAccountCharges = '12,39 %';

  firstCard = 'Deutsche Bank Card Plus (debit card)';
  secondCard = 'MasterCard Standard (credit card)';
  thirdCard = 'MasterCard Gold (credit card)';
  fourthCard = 'MasterCard Travel (credit card)';

  cardChargesInDollars = ''

  constructor(private dataService: DataServiceService , private stringData : StringDataService ){ }

  ngOnInit() {
    this.dataService.currentShowData.subscribe(hide => {
      this.hide = hide;
      console.log("the component----> from ", this.hide);
    });

    this.dataService.currentCardType.subscribe(cardType => {
      this.cardType = cardType;
      console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqq", this.cardType);
    });
  }

  
}
