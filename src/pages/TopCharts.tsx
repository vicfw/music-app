import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore/shazamCore';
import { RootState } from '../redux/store';

const TopCharts = () => {
  const { activeSong, isPlaying } = useSelector(
    (state: RootState) => state.player
  );

  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading Top Charts" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl mt-4 mb-10 text-left text-white">
        Discover Top Charts
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => {
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

export default TopCharts;
