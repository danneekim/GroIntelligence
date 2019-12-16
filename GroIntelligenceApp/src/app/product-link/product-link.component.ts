import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product-link',
  templateUrl: './product-link.component.html',
  styleUrls: ['./product-link.component.scss']
})

export class ProductLinkComponent implements OnInit {

  constructor(
    private httpService: HttpClient
  ) { }

  groData: Array<any>
  productsList: Array<any>;

  ngOnInit() {
    this.httpService.get('../../assets/data/content.json').subscribe(
      data => {
        this.groData = data as any[];
        this.groData.forEach(element => {
          if (element.label === 'Products' && element.subnavList) {
            let tempArray = element.subnavList
            this.productsList = tempArray;
          }
        })
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

}
