import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from './ui/drawer';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Play, Heart, Share2, Clock, Calendar, Disc } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { useState, useEffect } from 'react';

interface AlbumModalProps {
  isOpen: boolean;
  onClose: () => void;
  album: {
    id: number;
    title: string;
    artist: string;
    imageUrl: string;
    year: string;
  } | null;
}

export function AlbumModal({ isOpen, onClose, album }: AlbumModalProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!album) return null;

  const albumDetails = {
    genre: 'Electronic / Ambient',
    duration: '42:15',
    tracks: 12,
    releaseDate: `${album.year}-03-15`,
    label: 'Independent',
    description: '이 앨범은 현대 일렉트로닉 사운드와 앰비언트 요소를 결합한 독특한 음악적 여정입니다.',
  };

  const tracks = [
    { id: 1, name: 'Opening Dawn', duration: '3:24' },
    { id: 2, name: 'Electric Dreams', duration: '4:12' },
    { id: 3, name: 'Midnight Echo', duration: '3:48' },
    { id: 4, name: 'Stellar Waves', duration: '5:15' },
    { id: 5, name: 'Cosmic Drift', duration: '4:32' },
    { id: 6, name: 'Silent Frequency', duration: '3:56' },
  ];

  const ModalContent = () => (
    <div className="flex flex-col h-full">
      {/* Album Header */}
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="w-full md:w-72 flex-shrink-0">
          <ImageWithFallback
            src={album.imageUrl}
            alt={album.title}
            className="w-full aspect-square object-cover rounded-lg shadow-2xl"
          />
        </div>
        
        <div className="flex-1 flex flex-col">
          <div className="mb-4">
            <h2 className="text-white text-3xl mb-2">{album.title}</h2>
            <p className="text-green-500 text-xl">{album.artist}</p>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline" className="border-green-500/50 text-green-500">
              <Disc className="w-3 h-3 mr-1" />
              {albumDetails.genre}
            </Badge>
            <Badge variant="outline" className="border-zinc-700 text-gray-400">
              <Calendar className="w-3 h-3 mr-1" />
              {album.year}
            </Badge>
            <Badge variant="outline" className="border-zinc-700 text-gray-400">
              <Clock className="w-3 h-3 mr-1" />
              {albumDetails.duration}
            </Badge>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {albumDetails.description}
          </p>

          <div className="flex gap-3 mt-auto">
            <Button className="bg-green-500 hover:bg-green-600 text-black flex-1 md:flex-initial">
              <Play className="w-4 h-4 mr-2 fill-black" />
              전체 재생
            </Button>
            <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
              <Heart className="w-4 h-4" />
            </Button>
            <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <Separator className="bg-zinc-800 my-4" />

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        {/* Track List */}
        <div className="flex flex-col">
          <h3 className="text-white mb-3">트랙 리스트</h3>
          <div className="space-y-1">
            {tracks.map((track, index) => (
              <div
                key={track.id}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-zinc-800/50 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-4 flex-1">
                  <span className="text-gray-500 w-6 text-center">{index + 1}</span>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-4 h-4 text-green-500 fill-green-500" />
                  </button>
                  <span className="text-gray-300 truncate">{track.name}</span>
                </div>
                <span className="text-gray-500 text-sm ml-2">{track.duration}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Album Info */}
        <div className="flex flex-col">
          <h3 className="text-white mb-3">앨범 정보</h3>
          <div className="space-y-4">
            <div>
              <p className="text-gray-500 text-sm mb-1">레이블</p>
              <p className="text-white">{albumDetails.label}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm mb-1">트랙 수</p>
              <p className="text-white">{albumDetails.tracks}곡</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm mb-1">발매일</p>
              <p className="text-white">{albumDetails.releaseDate}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm mb-1">재생 시간</p>
              <p className="text-white">{albumDetails.duration}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm mb-1">장르</p>
              <p className="text-white">{albumDetails.genre}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // 모바일: Drawer 사용
  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={onClose}>
        <DrawerContent className="bg-zinc-900 border-zinc-800 h-[80vh]">
          <DrawerHeader className="border-b border-zinc-800">
            <DrawerTitle className="text-white">앨범 정보</DrawerTitle>
            <DrawerDescription className="sr-only">
              {album?.title} 앨범의 상세 정보, 트랙 리스트 및 재생 옵션
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-6 h-[calc(80vh-80px)] overflow-hidden">
            <ModalContent />
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  // 데스크탑: Dialog 사용 (80% 크기)
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-zinc-900 border-zinc-800 w-[80vw] h-[80vh] max-w-none overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-white">앨범 정보</DialogTitle>
          <DialogDescription className="sr-only">
            {album?.title} 앨범의 상세 정보, 트랙 리스트 및 재생 옵션
          </DialogDescription>
        </DialogHeader>
        <div className="flex-1 overflow-hidden">
          <ModalContent />
        </div>
      </DialogContent>
    </Dialog>
  );
}
