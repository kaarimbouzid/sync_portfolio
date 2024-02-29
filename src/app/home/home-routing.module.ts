import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { WebServiceIntegrationComponent } from '../web-service-integration/web-service-integration.component';
import { WebDevComponent } from '../web-dev/web-dev.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'portfolio-details/:id',
        component: PortfolioDetailsComponent,
      },
      {
        path: 'web-service-integration',
        component: WebServiceIntegrationComponent,
      },
      {
        path: 'web-development',
        component: WebDevComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
