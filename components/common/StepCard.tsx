type StepCardProps = {
  title: string;
  subtitle: string;
  desc: string;
  isDarkMode?: boolean;
};

export default function StepCard(props: StepCardProps) {
  const {title, subtitle, desc, isDarkMode} = props;

  return (
    <article className='card text-center'>
      <h1 className='text-pale-orange'>{title}</h1>
      <h4 className={isDarkMode ? 'text-white' : 'text-inherit'}>{subtitle}</h4>
      <p className={isDarkMode ? 'text-white' : 'text-inherit'}>{desc}</p>
    </article>
  );
}
