import sample1 from '@/assets/sample1.jpg';
import sample2 from '@/assets/sample2.jpg';
import sample3 from '@/assets/sample3.jpg';
import sample4 from '@/assets/sample4.jpg';
import sample5 from '@/assets/sample5.jpg';
import sample6 from '@/assets/sample6.jpg';
import sample7 from '@/assets/sample7.jpg';
import sample8 from '@/assets/sample8.jpg';

export interface MediaItem {
  id: string;
  file: {
    name: string;
    size: number;
    type: string;
  };
  url: string;
  type: 'image' | 'video';
  uploadDate: Date;
  title: string;
  author: string;
  likes: number;
  downloads: number;
}

export const sampleMediaItems: MediaItem[] = [
  {
    id: '1',
    file: { name: 'mountain-lake-sunset.jpg', size: 2847392, type: 'image/jpeg' },
    url: sample1,
    type: 'image',
    uploadDate: new Date('2024-01-15'),
    title: 'Mountain Lake at Golden Hour',
    author: 'NaturePhotographer',
    likes: 234,
    downloads: 89
  },
  {
    id: '2',
    file: { name: 'modern-living-room.jpg', size: 1923847, type: 'image/jpeg' },
    url: sample2,
    type: 'image',
    uploadDate: new Date('2024-01-12'),
    title: 'Minimalist Interior Design',
    author: 'DesignStudio',
    likes: 156,
    downloads: 67
  },
  {
    id: '3',
    file: { name: 'fresh-vegetables.jpg', size: 2156789, type: 'image/jpeg' },
    url: sample3,
    type: 'image',
    uploadDate: new Date('2024-01-10'),
    title: 'Farm Fresh Organic Produce',
    author: 'FoodieChef',
    likes: 189,
    downloads: 45
  },
  {
    id: '4',
    file: { name: 'streetwear-portrait.jpg', size: 1876543, type: 'image/jpeg' },
    url: sample4,
    type: 'image',
    uploadDate: new Date('2024-01-08'),
    title: 'Urban Fashion Editorial',
    author: 'StyleShooter',
    likes: 312,
    downloads: 123
  },
  {
    id: '5',
    file: { name: 'abstract-digital-art.jpg', size: 2234567, type: 'image/jpeg' },
    url: sample5,
    type: 'image',
    uploadDate: new Date('2024-01-05'),
    title: 'Digital Abstract Expression',
    author: 'DigitalArtist',
    likes: 278,
    downloads: 98
  },
  {
    id: '6',
    file: { name: 'coffee-shop-latte.jpg', size: 1987654, type: 'image/jpeg' },
    url: sample6,
    type: 'image',
    uploadDate: new Date('2024-01-03'),
    title: 'Perfect Latte Art',
    author: 'CoffeeExplorer',
    likes: 167,
    downloads: 56
  },
  {
    id: '7',
    file: { name: 'ancient-castle-hill.jpg', size: 2345678, type: 'image/jpeg' },
    url: sample7,
    type: 'image',
    uploadDate: new Date('2024-01-01'),
    title: 'Medieval Castle Landscape',
    author: 'TravelCapturer',
    likes: 203,
    downloads: 78
  },
  {
    id: '8',
    file: { name: 'golden-retriever-flowers.jpg', size: 2098765, type: 'image/jpeg' },
    url: sample8,
    type: 'image',
    uploadDate: new Date('2023-12-28'),
    title: 'Happy Dog in Flower Field',
    author: 'PetPhotographer',
    likes: 445,
    downloads: 167
  },
  {
    id: '9',
    file: {
      name: 'anime-style-wallpaper.jpg',
      size: 2098765,
      type: 'image/jpeg'
    },
    url: 'https://chatgpt.com/backend-api/public_content/enc/eyJpZCI6Im1fNjg3M2Q4YTk0MWYwODE5MTk1YTlkMmQyZmJkNTQ0NWI6ZmlsZV8wMDAwMDAwMDkxMGM2MWY2OWU1Yjg5ZGIzMmUyMGE5YyIsInRzIjoiNDg2Nzg1IiwicCI6InB5aSIsInNpZyI6ImJhNTY4ODY2ZmE0NWY4YjJkN2QzNjA3MzA2ZmUwMDdhOGQxYTRjZmM4NjdmNjgzZGNlZGU2NmFjZDkwNjFlNmMiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsfQ==',
    type: 'image',
    uploadDate: new Date('2023-12-28'),
    title: 'Anime Style Wallpaper',
    author: 'wallos',
    likes: 445,
    downloads: 167
  },
  {
    id: '9',
    file: {
      name: 'lord-shiva-wallpaper.jpg',
      size: 2098765,
      type: 'image/jpeg'
    },
    url: 'https://i.postimg.cc/SxfSHTSC/Whats-App-Image-2025-07-14-at-23-27-47-380eaeb3.jpg',
    type: 'image',
    uploadDate: new Date('2023-12-28'),
    title: 'lord-shiva-wallpaper',
    author: 'wallos',
    likes: 445,
    downloads: 167
  },
  {
    id: '11',
    file: {
      name: 'WhatsApp-Image-2025-07-14-at-23-33-39.jpg',
      size: 2098765, // approximate size in bytes
      type: 'image/jpeg'
    },
    url: 'https://i.postimg.cc/s2JM9fGF/Whats-App-Image-2025-07-14-at-23-38-29-a1ee0d33.jpg',
    type: 'image',
    uploadDate: new Date('2025-07-14'),
    title: 'Lord Shiva Cosmic Art',
    author: 'wallos',
    likes: 999,
    downloads: 400
  },
  {
    id: '12',
    file: {
      name: 'Lord-Shiva-Cosmic-Art.jpg',
      size: 2098765,
      type: 'image/jpeg'
    },
    url: 'https://i.postimg.cc/SNt7CdFL/Whats-App-Image-2025-07-14-at-23-33-39-3b7f2bc7.jpg',
    type: 'image',
    uploadDate: new Date('2025-07-14'),
    title: 'Lord Shiva Cosmic Art',
    author: 'wallos',
    likes: 999,
    downloads: 600
  },
  {
    id: '13',
    file: {
      name: 'images',
      size: 2098765, // approximate size in bytes
      type: 'image/jpeg'
    },
    url: 'https://i.postimg.cc/44zZFfwd/e99cefce-2a3f-4aea-9375-e2d117cf6932.png',
    type: 'image',
    uploadDate: new Date('2025-07-14'),
    title: 'Sand picture',
    author: 'wallos',
    likes: 778,
    downloads: 600
  },
  {
    id: '15',
    file: {
      name: 'images',
      size: 2098765, // approximate size in bytes
      type: 'image/jpeg'
    },
    url: 'https://i.postimg.cc/63P7j9hz/217d4351-e607-4166-8a5c-53d34efb66ae.png',
    type: 'image',
    uploadDate: new Date('2025-07-14'),
    title: 'Moon',
    author: 'wallos',
    likes: 300,
    downloads: 700
  },
  {
    id: '16',
    file: {
      name: 'images',
      size: 2098765, // approximate size in bytes
      type: 'image/jpeg'
    },
    url: 'https://i.postimg.cc/L5Tjydns/8336b7ef-dfa6-466f-95c2-2b187aa941f1-1.png',
    type: 'image',
    uploadDate: new Date('2025-07-14'),
    title: 'Temple photo',
    author: 'wallos',
    likes: 500,
    downloads: 900
  },
  {
    id: '17',
    file: {
      name: 'images',
      size: 2098765, // approximate size in bytes
      type: 'image/jpeg'
    },
    url: 'https://i.postimg.cc/4xrHQ4B5/2d2408f3-41d6-4166-a553-e3334458e6c3.png',
    type: 'image',
    uploadDate: new Date('2025-07-14'),
    title: 'Hands photo',
    author: 'wallos',
    likes: 700,
    downloads: 450
  },
  {
    id: '18',
    file: {
      name: 'images',
      size: 2098765, // approximate size in bytes
      type: 'image/jpeg'
    },
    url: 'https://i.postimg.cc/c12WHKHX/8b24fe17-71b4-42bd-857d-fa3301168aa7.png',
    type: 'image',
    uploadDate: new Date('2025-07-14'),
    title: 'Hands Ai arts',
    author: 'wallos',
    likes: 700,
    downloads: 450
  },
  {
    id: '19',
    file: {
      name: 'images',
      size: 2098765, // approximate size in bytes
      type: 'image/jpeg'
    },
    url: 'https://i.postimg.cc/6qwm2Nk6/2df64d41-2c63-45be-b46d-a50a8a10fe29.png',
    type: 'image',
    uploadDate: new Date('2025-07-14'),
    title: 'Chess Ai arts',
    author: 'wallos',
    likes: 756,
    downloads: 400
  },
  {
    id: '20',
    file: {
      name: 'images',
      size: 2098765, // approximate size in bytes
      type: 'image/jpeg'
    },
    url: 'https://i.postimg.cc/zBDhVtdZ/Chat-GPT-Image-Jul-22-2025-10-37-22-AM.png',
    type: 'image',
    uploadDate: new Date('2025-07-14'),
    title: 'King',
    author: 'wallos',
    likes: 756,
    downloads: 460
  },
  {
    id: '21',
    file: {
      name: 'images',
      size: 2098765, // approximate size in bytes
      type: 'image/jpeg'
    },
    url: 'https://i.postimg.cc/tTg1X1T9/Chat-GPT-Image-Jul-22-2025-10-39-16-AM.png',
    type: 'image',
    uploadDate: new Date('2025-07-14'),
    title: 'Horse',
    author: 'wallos',
    likes: 456,
    downloads: 320
  },
  {
    id: '22',
    file: {
      name: 'images',
      size: 2098765, // approximate size in bytes
      type: 'image/jpeg'
    },
    url: 'https://i.postimg.cc/QM8kvk2t/Chat-GPT-Image-Jul-22-2025-10-41-00-AM.png',
    type: 'image',
    uploadDate: new Date('2025-07-14'),
    title: 'Horse',
    author: 'wallos',
    likes: 667,
    downloads: 343
  },
  {
    id: '23',
    file: {
      name: 'images',
      size: 2098765, // approximate size in bytes
      type: 'image/jpeg'
    },
    url: 'https://i.postimg.cc/vBqs5hs6/Chat-GPT-Image-Jul-22-2025-10-54-19-AM-1.png',
    type: 'image',
    uploadDate: new Date('2025-07-14'),
    title: 'Tendulkar Bat',
    author: 'wallos',
    likes: 2000,
    downloads: 1500
  },
  {
    id: '24',
    file: {
      name: 'images',
      size: 2098765, // approximate size in bytes
      type: 'image/jpeg'
    },
    url: 'https://i.postimg.cc/DwPy8q81/Chat-GPT-Image-Jul-22-2025-10-57-38-AM.png',
    type: 'image',
    uploadDate: new Date('2025-07-14'),
    title: 'Tendulkar',
    author: 'wallos',
    likes: 4000,
    downloads: 1800
  },
  {
    id: '25',
    file: {
      name: 'images',
      size: 2098765, // approximate size in bytes
      type: 'image/jpeg'
    },
    url: 'https://i.postimg.cc/WpZVdMyt/Chat-GPT-Image-Jul-22-2025-10-59-05-AM.png',
    type: 'image',
    uploadDate: new Date('2025-07-14'),
    title: 'Krish',
    author: 'wallos',
    likes: 900,
    downloads: 200
  },
  {
    id: '28',
    file: {
      name: 'images',
      size: 2098765, // approximate size in bytes
      type: 'image/jpeg'
    },
    url: 'https://i.postimg.cc/sDfTkz5y/Chat-GPT-Image-Jul-22-2025-11-00-39-AM-1.png',
    type: 'image',
    uploadDate: new Date('2025-07-14'),
    title: 'NaagRaaj',
    author: 'wallos',
    likes: 200,
    downloads: 50
  },
  {
    id: '29',
    file: {
      name: 'images',
      size: 2098765, // approximate size in bytes
      type: 'image/jpeg'
    },
    url: 'https://i.postimg.cc/9FGNjn8X/ada58f72-101e-4712-aa97-9f88a39fc84e.png',
    type: 'image',
    uploadDate: new Date('2025-07-25'),
    title: 'Super Commando Dhruv',
    author: 'Super Commando dhruv',
    likes: Math.floor(Math.random() * 400) + 100,     // Random between 100–499
    downloads: Math.floor(Math.random() * 100) + 20   // Random between 20–119
  },
  {
    id: '30',
    file: {
      name: 'images',
      size: 2098765, // approximate size in bytes
      type: 'image/jpeg'
    },
    url: 'https://i.postimg.cc/8P5s22PM/d57b85d5-a95b-48f3-803c-b6f7f2dd68da.png',
    type: 'image',
    uploadDate: new Date('2025-07-25'),
    title: 'DOGA',
    author: 'DOGA',
    likes: Math.floor(Math.random() * 400) + 100,     // Random between 100–499
    downloads: Math.floor(Math.random() * 100) + 20   // Random between 20–119
  },
  {
    id: '31',
    file: {
      name: 'images',
      size: 2098765, // approximate size in bytes
      type: 'image/jpeg'
    },
    url: 'https://i.postimg.cc/j2nmNq4y/4695ca47-0b25-46c0-be1a-7b473eeb0066.png',
    type: 'image',
    uploadDate: new Date('2025-07-25'),
    title: 'SuperHero',
    author: 'SuperHero',
    likes: Math.floor(Math.random() * 400) + 100,     // Random between 100–499
    downloads: Math.floor(Math.random() * 100) + 20   // Random between 20–119
  },
  {
    id: '32',
    file: {
      name: 'images',
      size: 2098765, // approximate size in bytes
      type: 'image/jpeg'
    },
    url: 'https://i.postimg.cc/VkkTBFgY/e091ce7e-bfbc-4b6c-9180-91f8c9a0faf9.png',
    type: 'image',
    uploadDate: new Date('2025-07-25'),
    title: 'BHeriya',
    author: 'BHeriya',
    likes: Math.floor(Math.random() * 400) + 100,     // Random between 100–499
    downloads: Math.floor(Math.random() * 100) + 20   // Random between 20–119
  },
  {
    id: '33',
    file: {
      name: 'images',
      size: 2098765, // approximate size in bytes
      type: 'image/jpeg'
    },
    url: 'https://i.postimg.cc/m2JM8LNt/c83d6d3b-de55-439b-a3be-f5e8861c7710.png',
    type: 'image',
    uploadDate: new Date('2025-07-25'),
    title: 'Bhavesh Joshi',
    author: 'Bhavesh Joshi',
    likes: Math.floor(Math.random() * 400) + 100,     // Random between 100–499
    downloads: Math.floor(Math.random() * 100) + 20   // Random between 20–119
  },
  {
    id: '34',
    file: {
      name: 'images',
      size: 2098765, // approximate size in bytes
      type: 'image/jpeg'
    },
    url: 'https://i.postimg.cc/VvMShMFv/a037b5c6-f4f0-4dbc-9e5d-a131e57a50f4.png',
    type: 'image',
    uploadDate: new Date('2025-07-25'),
    title: 'mountains',
    author: 'mountains',
    likes: Math.floor(Math.random() * 400) + 100,     // Random between 100–499
    downloads: Math.floor(Math.random() * 100) + 20   // Random between 20–119
  },
  {
    id: '35',
    file: {
      name: 'images',
      size: 2098765, // approximate size in bytes
      type: 'image/jpeg'
    },
    url: 'https://i.postimg.cc/V6ZBwjMF/720d6029-3f8a-4aba-892d-84f5757b54d3.png',
    type: 'image',
    uploadDate: new Date('2025-07-25'),
    title: 'Cyber Warrior Rise',
    author: 'wallos',
    likes: Math.floor(Math.random() * (10000 - 700 + 1)) + 700,       // Random between 700–10000
    downloads: Math.floor(Math.random() * (10000 - 700 + 1)) + 700    // Random between 700–10000
  },
  {
    id: '36',
    file: {
      name: 'images',
      size: 2098765, // approximate size in bytes
      type: 'image/jpeg'
    },
    url: 'https://i.postimg.cc/NjN1m6Cv/56e475d1-6b0e-41b1-8f4b-0071d68ecd30.png',
    type: 'image',
    uploadDate: new Date('2025-07-25'),
    title: 'Cyber Warrior Rise',
    author: 'wallos',
    likes: Math.floor(Math.random() * (10000 - 700 + 1)) + 700,       // Random between 700–10000
    downloads: Math.floor(Math.random() * (10000 - 700 + 1)) + 700    // Random between 700–10000
  },
  {
    id: '37',
    file: {
      name: 'images',
      size: 2098765, // approximate size in bytes
      type: 'image/jpeg'
    },
    url: 'https://i.postimg.cc/J7fm7SR9/ffdf8a54-4058-4aa5-9759-d4d83c908590.png',
    type: 'image',
    uploadDate: new Date('2025-07-25'),
    title: 'Futuristic Cityscape',
    author: 'WallOs',
    likes: Math.floor(Math.random() * (10000 - 700 + 1)) + 700,       // Random between 700–10000
    downloads: Math.floor(Math.random() * (10000 - 700 + 1)) + 700    // Random between 700–10000
  }
       
  ];