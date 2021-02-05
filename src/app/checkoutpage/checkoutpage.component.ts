import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-checkoutpage',
  templateUrl: './checkoutpage.component.html',
  styleUrls: ['./checkoutpage.component.scss']
})
export class CheckoutpageComponent implements OnInit {

  item: any[];
  cartSummary: any;
  showCheckoutButton: any;
  shiptype = [{
    text: 'Pickup From Store',
    value: 'Store'
  }, {
    text: 'Deliver Online',
    value: 'shipping'
  }];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://run.mocky.io/v3/ca987707-db46-419e-9178-2bbdde3c3762')
      .subscribe(
        (data: any) => {
          this.item = data.cartDetails.cartItems;
          this.cartSummary = data.cartDetails.cartSummary;
          this.showCheckoutButton = data.showCheckoutButton;
        },
        (err) => { }
      );
  }

}
