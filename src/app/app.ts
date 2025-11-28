import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero.component';
import { SectionComponent } from './components/section.component';
import { QuoteComponent } from './components/quote.component';
import { GalleryComponent, GalleryItem } from './components/gallery.component';
import { FooterComponent } from './components/footer.component';
import { ImageSectionComponent, ImageData } from './components/image-section.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeroComponent,
    SectionComponent,
    QuoteComponent,
    GalleryComponent,
    FooterComponent,
    ImageSectionComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  freedomImages: ImageData[] = [
    {
      url: 'https://images.unsplash.com/photo-1484069560501-87d72b0c3669?w=800&h=600&fit=crop',
      alt: 'Person standing with arms raised on mountain peak, symbolizing freedom and achievement',
      caption: 'The freedom to explore and conquer new heights',
    },
    {
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      alt: 'Open landscape with endless sky representing limitless possibilities',
      caption: 'Boundless horizons and infinite possibilities',
    },
    {
      url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
      alt: 'Path through nature symbolizing the journey of freedom',
      caption: 'The path to self-discovery and liberation',
    },
    {
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      alt: 'Diverse group of people representing social freedom and equality',
      caption: 'Freedom through unity and diversity',
    },
    {
      url: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=800&h=600&fit=crop',
      alt: 'Books and learning materials representing intellectual freedom',
      caption: 'Knowledge as the foundation of freedom',
    },
    {
      url: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&h=600&fit=crop',
      alt: 'Bird soaring in open sky symbolizing ultimate freedom',
      caption: 'The universal symbol of liberation',
    },
  ];

  perspectivesItems: GalleryItem[] = [
    {
      title: 'Political Freedom',
      description:
        'The right to participate in civic life, express opinions and live without oppression. Democracy and human rights embody this dimension.',
      color: 'bg-gradient-to-br from-blue-500 to-blue-700',
      icon: '🗳️',
    },
    {
      title: 'Personal Autonomy',
      description:
        'The power to make choices about your own life, body and future. Self-determination and independence in thought and action.',
      color: 'bg-gradient-to-br from-purple-500 to-purple-700',
      icon: '🧭',
    },
    {
      title: 'Economic Liberty',
      description:
        'The ability to pursue opportunities, own property and build prosperity. Freedom from poverty and economic coercion.',
      color: 'bg-gradient-to-br from-green-500 to-green-700',
      icon: '💼',
    },
    {
      title: 'Intellectual Freedom',
      description:
        'The liberty to think, learn, create and express ideas without censorship or fear. Academic and artistic freedom.',
      color: 'bg-gradient-to-br from-yellow-500 to-orange-600',
      icon: '💡',
    },
    {
      title: 'Social Freedom',
      description:
        'The right to associate, communicate and build relationships freely. Freedom from discrimination and social constraints.',
      color: 'bg-gradient-to-br from-pink-500 to-pink-700',
      icon: '🤝',
    },
    {
      title: 'Spiritual Liberation',
      description:
        'Freedom of belief, conscience and inner peace. The journey toward self-actualization and transcendence.',
      color: 'bg-gradient-to-br from-indigo-500 to-indigo-700',
      icon: '🕊️',
    },
  ];
}
