import { useState, useRef } from 'react';
import Header from '@/components/Header';
import MediaGallery, { MediaItem } from '@/components/MediaGallery';
import { sampleMediaItems } from '@/data/sampleMedia';

const Index = () => {
  // Initialize with sample data to create a Pinterest-like experience
  const [mediaItems, setMediaItems] = useState<MediaItem[]>(sampleMediaItems);
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      <Header totalFiles={mediaItems.length} />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
            Discover Amazing Media
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore our curated collection of beautiful photos and videos. 
            A stunning gallery for all your inspiration needs.
          </p>
          <div className="flex justify-center">
            <button
              onClick={scrollToGallery}
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 py-4 rounded-lg font-semibold shadow-elegant transition-all duration-300 hover:scale-105"
            >
              Explore Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="container mx-auto px-6 py-20">
        <MediaGallery mediaItems={mediaItems} />
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8 text-center">
          <p className="text-muted-foreground">
            MediaShare - Your personal media hub
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
