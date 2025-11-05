import { AlbumCard } from './components/AlbumCard';
import { FogBackground } from './components/FogBackground';
import { AlbumModal } from './components/AlbumModal';
import { Menu, Home, Music, Heart, Settings } from 'lucide-react';
import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './components/ui/sheet';

export default function App() {
  const [selectedAlbum, setSelectedAlbum] = useState<typeof albums[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const albums = [
    {
      id: 1,
      title: 'Midnight Dreams',
      artist: 'The Wavelength',
      imageUrl: 'https://images.unsplash.com/photo-1587731556938-38755b4803a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGFsYnVtfGVufDF8fHx8MTc2MjIzMzU4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      year: '2024',
    },
    {
      id: 2,
      title: 'Vinyl Collection',
      artist: 'Classic Sounds',
      imageUrl: 'https://images.unsplash.com/photo-1582730147924-d92f4da00252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZHN8ZW58MXx8fHwxNzYyMTU2NDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      year: '2023',
    },
    {
      id: 3,
      title: 'Live on Stage',
      artist: 'Electric Pulse',
      imageUrl: 'https://images.unsplash.com/photo-1576514129883-2f1d47a65da6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2V8ZW58MXx8fHwxNzYyMTQ1MzU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      year: '2024',
    },
    {
      id: 4,
      title: 'Festival Vibes',
      artist: 'Summer Collective',
      imageUrl: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsfGVufDF8fHx8MTc2MjE1NDY1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      year: '2024',
    },
    {
      id: 5,
      title: 'Acoustic Sessions',
      artist: 'The Harmony',
      imageUrl: 'https://images.unsplash.com/photo-1717084044357-c12d9b62c9cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmVzJTIwbXVzaWN8ZW58MXx8fHwxNzYyMTQwMjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      year: '2023',
    },
    {
      id: 6,
      title: 'DJ Mixes Vol. 1',
      artist: 'Beat Master',
      imageUrl: 'https://images.unsplash.com/photo-1618107095181-e3ba0f53ee59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaiUyMHR1cm50YWJsZXxlbnwxfHx8fDE3NjIyMjg2MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      year: '2024',
    },
  ];



  const handleAlbumClick = (album: typeof albums[0]) => {
    setSelectedAlbum(album);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedAlbum(null), 300);
  };

  return (
    <div className="min-h-screen bg-black relative">
      {/* Animated Fog Background */}
      <FogBackground />
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-zinc-800">
        <div className="max-w-[1800px] mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <button className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors border border-zinc-800">
                  <Menu className="w-6 h-6 text-green-500" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-zinc-900 border-zinc-800 w-64">
                <SheetHeader>
                  <SheetTitle className="text-green-500">Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-8 flex flex-col gap-2">
                  <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-zinc-800 transition-colors text-left text-white">
                    <Home className="w-5 h-5 text-green-500" />
                    <span>홈</span>
                  </button>
                  <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-zinc-800 transition-colors text-left text-white">
                    <Music className="w-5 h-5 text-green-500" />
                    <span>내 음악</span>
                  </button>
                  <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-zinc-800 transition-colors text-left text-white">
                    <Heart className="w-5 h-5 text-green-500" />
                    <span>좋아요</span>
                  </button>
                  <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-zinc-800 transition-colors text-left text-white">
                    <Settings className="w-5 h-5 text-green-500" />
                    <span>설정</span>
                  </button>
                </nav>
              </SheetContent>
            </Sheet>
            <h1 className="text-green-500">Music Gallery</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col px-6 py-8">
        <div className="mb-6 max-w-[1800px] mx-auto w-full">
          <p className="text-gray-400">
            {albums.length}개의 앨범
          </p>
        </div>

        {/* Album Row - Fixed 6 items */}
        <div className="h-[70vh] flex items-center justify-center">
          <div className="max-w-[1800px] w-full h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 h-full">
              {albums.map((album) => (
                <AlbumCard 
                  key={album.id} 
                  {...album} 
                  onClick={() => handleAlbumClick(album)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Album Modal */}
      <AlbumModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        album={selectedAlbum} 
      />
    </div>
  );
}
