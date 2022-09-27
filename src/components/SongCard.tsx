interface SongCardProps {
  key: any;
  song: any;
  i: number;
}
const SongCard: React.FC<SongCardProps> = ({ key, i, song }) => (
  <div>SongCard</div>
);

export default SongCard;
