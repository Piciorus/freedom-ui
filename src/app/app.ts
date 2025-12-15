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
      url: 'https://miro.medium.com/1*_e79nsDiGQlGJKpkZI9eHA.png',
      alt: 'Person standing with arms raised on mountain peak, symbolizing freedom and achievement',
      caption: 'The freedom to explore and conquer new heights',
    },
    {
      url: 'https://static.vecteezy.com/system/resources/thumbnails/002/170/368/small/the-freedom-of-a-bird-leaving-its-cage-vector.jpg',
      alt: 'Open landscape with endless sky representing limitless possibilities',
      caption: 'Boundless horizons and infinite possibilities',
    },
    {
      url: 'https://storage.googleapis.com/pod_public/1300/73367.jpg',
      alt: 'Path through nature symbolizing the journey of freedom',
      caption: 'The path to self-discovery and liberation',
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2H175fBkMFyrnHxJxmV_qc9WoXYlXb0TnNQ&s',
      alt: 'Diverse group of people representing social freedom and equality',
      caption: 'Freedom through unity and diversity',
    },
    {
      url: 'https://i.ytimg.com/vi/FEqFp0q60-U/maxresdefault.jpg',
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
    },
    {
      title: 'Personal Autonomy',
      description:
        'The power to make choices about your own life, body and future. Self-determination and independence in thought and action.',
      color: 'bg-gradient-to-br from-purple-500 to-purple-700',
    },
    {
      title: 'Economic Liberty',
      description:
        'The ability to pursue opportunities, own property and build prosperity. Freedom from poverty and economic coercion.',
      color: 'bg-gradient-to-br from-green-500 to-green-700',
    },
    {
      title: 'Intellectual Freedom',
      description:
        'The liberty to think, learn, create and express ideas without censorship or fear. Academic and artistic freedom.',
      color: 'bg-gradient-to-br from-yellow-500 to-orange-600',
    },
    {
      title: 'Social Freedom',
      description:
        'The right to associate, communicate and build relationships freely. Freedom from discrimination and social constraints.',
      color: 'bg-gradient-to-br from-pink-500 to-pink-700',
    },
    {
      title: 'Spiritual Liberation',
      description:
        'Freedom of belief, conscience and inner peace. The journey toward self-actualization and transcendence.',
      color: 'bg-gradient-to-br from-indigo-500 to-indigo-700',
    },
  ];
}
