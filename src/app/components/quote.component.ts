import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quote',
  imports: [CommonModule],
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent {
  @Input() text = '';
  @Input() author = '';
  @Input() context = '';
  @Input() backgroundColor = 'bg-gray-50';
}
