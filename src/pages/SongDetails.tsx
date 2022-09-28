import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import {
  useGetSongRelatedQuery,
  useGetSongsDetailsQuery,
} from '../redux/services/shazamCore/shazamCore';
import { ShazamCoreRootObject } from '../redux/services/shazamCore/types';
import { RootState } from '../redux/store';

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();

  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongsDetailsQuery({ songid: songid ? songid : '' });

  const {
    data,
    isFetching: isFetchingRelatedSongs,
    error,
  } = useGetSongRelatedQuery({ songid: songid ? songid : '' });

  const { activeSong, isPlaying } = useSelector(
    (state: RootState) => state.player
  );

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = (song: ShazamCoreRootObject, i: number) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  if (isFetchingRelatedSongs || isFetchingSongDetails) {
    return <Loader title="Searching song details" />;
  }

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={''} songData={songData} />
      <div className="mb-10 mt-7">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
        <div className="mt-5">
          {songData?.sections[1].type === 'LYRICS' ? (
            songData?.sections[1].text?.map((line, i) => (
              <p className="text-gray-400 text-base my-1">{line}</p>
            ))
          ) : (
            <p className="text-gray-400 text-base my-1">
              There is no lyrics found!
            </p>
          )}
        </div>
      </div>
      <RelatedSongs
        data={data}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePlayClick={handlePlayClick}
        handlePauseClick={handlePauseClick}
      />
    </div>
  );
};

export default SongDetails;
