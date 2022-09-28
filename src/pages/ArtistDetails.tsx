import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import {
  useGetArtistDetailsQuery,
  useGetSongRelatedQuery,
  useGetSongsDetailsQuery,
} from '../redux/services/shazamCore/shazamCore';
import { ShazamCoreRootObject } from '../redux/services/shazamCore/types';
import { RootState } from '../redux/store';

const ArtistDetails = () => {
  const { id: artistId } = useParams();

  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery(artistId as string);

  const { activeSong, isPlaying } = useSelector(
    (state: RootState) => state.player
  );

  if (isFetchingArtistDetails) {
    return <Loader title="Searching artist details" />;
  }

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData} />
      <div className="h-7 w-full" />
      <RelatedSongs
        data={Object.values(artistData?.songs as any)}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;
