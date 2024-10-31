import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestResultsComponent } from "./invest-results/invest-results.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestResultsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

  





}
