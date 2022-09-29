import {
  ShazamCoreRootObject,
  SongsByCountryRootObject,
  Track,
} from '../redux/services/shazamCore/types';
import { FC } from 'react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
interface PlayPauseProps {
  song: ShazamCoreRootObject | SongsByCountryRootObject | Track;
  handlePause: () => void;
  handlePlay: () => void;
  isPlaying: boolean;
  activeSong: ShazamCoreRootObject;
}
const PlayPause: FC<PlayPauseProps> = ({
  handlePause,
  handlePlay,
  song,
  activeSong,
  isPlaying,
}) =>
  isPlaying && activeSong.title === song.title ? (
    <FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} />
  ) : (
    <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
  );

export default PlayPause;
