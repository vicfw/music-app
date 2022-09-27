import { genres } from '../assets/constants';
import { Loader, SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore/shazamCore';

const Discover = () => {
  const { data, error, isFetching } = useGetTopChartsQuery();

  console.log(data);

  if (isFetching) return <Loader title="loading songs..." />;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Discover</h2>
        <select
          onChange={() => {}}
          value=""
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
      <div className="felx flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard key={song.key} i={i} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
