import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
})
export class ServerComponent{
    first_name = 'Pardha';
    last_name='Pallam';
    "hat_color"='black';
    "shoe_color" = 'brown';
}