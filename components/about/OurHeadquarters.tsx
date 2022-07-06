import LocationCard from './LocationCard';

export default function OurHeadquarters() {
  return (
    <section id='our-headquarters-section'>
      <h4 className='text-neutral-gray'>Our headquarters</h4>
      <LocationCard
        imgUrl='/assets/about/desktop/illustration-uk.svg'
        name='United Kingdom'
        address={
          <p>
            68 Asfordby Rd
            <br />
            Alcaston
            <br />
            SY6 1YA
            <br />
            +44 1241 918425
          </p>
        }
      />
      <LocationCard
        imgUrl='/assets/about/desktop/illustration-canada.svg'
        name='Canada'
        address={
          <p>
            1528 Eglinton Avenue
            <br />
            Toronto
            <br />
            Ontario M4P 1A6
            <br />
            +1 416 485 2997
          </p>
        }
      />
      <LocationCard
        imgUrl='/assets/about/desktop/illustration-australia.svg'
        name='Australia'
        address={
          <p>
            36 Swanston Street
            <br />
            Kewell
            <br />
            Victoria
            <br />
            +61 4 9928 3629
          </p>
        }
      />
    </section>
  );
}
