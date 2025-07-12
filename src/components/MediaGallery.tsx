import { useState } from 'react';
import { Download, Eye, Heart, User, Calendar, TrendingUp, ImageIcon, Video, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

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

interface MediaGalleryProps {
  mediaItems: MediaItem[];
}

const MediaGallery = ({ mediaItems }: MediaGalleryProps) => {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [likedItems, setLikedItems] = useState<Set<string>>(new Set());
  const { toast } = useToast();

  const handleDownload = (item: MediaItem) => {
    const link = document.createElement('a');
    link.href = item.url;
    link.download = item.file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Download started",
      description: `Downloading ${item.title}`
    });
  };

  const handleLike = (itemId: string) => {
    setLikedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  if (mediaItems.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
          <ImageIcon className="w-12 h-12 text-muted-foreground" />
        </div>
        <h3 className="text-xl font-semibold mb-2">No media uploaded yet</h3>
        <p className="text-muted-foreground">Upload some photos or videos to get started!</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Discover Amazing Content</h2>
          <p className="text-muted-foreground">Explore our curated collection of photos and videos</p>
        </div>
        <span className="text-muted-foreground bg-muted px-3 py-1 rounded-full">
          {mediaItems.length} items
        </span>
      </div>

      {/* Pinterest-style Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        {mediaItems.map((item) => (
          <Card 
            key={item.id} 
            className="group break-inside-avoid overflow-hidden hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] mb-6"
          >
            {/* Media Container */}
            <div className="relative bg-muted">
              {item.type === 'image' ? (
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full object-cover cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                />
              ) : (
                <div className="relative">
                  <video
                    src={item.url}
                    className="w-full object-cover"
                    preload="metadata"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-gray-800 ml-1" />
                    </div>
                  </div>
                </div>
              )}
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => setSelectedItem(item)}
                    className="bg-white/90 hover:bg-white text-black"
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    View
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => handleDownload(item)}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Download className="w-4 h-4 mr-1" />
                    Save
                  </Button>
                </div>
              </div>

              {/* Type indicator */}
              <div className="absolute top-2 right-2">
                {item.type === 'video' && (
                  <div className="bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center">
                    <Video className="w-3 h-3 mr-1" />
                    Video
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 line-clamp-2">{item.title}</h3>
              
              {/* Author and Date */}
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <User className="w-3 h-3 mr-1" />
                <span className="mr-3">{item.author}</span>
                <Calendar className="w-3 h-3 mr-1" />
                <span>{formatDate(item.uploadDate)}</span>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleLike(item.id)}
                    className="flex items-center space-x-1 text-sm hover:text-primary transition-colors"
                  >
                    <Heart 
                      className={`w-4 h-4 ${likedItems.has(item.id) ? 'fill-red-500 text-red-500' : ''}`} 
                    />
                    <span>{formatNumber(item.likes + (likedItems.has(item.id) ? 1 : 0))}</span>
                  </button>
                  
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Download className="w-4 h-4" />
                    <span>{formatNumber(item.downloads)}</span>
                  </div>
                </div>

                <Button
                  size="sm"
                  onClick={() => handleDownload(item)}
                  className="bg-gradient-primary hover:opacity-90 text-xs"
                >
                  Download
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Preview Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div className="relative max-w-6xl max-h-full" onClick={(e) => e.stopPropagation()}>
            {selectedItem.type === 'image' ? (
              <img
                src={selectedItem.url}
                alt={selectedItem.title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            ) : (
              <video
                src={selectedItem.url}
                controls
                className="max-w-full max-h-full rounded-lg"
              />
            )}
            
            {/* Modal Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 text-white">
              <h3 className="text-xl font-bold mb-2">{selectedItem.title}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm">
                  <span>By {selectedItem.author}</span>
                  <span>{formatDate(selectedItem.uploadDate)}</span>
                  <span>{formatNumber(selectedItem.likes)} likes</span>
                </div>
                <div className="flex space-x-2">
                  <Button
                    onClick={() => handleDownload(selectedItem)}
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => setSelectedItem(null)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaGallery;