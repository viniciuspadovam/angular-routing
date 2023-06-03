import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) {
    // this.activeRoute.params.subscribe(res => console.log(res));
    this.activeRoute.firstChild?.params.subscribe(res => console.log(res));

    this.activeRoute.queryParams.subscribe(res => console.log(res));
  }

  ngOnInit(): void {
  }

}
