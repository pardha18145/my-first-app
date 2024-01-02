import { Component } from '@angular/core';

@Component({
  selector: 'customersignup',
  templateUrl: './customersignup.component.html',
  styleUrl: './customersignup.component.css'
})
export class CustomerSignupComponent {
    full_name = 'Full Name';
    email = 'Email Address';
    phone = 'Phone Number';
    address = 'Address';
    password = 'Password';
    confirm_password = 'Confirm Password';
}