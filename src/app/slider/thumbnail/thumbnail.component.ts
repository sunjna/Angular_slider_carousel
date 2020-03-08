import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
  @Input() currentArrayChild: any;
  @Output() imageClick = new EventEmitter<string>();
  constructor() { }
  ngOnInit(): void {
  }
  imageClicked(image) {
    this.imageClick.emit(image)
  }
}
