import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DetailsHeader } from '../components';
import { useGetSongsDetailsQuery } from '../redux/services/shazamCore/shazamCore';
import { RootState } from '../redux/store';

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();

  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongsDetailsQuery({ songid: songid ? songid : '' });

  const { activeSong, isPlaying } = useSelector(
    (state: RootState) => state.player
  );

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
    </div>
  );
};

export default SongDetails;
