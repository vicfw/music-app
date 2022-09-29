import { useDispatch, useSelector } from 'react-redux';
import { genres } from '../assets/constants';
import { Error, Loader, SongCard } from '../components';
import { selectGenreListId } from '../redux/features/playerSlice';
import { useGetSongsByGenreQuery } from '../redux/services/shazamCore/shazamCore';
import { RootState } from '../redux/store';

const Discover = () => {
  const dispatch = useDispatch();

  const { activeSong, isPlaying, genreListId } = useSelector(
    (state: RootState) => state.player
  );

  const { data, error, isFetching } = useGetSongsByGenreQuery(
    genreListId || 'POP'
  );

  if (isFetching) return <Loader title="loading songs..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {genreListId || 'POP'}
        </h2>
        <select
          onChange={(e) => {
            dispatch(selectGenreListId(e.target.value));
          }}
          value={genreListId || 'pop'}
          className="bg-black text-gray-300 rounded-lg text-sm outline-none sm:mt-0  mt-5"
        >
          {genres.map((genre) => {
            return (
              <option key={genre.value} value={genre.value}>
                {genre.title}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            i={i}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
