import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { CustomerSignupComponent } from './customerSignUp/customersignup.component';
import { DriverSignupComponent } from './driverSignUp/driversignup.component';
import { VehicleSignupComponent } from './vehicleSignUp/vehiclesignup.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    CustomerSignupComponent,
    DriverSignupComponent,
    VehicleSignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
