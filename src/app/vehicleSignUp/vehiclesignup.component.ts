import { Component } from '@angular/core';

@Component({
  selector: 'vehiclesignup',
  templateUrl: './vehiclesignup.component.html',
  styleUrl: './vehiclesignup.component.css'
})
export class VehicleSignupComponent {
  vehicle_type = 'Vehicle Type';
  vehicle_registration_number = 'Vehicle Registration Number';
  vehicle_model_year = 'Vehicle Model/Year';
  insurance_info = 'Insurance Information';
  owner_name = 'Owner Name'
  owner_email = 'Owner Email';
  owner_phone = 'Owner Phone Number';
  password = 'Password';
  confirm_password = 'Confirm Password';
}