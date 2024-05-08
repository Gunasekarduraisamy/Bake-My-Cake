import { Component, OnInit, ViewChild, } from '@angular/core';
import {BakeRequest} from '../models/bake-request';
import { BakeRequestService} from '../services/bake-request.service';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-bake-requests',
  templateUrl: './bake-requests.component.html',
  styleUrls: ['./bake-requests.component.css']
})
export class BakeRequestsComponent implements OnInit {
  displayedColumns: string[] = ['dateOfCake',
  'customerName',
  'customerEmail',
  'customerPhone',
  'quantity',
  'state',
  'pincode',
  'totalBillAmount'];
  bakeRequests: BakeRequest[] =[];
  router: any;
  dataSource: any;
  constructor(private bakeRequestService: BakeRequestService) {}

  @ViewChild(MatSort) sort: MatSort | undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;


  
  ngOnInit(): void {
    this.bakeRequestService.getAllBakeRequests().subscribe({
      next: data => {
        this.bakeRequests = data;
         this.dataSource = new MatTableDataSource(this.bakeRequests);
         this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        console.log(data);
      },
      error: err => {
        alert(err);
      }
    });
  }

}


