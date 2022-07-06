type LocationCardProps = {
  imgUrl: string;
  name: string;
  address: JSX.Element;
};

export default function LocationCard(props: LocationCardProps) {
  const {imgUrl, name, address} = props;

  return (
    <article className='card text-center place-items-center py-6'>
      <img src={imgUrl} alt={name} className='w-12 mb-8' />
      <h3>{name}</h3>
      {address}
    </article>
  );
}
