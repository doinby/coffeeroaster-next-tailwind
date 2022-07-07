type OptionButtonProps = {
  title: string;
  desc: string;
  checked: boolean;
};

export default function OptionButton(props: OptionButtonProps) {
  const {title, desc, checked} = props;

  return (
    <div
      className={`${checked ? 'bg-dark-cyan' : 'bg-dark-cream'} p-6 rounded-lg`}
    >
      <h4
        className={`${checked ? 'text-white' : 'text-inherit'} text-left mb-2`}
      >
        {title}
      </h4>
      <p className={checked ? 'text-white' : 'text-black'}>{desc}</p>
    </div>
  );
}
