import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInputModal } from './user-input.modal';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {


constructor(private investmentService: InvestmentService) {}

  initialInvestment: string = '';
  annualInvestment: string = '';
  expectedReturn: string = '5';
  duration: string = '10';

  calculate() {

    this.investmentService.CalculateInvestmentResults({
      initialInvestment: Number(this.initialInvestment),
      annualInvestment: Number(this.annualInvestment),
      expectedReturn: Number(this.expectedReturn),
      duration: Number(this.duration),
    })
    
  }
}
