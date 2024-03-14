import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { take } from 'rxjs';

@Component({
  selector: 'time-filter',
  templateUrl: './time-filter.component.html',
  styleUrls: ['./time-filter.component.css']
})
export class TimeFilterComponent {


  times: Times[] = [{label: "Manhã", time:"06:00 ás 12:00"}, {label: "Tarde", time:"12:01 ás 18:00"}, 
  {label: "Noite", time:"18:01 ás 23:00"}]


  clearFilter(){
    var radioElement = document.getElementsByName("labels");
    radioElement.forEach((element) => {
      console.log(element);
      
    });
    
    
  }
}

export class Times {
  label: string;
  time: string;

  constructor(label: string, time: string){
    this.label = label;
    this.time = time;
  }
}
