import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  @Input() title = 'Freedom';
  @Input() subtitle = 'Exploring the essence of liberty and autonomy';
  @Input() showScroll = true;
  @Input() ariaLabel = 'Hero section';

  scrollToContent(): void {
    // Get the hero section height to scroll past it
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
      const heroHeight = heroSection.clientHeight;
      window.scrollTo({
        top: heroHeight,
        behavior: 'smooth',
      });
    }
  }
}
