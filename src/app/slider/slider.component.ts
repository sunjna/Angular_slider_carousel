import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Output() imageClickedSlider = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  firstCount = 0;
  lastCount = 2;
  imageJumbotron = "https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
  currentArray = [
    "https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg",
    "https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg",
    "https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
  ]
  imageArray = [
    "https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg",
    "https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg",
    "https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg",
    "https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg",
    "https://mdbootstrap.com/img/Photos/Slides/img%20(88).jpg", "https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg",
    "https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
  ]
  imageClick($event) {
    this.imageJumbotron = $event;
    this.imageClickedSlider.emit(this.imageJumbotron)
  }

  prevClick() {
    if (this.firstCount > 0) {
      this.firstCount--;
      this.lastCount--;

    }
    this.currentArray = this.imageArray.slice(this.firstCount, this.lastCount + 1)
  }

  nextClcik() {
    if (this.lastCount < 6) {
    this.firstCount++;
      this.lastCount++;
    }
    this.currentArray = this.imageArray.slice(this.firstCount, this.lastCount + 1)
  }

}
