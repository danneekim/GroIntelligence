import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-industry-link',
  templateUrl: './industry-link.component.html',
  styleUrls: ['./industry-link.component.scss']
})
export class IndustryLinkComponent implements OnInit {

  constructor(
    public httpService: HttpClient
  ) { }
  groData: Array<any>;
  industryList: Array<any>;
  industryLabel1: string = "";
  industryLabel2: string = "";
  industryLabel3: string = "";
  industryLabel4: string = "";

  ngOnInit() {
    this.httpService.get('../../assets/data/content.json').subscribe(
      data => {
        this.groData = data as any [];
        this.groData.forEach( element => {
          if(element.label === 'Industries'){
            this.industryList = element.subnavList;
          }
        })
        if(this.industryList != null){
          this.industryLabel1 = this.industryList[0].label;
          this.industryLabel2 = this.industryList[1].label;
          this.industryLabel3 = this.industryList[2].label;
          this.industryLabel4 = this.industryList[3].label;
        }
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
  

}
