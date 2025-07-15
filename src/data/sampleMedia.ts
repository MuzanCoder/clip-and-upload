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
  }  
  ];