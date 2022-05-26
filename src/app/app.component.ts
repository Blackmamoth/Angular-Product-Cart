import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentLink: string = 'products'

  onLinkChange(link: string) {
    this.currentLink = link
  }

}
