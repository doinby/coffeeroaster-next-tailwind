import ProductArticle from './ProductArticle';

/* eslint-disable @next/next/no-img-element */
export default function OurCollection() {
  return (
    <section id='our-collection-section'>
      <h2 className='bg-gradient-to-b from-dark-blue to-white text-black/0 bg-clip-text lowercase'>
        Our collection
      </h2>
      <ProductArticle
        title='Gran Espresso'
        imgUrl='/assets/home/desktop/image-gran-espresso.png'
        description='Light and flavorful blend with cocoa and black pepper for an intense experience'
      />
      <ProductArticle
        title='Planalto'
        imgUrl='/assets/home/desktop/image-planalto.png'
        description='Brazilian dark roast with rich and velvety body, and hints of fruits and nuts'
      />
      <ProductArticle
        title='Piccollo'
        imgUrl='/assets/home/desktop/image-piccollo.png'
        description='Mild and smooth blend featuring notes of toasted almond and dried cherry'
      />
      <ProductArticle
        title='Danche'
        imgUrl='/assets/home/desktop/image-danche.png'
        description='Ethiopian hand-harvested blend densely packed with vibrant fruit notes'
      />
    </section>
  );
}
