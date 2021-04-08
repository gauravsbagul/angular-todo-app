import { Component } from '@angular/core';

const mainArray: string[] = ['white_Sand', 'beach', 'rain_forrest', 'sailing', 'water_fall']

const nashik = ['beach', 'rain_forrest']

const pune = ['rain_forrest', 'sailing',]

const mumbai = ['white_Sand', 'beach', 'sailing', 'water_fall']

const delhi = ['beach']
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  name: string = 'gaurav';
  selectedValue: string = '';

  isNashik: boolean = false;
  isPune: boolean = true;
  isMumbai: boolean = false;
  isDelhi: boolean = false;


  constructor() {

   }

  _onSelect(index: number) {
    this.selectedValue = mainArray[index]
    this.isNashik = nashik.includes(mainArray[index]);
    this.isPune = pune.includes(mainArray[index]);
    this.isMumbai = mumbai.includes(mainArray[index]);
    this.isDelhi = delhi.includes(mainArray[index]);
  }
 
  _changeName(name: string): void{
    this.name = name
  }

}
