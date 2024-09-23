import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit{
  constructor(
    private meta: Meta,
    private translateService: TranslateService
  ) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit(): void {
    this.translateService.get('contact_meta_description').subscribe((description: string) => {
      this.meta.updateTag({ name: 'description', content: description });
    });
  }


}
