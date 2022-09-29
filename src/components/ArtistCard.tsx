import { taskCancelled } from '@reduxjs/toolkit/dist/listenerMiddleware/exceptions';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShazamCoreRootObject } from '../redux/services/shazamCore/types';

interface ArtistsCardProps {
  key: string;
  track: ShazamCoreRootObject;
}

const ArtistCard: FC<ArtistsCardProps> = ({ key, track }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/artists/${track?.artists[0]?.adamid}`)}
      className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
    >
      <img
        src={track?.images?.coverart}
        alt="artist"
        className="w-full h-56 rounded-lg"
      />
      <p className="mt-4 font-semibold text-lg truncate text-white">
        {track.subtitle}
      </p>
    </div>
  );
};

export default ArtistCard;
