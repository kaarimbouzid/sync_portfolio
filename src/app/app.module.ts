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
import { LottieComponent, LottieDirective } from 'ngx-lottie';
import { appConfig } from './app.config';
import { HomeModule } from './home/home.module';
import { HeroSectionComponent } from './home/hero-section/hero-section.component';
import { ClientsSectionComponent } from './home/clients-section/clients-section.component';
import { AboutUsSectionComponent } from './home/about-us-section/about-us-section.component';
import { WhyUsSectionComponent } from './home/why-us-section/why-us-section.component';

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
    WhyUsSectionComponent
  ],
  imports: [
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
    appConfig.providers
    // {
    //   provide: LocationStrategy,
    //   useClass: HashLocationStrategy, // oldOne: PathLocationStrategy
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
