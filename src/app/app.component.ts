import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  allowButtonClick = false;

  isUsernameEmpty() {
    this.allowButtonClick = (this.username == "" ? false : true);
  }

  resetUsername() {
    this.username = '';
    this.allowButtonClick = false;
  }
}
