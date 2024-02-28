import { Component } from '@angular/core';

@Component({
  selector: 'customersignup',
  templateUrl: './customersignup.component.html',
  styleUrl: './customersignup.component.css',
  styles : [`

  `]
})
export class CustomerSignupComponent {
    full_name = '';
    gender = 'Gender';
    options = ['Male', 'Female'];
    email = '';
    phone = '';
    address = '';
    password = '';
    confirm_password = '';
    selectedOption = 'Male';
    submit_message='';
    submitClicked=false;
    suitableBorderRadius = '5px';
    serverStatus : string = 'offline';
    onLoadForFullName : boolean;
    onLoadForEmail : boolean;
    onLoadForPhone: boolean;
    onLoadForAddress: boolean;
    onLoadForPassword: boolean;
    onLoadForConfirmPassword: boolean;
    customers : any[] = [];

    commonStyles = {
      'border': '1px solid',
      'border-radius': '5px',
      'outline': 'none',
    };



    ngOnInit(): void {
      // Set the variable to true when the component is loaded
      this.onLoadForEmail = true;
      this.onLoadForPhone = true;
      this.onLoadForAddress = true;
      this.onLoadForPassword = true;
      this.onLoadForConfirmPassword = true;
      this.onLoadForFullName=true;
    }

    onClickForFullName(){
      return this.onLoadForFullName=false;
    }
    onClickForEmail(){
      return this.onLoadForEmail=false;
    }
    onClickForPhone(){
      return this.onLoadForPhone=false;
    }
    onClickForAddress(){
      return this.onLoadForAddress=false;
    }
    onClickForPassword(){
      return this.onLoadForPassword=false;
    }
    onClickForConfirmPassword(){
      return this.onLoadForConfirmPassword=false;
    }

    applyStylingForFullName() {

      return this.full_name === '' ? 
      { ...this.commonStyles, 'border-color': 'red' } :
      { ...this.commonStyles, 'border-color': 'green' };
    }

    applyStylingForEmail() {
      return this.email === '' ? 
      { ...this.commonStyles, 'border-color': 'red' } :
      { ...this.commonStyles, 'border-color': 'green' };
    }
  
    onOptionChange(option){
      this.selectedOption = option;
    }

    giveStylingForPhone(){
      return this.phone === '' ?
        { ...this.commonStyles, 'border-color': 'red' } :
        { ...this.commonStyles, 'border-color': 'green' };
    }

    giveStylingForAddress(){
        return this.address === '' ?
          { ...this.commonStyles, 'border-color': 'red' } :
          { ...this.commonStyles, 'border-color': 'green' };
    }

    giveStylingForPassword(){
      return this.password === '' ?
        { ...this.commonStyles, 'border-color': 'red' } :
        { ...this.commonStyles, 'border-color': 'green' };
    }

    giveStylingForConfirmPassword(){
      return this.confirm_password === '' ?
        { ...this.commonStyles, 'border-color': 'red' } :
        { ...this.commonStyles, 'border-color': 'green' };
    }

    giveSuitableRadius(){
      return this.suitableBorderRadius;
    }

    areAllFieldsContainingText(){
      return ( 
        this.full_name !== '' &&
        this.email !== '' &&
        this.phone !== '' &&
        this.address !== '' &&
        this.password !== '' &&
        this.confirm_password !== ''
      );
    }

    isAtleastOneFieldContainingText(){
      return (
        this.full_name !== '' ||
        this.email !== '' ||
        this.phone !== '' ||
        this.address !== '' ||
        this.password !== '' ||
        this.confirm_password !== ''
      );
    }

    onUpdateFullName(event){
      console.log(event);
      this.full_name = event.target.value;
      console.log(this.full_name);
      
    }

    onSubmit(){
      this.submitClicked=true;
      this.submit_message='submit message';
      this.customers.push({
        'Full Name' : this.full_name,
        'Email' : this.email,
        'Phone' : this.phone,
        'Address' : this.address,
        'Password' : this.password,
        'Confirm Password' : this.confirm_password
      });
      console.log(this.customers);
      
    }

    onReset(){
      this.submit_message='';
      this.full_name='';
      this.email='';
      this.address='';
      this.phone='';
      this.password='';
      this.confirm_password='';
      this.submitClicked=false;
    }
}