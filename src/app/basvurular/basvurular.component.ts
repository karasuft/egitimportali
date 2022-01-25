import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basvurular',
  templateUrl: './basvurular.component.html',
  styleUrls: ['./basvurular.component.css']
})
export class BasvurularComponent implements OnInit {

  constructor() { }

  email:string ="";
  numara:Number = 0;

  ngOnInit(): void {
  }
  Sonuc(d:string){
    console.log(d);
  }

}
