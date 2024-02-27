import { Component } from '@angular/core';

@Component({
  selector: 'clients-section',
  templateUrl: './clients-section.component.html',
  styleUrls: ['./clients-section.component.scss']
})
export class ClientsSectionComponent {
  images = [
    { id:"1", title:"TRS UK", src: 'assets/img/clients/trs.png', alt: 'TRS UK' },
    { id:"2", title:"Print Smarter", src: 'assets/img/clients/printsmarter.png', alt: 'Print Smarter' },
    { id:"3", title:"Gazradon Quebec", src: 'assets/img/clients/Gazradonquebec_LOGO.png', alt: 'Gazradon Quebec' },
    { id:"4", title:"SHOTZ", src: 'assets/img/clients/SHOTZ_LOGO.png', alt: 'SHOTZ' },
    { id:"5", title:"KlavKarr", src: 'assets/img/clients/kk.png', alt: 'KlavKarr' },
  ];
}
