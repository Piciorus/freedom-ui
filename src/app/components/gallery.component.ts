import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface GalleryItem {
  title: string;
  description: string;
  color: string;
}

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  @Input() title = '';
  @Input() items: GalleryItem[] = [];
  @Input() id = '';
}
