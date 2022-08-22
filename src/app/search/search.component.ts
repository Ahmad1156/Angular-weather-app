import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 CityName:string='lebanon';
 @Output() value:EventEmitter<string>=new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.CityName=''
    },1000);
  }
  onSubmit():void {
     this.value.emit(this.CityName);
     this.CityName='';
  }

}
