import loader from '../assets/loader.svg';
interface LoaderProps {
  title?: string;
}
const Loader: React.FC<LoaderProps> = ({ title }) => (
  <div className="w-full flex justify-center items-center flex-col">
    <img src={loader} alt="" className="w-32 h-32 object-contain" />
    <h1 className="font-bold text-2xl text-white mt-2">
      {title || 'loading...'}
    </h1>
  </div>
);

export default Loader;
