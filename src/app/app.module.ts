import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { CustomerSignupComponent } from './customerSignUp/customersignup.component';
import { DriverSignupComponent } from './driverSignUp/driversignup.component';
import { VehicleSignupComponent } from './vehicleSignUp/vehiclesignup.component';
import { FormsModule } from '@angular/forms';
import { ScatterPlotChartComponent } from './scatter-plot-chart/scatter-plot-chart.component';
import { BoxPlotChartComponent } from './box-plot-chart/box-plot-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { ChordChartComponent } from './chord-chart/chord-chart.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainComponent } from './main/main.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {path:'main',component:MainComponent},
  {path:'driversignup',component:DriverSignupComponent},
  {path:'customersignup',component:CustomerSignupComponent},
  {path:'vehiclesignup',component:VehicleSignupComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    CustomerSignupComponent,
    DriverSignupComponent,
    VehicleSignupComponent,
    ScatterPlotChartComponent,
    BoxPlotChartComponent,
    BubbleChartComponent,
    ChordChartComponent,
    HeaderComponent,
    SideNavComponent,
    MainComponent,
    TopWidgetsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
