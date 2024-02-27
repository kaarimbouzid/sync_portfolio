import { Component } from '@angular/core';
import { Portfolio } from 'src/app/shared/interfaces/portfolio';
import { PORTFOLIOS } from 'src/app/shared/portfolio';

@Component({
  selector: 'portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss']
})
export class PortfolioSectionComponent {
  portfolios: Portfolio[] = PORTFOLIOS;
}
