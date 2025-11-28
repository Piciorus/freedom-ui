import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section',
  imports: [CommonModule],
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent {
  @Input() title = '';
  @Input() backgroundColor = 'bg-white';
  @Input() titleColor = 'text-gray-900';
  @Input() textColor = 'text-gray-700';
  @Input() id = '';
}
