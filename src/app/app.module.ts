import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioDetailsComponent } from './home/portfolio-details/portfolio-details.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LottieComponent, LottieDirective, provideLottieOptions } from 'ngx-lottie'; 
import { HomeModule } from './home/home.module';
import { HeroSectionComponent } from './home/hero-section/hero-section.component';
import { ClientsSectionComponent } from './home/clients-section/clients-section.component';
import { AboutUsSectionComponent } from './home/about-us-section/about-us-section.component';
import { WhyUsSectionComponent } from './home/why-us-section/why-us-section.component';
import { ServicesSectionComponent } from './home/services-section/services-section.component';
import { CtaSectionComponent } from './home/cta-section/cta-section.component';
import { PortfolioSectionComponent } from './home/portfolio-section/portfolio-section.component';
import { TeamSectionComponent } from './home/team-section/team-section.component';
import { FAQSectionComponent } from './home/faq-section/faq-section.component';
import { ContactSectionComponent } from './home/contact-section/contact-section.component';
import { TrustBoxSectionComponent } from './home/trust-box-section/trust-box-section.component';
import { WebServiceIntegrationComponent } from './web-service-integration/web-service-integration.component';
import { WebDevComponent } from './web-dev/web-dev.component';
import { PluginsOnDemandComponent } from './plugins-on-demand/plugins-on-demand.component';
import { CmsDevComponent } from './cms-dev/cms-dev.component';
import { MobileDevComponent } from './mobile-dev/mobile-dev.component';
import { SeoCampaignsMarketingComponent } from './seo-campaigns-marketing/seo-campaigns-marketing.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { BlogspotComponent } from './blogspot/blogspot.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import {NgcCookieConsentModule, NgcCookieConsentConfig} from 'ngx-cookieconsent';

const cookieConfig:NgcCookieConsentConfig = {
  "cookie": {
    "domain": 'https://www.sync.tn/'
  },
  "position": "bottom-left",
  "theme": "block",
  "palette": {
    "popup": {
      "background": "#464c80",
      "text": "#ffffff",
      "link": "#ffffff"
    },
    "button": {
      "background": "#292c45",
      "text": "#ffffff",
      "border": "transparent"
    }
  },
  "type": "info",
  "content": {
    "message": "This website uses cookies to ensure you get the best experience on our website.",
    "dismiss": "Got it!",
    "deny": "Refuse cookies",
    "link": "Learn more",
    "href": "https://www.sync.tn/terms-and-conditions",
    "policy": "Cookie Policy"
  }
};

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PortfolioDetailsComponent,
    HeroSectionComponent,
    ClientsSectionComponent,
    AboutUsSectionComponent,
    WhyUsSectionComponent,
    ServicesSectionComponent,
    CtaSectionComponent,
    PortfolioSectionComponent,
    TeamSectionComponent,
    FAQSectionComponent,
    ContactSectionComponent,
    TrustBoxSectionComponent,
    WebServiceIntegrationComponent,
    WebDevComponent,
    PluginsOnDemandComponent,
    CmsDevComponent,
    MobileDevComponent,
    SeoCampaignsMarketingComponent,
    PrivacyComponent,
    TermsConditionComponent,
    BlogspotComponent,
    ContactPageComponent
  ],
  imports: [
    NgcCookieConsentModule.forRoot(cookieConfig),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule,
    BrowserAnimationsModule,
    LottieComponent,
    LottieDirective,
    HomeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    provideLottieOptions({
      player: () => import('lottie-web'),
    }),
    // {
    //   provide: LocationStrategy,
    //   useClass: HashLocationStrategy, // oldOne: PathLocationStrategy
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
