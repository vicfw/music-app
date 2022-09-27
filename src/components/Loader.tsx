interface LoaderProps {
  title: string;
}
const Loader: React.FC<LoaderProps> = ({ title }) => <div>{title}</div>;

export default Loader;
