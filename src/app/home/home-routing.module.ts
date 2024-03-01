import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { WebServiceIntegrationComponent } from '../web-service-integration/web-service-integration.component';
import { WebDevComponent } from '../web-dev/web-dev.component';
import { PluginsOnDemandComponent } from '../plugins-on-demand/plugins-on-demand.component';
import { CmsDevComponent } from '../cms-dev/cms-dev.component';
import { MobileDevComponent } from '../mobile-dev/mobile-dev.component';
import { SeoCampaignsMarketingComponent } from '../seo-campaigns-marketing/seo-campaigns-marketing.component';
import { PrivacyComponent } from '../privacy/privacy.component';

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
      {
        path: 'plugins-on-demand',
        component: PluginsOnDemandComponent,
      },
      {
        path: 'cms-development',
        component: CmsDevComponent,
      },
      {
        path: 'mobile-development',
        component: MobileDevComponent,
      },
      {
        path: 'seo-campaigns-marketing',
        component: SeoCampaignsMarketingComponent,
      },
      {
        path: 'privacy',
        component: PrivacyComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
