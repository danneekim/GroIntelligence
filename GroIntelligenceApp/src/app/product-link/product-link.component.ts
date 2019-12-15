import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import * as data from '../../assets/data/content.json';

@Component({
  selector: 'app-product-link',
  templateUrl: './product-link.component.html',
  styleUrls: ['./product-link.component.scss']
})

export class ProductLinkComponent implements OnInit {

  constructor(
    private httpService: HttpClient
  ) {}

  groData: string [];

  ngOnInit() {
    this.httpService.get('../../assets/data/content.json').subscribe(
      data => {
        this.groData = data as string [];
        console.log(this.groData);
      }
    )
  }

}
