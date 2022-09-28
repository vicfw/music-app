import { FC } from 'react';
import {
  RelatedSongsRootObject,
  ShazamCoreRootObject,
} from '../redux/services/shazamCore/types';
import SongBar from './SongBar';

interface RelatedSongsProps {
  data?: any;
  activeSong: ShazamCoreRootObject;
  isPlaying: boolean;
  handlePauseClick?: () => void;
  handlePlayClick?: (song: ShazamCoreRootObject, i: number) => void;
  artistId?: string;
}

const RelatedSongs: FC<RelatedSongsProps> = ({
  data,
  activeSong,
  isPlaying,
  handlePauseClick,
  handlePlayClick,
  artistId,
}) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white ">Related Songs</h1>
    <div className="mt-6 w-full flex flex-col">
      {data?.map((song: any, i: number) => {
        return (
          <SongBar
            key={`${song.key}-${artistId}`}
            song={song}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
            i={i}
          />
        );
      })}
    </div>
  </div>
);

export default RelatedSongs;
