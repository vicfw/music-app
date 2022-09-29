import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Error, Loader, SongCard } from '../components';
import {
  useGetSongsBySearchQuery,
  useGetTopChartsQuery,
} from '../redux/services/shazamCore/shazamCore';
import { RootState } from '../redux/store';

const Search = () => {
  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector(
    (state: RootState) => state.player
  );

  const { data, isFetching, error } = useGetSongsBySearchQuery(
    searchTerm as string
  );

  const songs = data?.tracks?.hits.map((song) => song.track);

  if (isFetching) return <Loader title="Loading Top Charts" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl mt-4 mb-10 text-left text-white">
        Showing results for <span className="font-black ">{searchTerm}</span>
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs?.map((song, i) => {
          return (
            <SongCard
              key={song.key}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              i={i}
              data={data}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Search;
