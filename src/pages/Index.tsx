import { useState, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import Header from '@/components/Header';
import UploadArea from '@/components/UploadArea';
import MediaGallery, { MediaItem } from '@/components/MediaGallery';
import { sampleMediaItems } from '@/data/sampleMedia';

const Index = () => {
  // Initialize with sample data to create a Pinterest-like experience
  const [mediaItems, setMediaItems] = useState<MediaItem[]>(sampleMediaItems);
  const uploadRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const handleFilesUploaded = (files: File[]) => {
    const newItems: MediaItem[] = files.map(file => ({
      id: Math.random().toString(36).substring(7),
      file: {
        name: file.name,
        size: file.size,
        type: file.type
      },
      url: URL.createObjectURL(file),
      type: file.type.startsWith('image/') ? 'image' : 'video',
      uploadDate: new Date(),
      title: file.name.replace(/\.[^/.]+$/, ""), // Remove file extension for title
      author: 'You',
      likes: 0,
      downloads: 0
    }));
    
    setMediaItems(prev => [...newItems, ...prev]);
    
    // Scroll to gallery after upload
    setTimeout(() => {
      galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const scrollToUpload = () => {
    uploadRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      <Header onUploadClick={scrollToUpload} totalFiles={mediaItems.length} />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
            Share Your Media
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Upload, organize, and share your photos and videos with ease. 
            A beautiful platform for all your media needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToUpload}
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 py-4 rounded-lg font-semibold shadow-elegant transition-all duration-300 hover:scale-105"
            >
              Start Uploading
            </button>
            <button
              onClick={scrollToGallery}
              className="border border-primary/20 hover:bg-primary/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              View Gallery
            </button>
          </div>
        </div>
        
        <div className="mt-16 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground mx-auto" />
        </div>
      </section>

      {/* Upload Section */}
      <section ref={uploadRef} className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Upload Your Media</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Drag and drop your photos and videos, or click to browse. 
            We support all major image and video formats.
          </p>
        </div>
        <UploadArea onFilesUploaded={handleFilesUploaded} />
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
