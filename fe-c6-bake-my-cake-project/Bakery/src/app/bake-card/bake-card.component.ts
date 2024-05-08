import { Component, Input, OnInit } from '@angular/core';
import { Bake } from'../models/bake';

@Component({
  selector: 'app-bake-card',
  templateUrl: './bake-card.component.html',
  styleUrls: ['./bake-card.component.css']
})
export class BakeCardComponent implements OnInit {

  @Input()
  bake!:Bake
  canDeactivateFn: any;
  constructor() {}
  ngOnInit(): void{
    
  }

}
