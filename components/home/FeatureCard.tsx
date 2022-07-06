type FeatureCardProps = {
  title: string;
  desc: string;
  imgUrl: string;
};

export default function FeatureCard(props: FeatureCardProps) {
  const {title, desc, imgUrl} = props;

  return (
    <article className='bg-dark-cyan card place-items-center px-8 py-16 rounded-lg'>
      <img src={imgUrl} alt={title} className='mb-6' />
      <h4 className='text-light-cream'>{title}</h4>
      <p className='text-light-cream'>{desc}</p>
    </article>
  );
}
