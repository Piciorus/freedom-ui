import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  @Input() title = 'Freedom';
  @Input() description =
    'A journey through the multifaceted concept of freedom - personal, political and philosophical.';
  @Input() projectName = 'Freedom Exploration Project';
  @Input() year = new Date().getFullYear();
}
