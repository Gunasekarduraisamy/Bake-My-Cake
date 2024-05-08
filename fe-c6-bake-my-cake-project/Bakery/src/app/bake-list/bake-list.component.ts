import { Component, OnInit } from '@angular/core';
import { Bake } from'../models/bake';
import { BakeService } from '../services/bake.service';

@Component({
  selector: 'app-bake-list',
  templateUrl: './bake-list.component.html',
  styleUrls: ['./bake-list.component.css']
})
export class BakeListComponent implements OnInit {
  
  constructor(private bakeServices: BakeService) {}

  bakes: Array<Bake> =[];
  
  cookies: string = "cookie";
  cakes: string = "cake";
  brownies: string = "brownie";
  all: string = "All"

  ngOnInit(): void {
    this.bakeServices.getAllBakes().subscribe({
      next : data => {
        this.bakes = data;
      },
      error : err =>{
        alert(err)
      }
    });
  }

  onSearch(searchText: string) {
    if (searchText === '') {
      this.bakes = this.bakes;
    }
    this.bakeServices.getAllBakes().subscribe((data) => {
      this.bakes = data.filter(bake => bake.bakeName?.toLowerCase().includes(searchText.toLowerCase()))
    })
  }

     onfilter() {
      this.bakeServices.getAllBakes().subscribe({
        next: data => {
          this.bakes = data;
        },
        error: err => {
          alert(err);
        }
      });
    }
    items(name: string) {
      this.bakeServices.getAllBakes().subscribe({
        next: (data) => {
          if (name || name !== ' ') {
            this.bakes = data.filter((product) =>product.categories?.includes(name)
            );
          } else {
            this.bakes = data;
          }
        },
        error: (error) => {
          alert('Something Error !! Please Try Again Later');
        },
      });
    }
     
  

}
