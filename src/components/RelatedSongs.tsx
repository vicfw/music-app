import { FC } from 'react';
import {
  RelatedSongsRootObject,
  ShazamCoreRootObject,
} from '../redux/services/shazamCore/types';

interface RelatedSongsProps {
  data: RelatedSongsRootObject | undefined;
  activeSong: ShazamCoreRootObject;
  isPlaying: boolean;
  handlePauseClick: () => void;
  handlePlayClick: (song: ShazamCoreRootObject, i: number) => void;
}

const RelatedSongs: FC<RelatedSongsProps> = ({
  data,
  activeSong,
  isPlaying,
  handlePauseClick,
  handlePlayClick,
}) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white ">Related Songs</h1>
  </div>
);

export default RelatedSongs;
