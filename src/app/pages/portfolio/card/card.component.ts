import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private navegador: Router) { }

  ngOnInit(): void {
    // setInterval(() => this.navegador.navigate(['/']), 5000);
  }

  voltar() {
    this.navegador.navigate(['/']);
  }

  sendQueryParams() {
    this.navegador.navigate(['/params'], { queryParams: { token: '156156' } });
  }

}
