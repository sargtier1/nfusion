const Hero = ({ title, description, size }) => {
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
          background: radial-gradient(
            ellipse at center,
            rgba(73, 155, 234, 1) 0%,
            rgba(32, 124, 229, 1) 100%
          );
          background-color: rgba(73, 155, 234, 1);
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
          padding: 40px 0 80px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-text {
          color: White;
        }
        .hero-text h1 {
          font-size: 5.5rem;
          font-weight: 300;
          line-height: 1.5;
          text-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
        }
        .hero-text p {
          #f8f9fa!important!;
          font-size: 2.5em;
          font-weight: 300;
        }
        .hero-container {
          padding: 4em 2em;
          display: flex;
          justify-content: left;
          text-align: left;
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
        }
      `}</style>
    </div>
  )
}

export default Hero
