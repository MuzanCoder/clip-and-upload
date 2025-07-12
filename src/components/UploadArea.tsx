import { useState, useCallback } from 'react';
import { Upload, Image, Video, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface UploadAreaProps {
  onFilesUploaded: (files: File[]) => void;
}

const UploadArea = ({ onFilesUploaded }: UploadAreaProps) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadingFiles, setUploadingFiles] = useState<File[]>([]);
  const { toast } = useToast();

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files).filter(file => 
      file.type.startsWith('image/') || file.type.startsWith('video/')
    );
    
    if (files.length === 0) {
      toast({
        title: "Invalid files",
        description: "Please upload only images or videos.",
        variant: "destructive"
      });
      return;
    }

    processFiles(files);
  }, [toast]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    processFiles(files);
  }, []);

  const processFiles = useCallback((files: File[]) => {
    setUploadingFiles(files);
    
    // Simulate upload process
    setTimeout(() => {
      onFilesUploaded(files);
      setUploadingFiles([]);
      toast({
        title: "Upload successful!",
        description: `${files.length} file(s) uploaded successfully.`
      });
    }, 1000);
  }, [onFilesUploaded, toast]);

  const removeUploadingFile = useCallback((index: number) => {
    setUploadingFiles(prev => prev.filter((_, i) => i !== index));
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div
        className={`
          relative border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300
          ${isDragOver 
            ? 'border-primary bg-primary/10 shadow-glow' 
            : 'border-muted hover:border-primary/50 hover:bg-primary/5'
          }
        `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Upload className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-semibold mb-2">Upload your media</h3>
        <p className="text-muted-foreground mb-6">
          Drag and drop your photos or videos here, or click to browse
        </p>
        
        <Button 
          size="lg" 
          className="bg-gradient-primary hover:opacity-90 shadow-elegant"
          onClick={() => document.getElementById('file-upload')?.click()}
        >
          Choose Files
        </Button>
        
        <input
          id="file-upload"
          type="file"
          multiple
          accept="image/*,video/*"
          onChange={handleFileInput}
          className="hidden"
        />
        
        <p className="text-sm text-muted-foreground mt-4">
          Support for JPEG, PNG, GIF, MP4, MOV and more
        </p>
      </div>

      {/* Upload Progress */}
      {uploadingFiles.length > 0 && (
        <div className="mt-6 space-y-3">
          <h4 className="font-medium">Uploading files...</h4>
          {uploadingFiles.map((file, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-card rounded-lg border">
              <div className="flex items-center space-x-3">
                {file.type.startsWith('image/') ? (
                  <Image className="w-5 h-5 text-primary" />
                ) : (
                  <Video className="w-5 h-5 text-primary" />
                )}
                <span className="text-sm font-medium">{file.name}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeUploadingFile(index)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UploadArea;