/* eslint-disable @next/next/no-img-element */
type ProductArticleProps = {
  title: string;
  imgUrl: string;
  desc: string;
};

export default function ProductArticle(props: ProductArticleProps) {
  const {title, imgUrl, desc: description} = props;
  return (
    <article className='product-container flex flex-col gap-6 text-center place-items-center'>
      <img className='w-48' src={imgUrl} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
    </article>
  );
}
