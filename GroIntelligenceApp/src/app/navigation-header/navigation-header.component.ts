import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.scss']
})

export class NavigationHeaderComponent implements OnInit {

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
  }

  navigateToProducts(){
    this.router.navigate(['/products'])
  }

  navigateToIndustries(){
    this.router.navigate(['/industries'])
  }

}
