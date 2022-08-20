import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewshome',
  templateUrl: './viewshome.component.html',
  styleUrls: ['./viewshome.component.css']
})
export class ViewshomeComponent implements OnInit {
  data = [
    {value : 22 , label : '# users'},
    {value : 20 , label : '# name'},
    {value : 18 , label : '# age'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
