import { Component, inject, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-invest-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './invest-results.component.html',
  styleUrl: './invest-results.component.css'
})
export class InvestResultsComponent {

  private _investmentService = inject(InvestmentService);

  get investmentResults() {
    return this._investmentService.resultData;
  }
}
