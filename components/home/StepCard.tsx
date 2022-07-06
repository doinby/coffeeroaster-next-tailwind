type StepCardProps = {
  title: string;
  subtitle: string;
  desc: string;
};

export default function StepCard(props: StepCardProps) {
  const {title, subtitle, desc} = props;

  return (
    <article className='card text-center'>
      <h1 className='text-pale-orange'>{title}</h1>
      <h4>{subtitle}</h4>
      <p>{desc}</p>
    </article>
  );
}
