import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Perk {
  icon: string;
  title: string;
}

interface Review {
  name: string;
  role: string;
  company: string;
  review: string;
  rating: number;
  image: string;
  index: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
})
export class Home {
  appName: string = 'Draftbox';
  
  perks: Perk[] = [
    {
      icon: '/icons/heroicons/apps.svg',
      title: 'New App Templates',
    },
    {
      icon: '/icons/heroicons/SupportOutline.svg',
      title: 'Support & Assistance',
    },
    {
      icon: '/icons/heroicons/PlusCircleOutline.svg',
      title: 'Screen Creation',
    },
    {
      icon: '/icons/heroicons/code.svg',
      title: 'AI Generated Code',
    },
    {
      icon: '/icons/heroicons/gpt.svg',
      title: 'Image Generation',
    },
  ];
  
  experts: string[] = [
    'UI/UX Design',
    'App Development',
    'AI Integration',
    'App Testing',
    'App Deployment',
    'REST API & SDKs',
    'Backend integrations',
    'Coaching sessions',
    'Project guidance',
  ];
  
  reviews: Review[] = [
    {
      name: 'Alex R.',
      role: 'CEO of Appify',
      company: 'Appify',
      review:
        'Draftbox is an incredible app builder that streamlines development with AI-powered features, templates, and expert guidance. Highly recommended!',
      rating: 5,
      image: '/images/avatar-01.png',
      index: 0,
    },
    {
      name: 'Tedd M.',
      role: 'CTO',
      company: 'TechStart',
      review:
        'The AI capabilities and intuitive interface have transformed how we build apps. Our development time has been cut in half!',
      rating: 5,
      image: '/images/avatar-02.png',
      index: 1,
    },
    {
      name: 'Michaella P.',
      role: 'Lead Developer',
      company: 'DevCorp',
      review:
        'As a developer, I appreciate how Draftbox combines powerful features with ease of use. The templates are a huge time-saver.',
      rating: 5,
      image: '/images/avatar-03.png',
      index: 2,
    },
    {
      name: 'Jennifer K.',
      role: 'Product Manager',
      company: 'InnovateLabs',
      review:
        'Draftbox has become an essential tool for our team. The expert guidance and support have been invaluable for our projects.',
      rating: 5,
      image: '/images/avatar-04.png',
      index: 3,
    },
    {
      name: 'David W.',
      role: 'Founder',
      company: 'AppWorks',
      review:
        'The platform exceeded our expectations. From design to deployment, Draftbox provides everything needed for modern app development.',
      rating: 5,
      image: '/images/avatar-05.png',
      index: 4,
    },
  ];
  
  activeIndex: number = 0;
  
  nextReview(): void {
    this.activeIndex++;
    if (this.activeIndex >= this.reviews.length) {
      this.activeIndex = 0;
    }
  }
  
  prevReview(): void {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
  }
}
