import { useSelector } from 'react-redux';

import { ArtistCard, Error, Loader, SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore/shazamCore';
import { RootState } from '../redux/store';

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading Top Artists" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl mt-4 mb-10 text-left text-white">
        Top Artists
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((track, i) => {
          return <ArtistCard key={track.key} track={track} />;
        })}
      </div>
    </div>
  );
};

export default TopArtists;
