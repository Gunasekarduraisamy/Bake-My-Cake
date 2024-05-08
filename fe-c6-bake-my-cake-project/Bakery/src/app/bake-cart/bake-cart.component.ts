import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bake } from '../models/bake';
import { BakeRequest } from '../models/bake-request';
import { BakeService } from '../services/bake.service';
import { BakeRequestService } from '../services/bake-request.service';
import { RouteService } from '../services/route.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-bake-cart',
  templateUrl: './bake-cart.component.html',
  styleUrls: ['./bake-cart.component.css']
})
export class BakeCartComponent implements OnInit{
  bake?:Bake;
  bakeRequest: BakeRequest ={};
  submitStatus: boolean = false;
  stars: Array<number>=[];

  maxDate: Date = new Date(); // Set maxDate to the current date
  isFutureDate(date: any): boolean {
    const currentDate = new Date();
    return date > currentDate;
  }

constructor(private activatedRoute: ActivatedRoute,
  private bakeService: BakeService,
  private bakeRequestService: BakeRequestService,
  private routeService: RouteService,
  private snackBar: MatSnackBar) {}

  canDeactivate() {
    if (!this.submitStatus)
        this.submitStatus = confirm("You have not submitted a request to make cake. Any details entered will be lost. Are you sure you want to leave?");
    return this.submitStatus;
}

  


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param =>{
      let id = param.get("id") ?? "";
      this.bakeService.getBake(id).subscribe(data => {
        this.bake = data;
        this.stars = new Array(this.bake.rating);
        this.submitStatus = false;
      })
    })
  }
  makeRequest() {
    if(this.bakeRequest.customerName && this.bakeRequest.customerEmail && this.bakeRequest.quantity && this.bake?.price && this.bakeRequest.customerPhone && this.bakeRequest.dateOfCake){
      this.bakeRequest.bakeName = this.bake?.bakeName;
      
       this.bakeRequest.totalPrice = this.bake.price* this.bakeRequest?.quantity;

        this.bakeRequestService.saveBakeRequest(this.bakeRequest).subscribe({
        next: data => {
            this.snackBar.open("Request Submitted", " totalBillAmount "+ this.calculateTotalAmount() , {
            duration: 3000
            });
            this.submitStatus = true;
            this.routeService.navigateToHomeView();
        },
        error: err => {
            alert(err);
        }
        });

    }
  }
 
  calculateTotalAmount(): number{
    if (this.bake && this.bake.price &&  this.bakeRequest.quantity) {
      if(this.bakeRequest?.quantity>0){
      return this.bake.price * this.bakeRequest.quantity;
    }
  }
    return 0;
  }
  
  

}
