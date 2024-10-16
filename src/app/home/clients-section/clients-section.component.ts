import { Component } from '@angular/core';

@Component({
  selector: 'clients-section',
  templateUrl: './clients-section.component.html',
  styleUrls: ['./clients-section.component.scss']
})
export class ClientsSectionComponent {
  images = [
    { id:"1", title:"TRS UK", src: 'assets/img/clients/trs.webp', alt: 'TRS UK' },
    { id:"2", title:"Print Smarter", src: 'assets/img/clients/printsmarter.webp', alt: 'Print Smarter' },
    { id:"3", title:"Gazradon Quebec", src: 'assets/img/clients/Gazradonquebec_LOGO.webp', alt: 'Gazradon Quebec' },
    { id:"4", title:"SHOTZ", src: 'assets/img/clients/SHOTZ_LOGO.webp', alt: 'SHOTZ' },
    { id:"5", title:"KlavKarr", src: 'assets/img/clients/kk.webp', alt: 'KlavKarr' },
    { id:"6", title:"Meedusa", src: 'assets/img/clients/meedusa.webp', alt: 'meedusa' },
    { id:"7", title:"Mynthuset", src: 'assets/img/clients/Mynthuset.webp', alt: 'Mynthuset' },
    { id:"8", title:"Nilo", src: 'assets/img/clients/nilo.webp', alt: 'nilo' },
    { id:"9", title:"Kreativ", src: 'assets/img/clients/kreativ.webp', alt: 'kreativ' },
    { id:"10", title:"Drahtseil", src: 'assets/img/clients/Drahtseil.webp', alt: 'Drahtseil'},
  ];
}
