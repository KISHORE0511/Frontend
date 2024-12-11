import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SquarePipe } from '../shared/custompipe/square.pipe';

@Component({
  selector: 'app-switchcont',
  imports: [CommonModule,
    // SquarePipe
  ],
  templateUrl: './switchcont.component.html',
  styleUrl: './switchcont.component.css'
})
export class SwitchcontComponent {

  isCond3 : boolean=true;
  isCond2 : boolean=true;


  bike : string[] = ["Hero MotoCorp","Mahindra Two Wheelers","Royal Enfield","Bajaj Auto","TVS Motor Company"];
  car : string[] = ["Maruti Suzuki","Hyundai","Tata Motors","Mahindra","Honda"];
  values: string[] = ["Hero MotoCorp","Mahindra Two Wheelers","Royal Enfield","Bajaj Auto","TVS Motor Company"];
  motor : string = "Hero MotoCorp";

  switch(vals:string){
    if(vals == "bike"){
      console.log("bike")
      this.values = this.bike;
    }
    else if(vals == "car")
    {
      console.log("car");
      this.values = this.car;
    }
  }

  switch2(valuess : string){

    if(valuess == "Hero MotoCorp")
      {
      this.motor = "Hero MotoCorp"
    }
    else if(valuess == "Mahindra Two Wheelers")
      {
      this.motor = "Mahindra Two Wheelers"
    }
    else if(valuess == "Royal Enfield")
      {
      this.motor = "Royal Enfield"
    }
    else if(valuess == "Bajaj Auto")
      {
      this.motor = "Bajaj Auto"
    }
    else if(valuess == "TVS Motor Company")
      {
      this.motor = "TVS Motor Company"
    }
    else if(valuess == "Maruti Suzuki")
      {
      this.motor = "Maruti Suzuki"
    }
    else if(valuess == "Hyundai")
      {
      this.motor = "Hyundai"
    }
    else if(valuess == "Tata Motors")
      {
      this.motor = "Tata Motors"
    }
    else if(valuess == "Mahindra")
      {
      this.motor = "Mahindra"
    }
    else if(valuess == "Honda")
      {
      this.motor = "Honda"
    }
}
}