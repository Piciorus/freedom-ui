import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ImageData {
  url: string;
  alt: string;
  caption?: string;
}

@Component({
  selector: 'app-image-section',
  imports: [CommonModule],
  templateUrl: './image-section.component.html',
  styleUrls: ['./image-section.component.css'],
})
export class ImageSectionComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() images: ImageData[] = [];
}
