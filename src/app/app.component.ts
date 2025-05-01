import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from "./components/button/button.component";
import { SelectComponent } from "./components/select/select.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonComponent, SelectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'firstMacProject';
}
