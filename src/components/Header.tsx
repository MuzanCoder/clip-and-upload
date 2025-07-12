import { Camera, Upload, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onUploadClick: () => void;
  totalFiles: number;
}

const Header = ({ onUploadClick, totalFiles }: HeaderProps) => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Camera className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold">MediaShare</h1>
              <p className="text-sm text-muted-foreground">Upload & Download Hub</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Upload className="w-4 h-4" />
                <span>Upload</span>
              </div>
              <div className="flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Download</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium text-foreground">{totalFiles}</span>
                <span>files</span>
              </div>
            </div>
            
            <Button 
              onClick={onUploadClick}
              className="bg-gradient-primary hover:opacity-90 shadow-elegant"
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload Media
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;