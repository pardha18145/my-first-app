import { Component } from '@angular/core';
import { faLocation,
         faShop,
         faBoxes,
         faMoneyBill } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrl: './top-widgets.component.css'
})
export class TopWidgetsComponent {
  faLocation = faLocation;
  faShop = faShop;
  faBoxes = faBoxes;
  faMoneyBill = faMoneyBill;
}
