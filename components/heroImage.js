const HeroImage = ({ title, description, size }) => {
  return (
    <div
      className='hero'
      style={{
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: `${size}vh`,
      }}
    >
      <div className='hero-container'>
        <div className='hero-text'>
          <h1>{title}</h1>
          <p className='zi-content'>{description}</p>
        </div>
      </div>
      <style jsx>{`
        .hero {
          background: url(./assets/skyline.jpg);
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
          padding: 40px 0 80px;
          display: flex;
          align-items: center;
          justify-content: center; 
          opacity: .95;
        }
        h1{
          margin: .5rem;
        }
        .hero-text {
          color: White;
          padding: 3rem;
          opacity: 1;
        }
        .hero-text h1 {
          font-size: 5.5rem;
          font-weight: 300;
          line-height: 1.5;
          text-shadow: -1.5px -1.5px 0 #000, 1.5px -1.5px 0 #000, -1.5px 1.5px 0 #000, 1.5px 1.5px 0 #000;
        }
        .hero-text p {
          #f8f9fa!important!;
          font-size: 2.5em;
          font-weight: 300;
          text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
        }
        .hero-container {
          padding: 2em;
        }

        @media (max-width: 1025px) {
          .hero {
            min-height: 65vh;
          }
          .hero-text p {
            line-height: 1.5;
          }
        }

        @media(max-width: 769px) {
          .hero-text h1 {
            font-size: 3.5em;
          }
          .hero-text p {
            font-size: 1.6em;
            line-height: 1.5;
          }
        }

        @media (max-width: 600px) {
          .hero {
            min-height: 45vh;
          }
          .hero-text h1 {
            font-size: 3em;
          }
          .hero-text p {
            font-size: 1.4em;
            line-height: 2;
          }
          .hero-container {
            padding: 0rem;
          }
        }
      `}</style>
    </div>
  )
}

export default HeroImage
