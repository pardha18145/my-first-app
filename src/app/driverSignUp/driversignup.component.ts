import { Component } from '@angular/core';

@Component({
  selector: 'driversignup',
  templateUrl: './driversignup.component.html',
  styleUrl: './driversignup.component.css'
})
export class DriverSignupComponent {
  full_name = 'Full Name';
  email = 'Email Address';
  phone = 'Phone Number';
  address = 'Address';
  driving_license_number = 'Driving License Number';
  vehicle_type = 'Vehicle Type';
  vehicle_registration_number = 'Vehicle Registration Number';
  vehicle_model_year = 'Vehicle Model/Year';
  insurance_info = 'Insurance Information';
  experience = 'Experience';
  emergency_contact_info = 'Emergency Contact Information';
  password = 'Password';
  confirm_password = 'Confirm Password';
}