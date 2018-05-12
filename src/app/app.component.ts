import { Component, OnInit } from '@angular/core';

import { DataService } from './services/data.service';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data:Data[];
  options:any[];
  video:string;

  constructor(private dataService:DataService){ }

  onChange(value){
    this.dataService.getData().subscribe((data) => {
      if(value === 'All'){
        this.data = data;
      }
      else{
        this.data = data.filter(function(cards) {
          if (cards.category === value)
          return cards  
        })
      }
    });    
  }

  getVideo(url){
    return this.video = url;
  }

  ngOnInit(){
    this.dataService.getData().subscribe((data) => {
      this.data = data;
     
      let categories = data.map(data => data.category);
      
      this.options = (Array.from(new Set(categories)).sort());
    });
  }
}

interface Data{
  category:'string',
  description:'string',
  file:'string',
  thumbnail:'string',
  title:'string',
  type:'string'
}
