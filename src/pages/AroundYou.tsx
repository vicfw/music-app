import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { RootState } from '../redux/store';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore/shazamCore';

const AroundYou = () => {
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(true);

  const { activeSong, isPlaying } = useSelector(
    (state: RootState) => state.player
  );

  const { data, isFetching, error } = useGetSongsByCountryQuery(country);

  useEffect(() => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country?apiKey=at_QunCRK1P6KzXW3ke34qbQoKk9iewl`
      )
      .then((res) => setCountry(res?.data?.location?.country))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, [country]);

  if (isFetching && loading) return <Loader title="Loading Songs Around You" />;

  if (error && country) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl mt-4 mb-10 text-left text-white">
        Around You <span className="font-black">{country}</span>
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

export default AroundYou;
