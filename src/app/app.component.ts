import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jumbotronImage = "https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
  title = 'angularProject';
  imageClickedSlider($event) {
    this.jumbotronImage = $event
  }
}
