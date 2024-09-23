import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { WebServiceIntegrationComponent } from '../web-service-integration/web-service-integration.component';
import { WebDevComponent } from '../web-dev/web-dev.component';
import { PluginsOnDemandComponent } from '../plugins-on-demand/plugins-on-demand.component';
import { MobileDevComponent } from '../mobile-dev/mobile-dev.component';
import { SeoCampaignsMarketingComponent } from '../seo-campaigns-marketing/seo-campaigns-marketing.component';
import { PrivacyComponent } from '../privacy/privacy.component';
import { TermsConditionComponent } from '../terms-condition/terms-condition.component';
import { BlogspotComponent } from '../blogspot/blogspot.component';
import { ContactPageComponent } from '../contact-page/contact-page.component';
import { CmsDevComponent } from '../cms-dev/cms-dev.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'portfolio-details/:name',
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
      {
        path: 'terms-and-conditions',
        component: TermsConditionComponent,
      },
      {
        path: 'blogspot',
        component: BlogspotComponent,
      },
      {
        path: 'contact',
        component: ContactPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
