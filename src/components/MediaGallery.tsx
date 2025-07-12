import { useState } from 'react';
import { Download, Eye, Image, Video, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface MediaItem {
  id: string;
  file: File;
  url: string;
  type: 'image' | 'video';
  uploadDate: Date;
}

interface MediaGalleryProps {
  mediaItems: MediaItem[];
}

const MediaGallery = ({ mediaItems }: MediaGalleryProps) => {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
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
      description: `Downloading ${item.file.name}`
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (mediaItems.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
          <Image className="w-12 h-12 text-muted-foreground" />
        </div>
        <h3 className="text-xl font-semibold mb-2">No media uploaded yet</h3>
        <p className="text-muted-foreground">Upload some photos or videos to get started!</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Your Media Gallery</h2>
        <span className="text-muted-foreground">{mediaItems.length} items</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mediaItems.map((item) => (
          <Card key={item.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:scale-105">
            <div className="relative aspect-square bg-muted">
              {item.type === 'image' ? (
                <img
                  src={item.url}
                  alt={item.file.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={item.url}
                  className="w-full h-full object-cover"
                  preload="metadata"
                />
              )}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
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
                  Download
                </Button>
              </div>

              {/* Type indicator */}
              <div className="absolute top-2 right-2">
                {item.type === 'image' ? (
                  <div className="bg-blue-500 text-white p-1 rounded">
                    <Image className="w-3 h-3" />
                  </div>
                ) : (
                  <div className="bg-red-500 text-white p-1 rounded">
                    <Video className="w-3 h-3" />
                  </div>
                )}
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-medium truncate mb-2">{item.file.name}</h3>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{formatFileSize(item.file.size)}</span>
                <div className="flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {formatDate(item.uploadDate)}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Preview Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            {selectedItem.type === 'image' ? (
              <img
                src={selectedItem.url}
                alt={selectedItem.file.name}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            ) : (
              <video
                src={selectedItem.url}
                controls
                className="max-w-full max-h-full rounded-lg"
              />
            )}
            
            <div className="absolute top-4 right-4 space-x-2">
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
      )}
    </div>
  );
};

export default MediaGallery;