import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css'],
})
export class BuyTicketComponent implements OnInit {
  fakeArray: any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.fakeArray = new Array(
      parseInt(this.router.url.substring(this.router.url.indexOf('F') + 1))
    );
  }
}
