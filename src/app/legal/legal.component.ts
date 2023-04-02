import { Component , OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.css']
})
export class LegalComponent implements OnInit {

  legalForm! : FormGroup
  transactions : boolean = false;
  moneyLaundring : boolean = false;
  schufa : boolean = false;
  custody : boolean = false;
  downloadOne : boolean = false;
  downlaodTwo : boolean = false;
  isDownloaded : boolean = false;
  isDownloaded2 : boolean = false;
  
  submitted = false;   // Add this variable to track form submission;
 
  constructor( private _fb : FormBuilder , private router : Router){}

  ngOnInit(): void {
     this.setFormState()
     this.saveFormToSessionStorage()
  }

  setFormState(){
    this.legalForm = this._fb.group({
      transactions: [false, Validators.requiredTrue ],
      moneyLaundring: [false, Validators.requiredTrue],
      schufa : [false, Validators.requiredTrue],
      custody : [false, Validators.requiredTrue],
      isDownloaded : [false, Validators.requiredTrue],
      isDownloaded2 : [false, Validators.requiredTrue],
    })
    this.getFormFromSessionStorage()
  }

  saveFormToSessionStorage() {
    const dataToStore = {
      transactions: this.legalForm.controls['transactions'].value,
      moneyLaundring: this.legalForm.controls['moneyLaundring'].value,
      schufa: this.legalForm.controls['schufa'].value,
      custody: this.legalForm.controls['custody'].value,
      isDownloaded: this.legalForm.controls['isDownloaded'].value,
      isDownloaded2: this.legalForm.controls['isDownloaded2'].value,
      
    };
    const json = JSON.stringify(dataToStore);
    sessionStorage.setItem('legalForm', json);
    console.log("======data is stored in session storage ======>" ,  json)
  }

  getFormFromSessionStorage() {
    const json = sessionStorage.getItem('productForm');
    if (json) {
      const data = JSON.parse(json);
      this.legalForm.setValue({
        transactions: data.transactions,
        moneyLaundring: data.moneyLaundring,
        schufa: data.schufa,
        custody: data.custody,
        isDownloaded: data.isDownloaded,
        isDownloaded2: data.isDownloaded2,
      });
      console.log("=======> get data===>" , json)
    }
  }


  movingtoNextFunction(){
    this.submitted = true; // Set submitted to true when form is submitted
    
    console.log("transactions" , this.transactions);
    console.log("moneyLaundring" , this.moneyLaundring);
    console.log("schufa" , this.schufa);
    console.log("custody" , this.custody);
    console.log("downloadOne" , this.isDownloaded);
    console.log("downlaodTwo" , this.isDownloaded2);

    // if(this.legalForm.invalid ){
    //   console.log("=========this.legalForm.invalid==========> " , this.legalForm.invalid)
    //     return ;
    // }

    if(this.transactions == false && this.moneyLaundring == false && this.schufa == false && this.custody == false && this.isDownloaded == false && this.isDownloaded2 == false ){
      console.log("=========this.legalForm.invalid==========> " , this.legalForm.invalid)
        return ;
    }

    this.saveFormToSessionStorage()
    this.router.navigate(['thankyou']);
    
  }

  transactionsCheckBox(){
    this.transactions = true;
  }

  moneyLaundringCheckBox(){
    this.moneyLaundring = true;
  }

  schufaCheckBox(){
    this.schufa = true;
  }

  custodyCheckBox(){
    this.custody = true;
  }

  downloadFile() {
    this.isDownloaded = true;
    window.open('https://www.deutsche-bank.de/content/dam/deutschebank/de/shared/pdf/Informationen-und-Bedingungen-fuer-Ihr-Konto.pdf', '_blank');

  }

  isDownloadedTwo(){
    this.isDownloaded2 = true
    window.open('https://www.deutsche-bank.de/dam/deutschebank/de/shared/pdf/entgeltinformation-aktivkonto-ag.pdf', '_blank');

  }

  onRetun(){
    this.router.navigate(['personal']);
  }



}
