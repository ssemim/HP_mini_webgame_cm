import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, Play } from 'lucide-react';
import { useState } from 'react';

interface AlbumCardProps {
  id: number;
  title: string;
  artist: string;
  imageUrl: string;
  year: string;
  onClick?: () => void;
}

export function AlbumCard({ title, artist, imageUrl, year, onClick }: AlbumCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-green-500/50 transition-all duration-300 cursor-pointer h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative flex-1 overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button 
            className="bg-green-500 hover:bg-green-600 rounded-full p-4 transition-all duration-200 hover:scale-110"
            onClick={(e) => {
              e.stopPropagation();
              // 재생 버튼 클릭 시 로직
            }}
          >
            <Play className="w-6 h-6 text-black fill-black" />
          </button>
        </div>
        
        {/* Like button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-all duration-200"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${isLiked ? 'fill-green-500 text-green-500' : 'text-white'}`}
          />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="text-white mb-1 truncate">{title}</h3>
        <p className="text-gray-400 text-sm mb-1 truncate">{artist}</p>
        <p className="text-green-500 text-xs">{year}</p>
      </div>
    </div>
  );
}
