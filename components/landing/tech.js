import { Spacer } from '@zeit-ui/react'

const Technology = () => {
  return (
    <section style={{ backgroundColor: `#207ce5` }} className='section-wrapper'>
      <div className='tech-container'>
        {softData &&
          softData.map(({ key, title, description, src }) => (
            <TechPlack4
              key={key}
              title={title}
              description={description}
              src={src}
            />
          ))}
      </div>
      <style>{`
        .tech-container {
          min-height: 65vh;
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          background-color: #207ce5;
        }
        @media (max-width: 600px) {
          .tech-container {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
          }
        }
        @media (max-width: 1025px) {
          .tech-container {
            display: flex;
            flex-wrap: wrap;  
            justify-content: space-around;
          }
        }
      `}</style>
    </section>
  )
}

const TechPlack4 = ({ title, description, src }) => {
  return (
    <div style={{ borderStyle: 'none' }} className='zi-card pin tech-card'>
      <div className='content-wrapper'>
        <h4 className='hero-text'>{title}</h4>
        <img className='logos' src={src} alt={title} />
        <br />
        <p className='description'>{description}</p>
      </div>
      <style jsx>{`
        .hero-text {
          text-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
        }
        .logos {
          width: 50px;
          margin: auto;
          fill: azure;
        }
        .content-wrapper {
          display: flex;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          align-items: center;
        }
        .tech-image {
          margin-bottom: 0.5rem;
        }
        .tech-card {
          flex: 0 1 calc(25% - 1em);
          box-sizing: border-box;
          margin: 2rem 0;
          background-color: #207ce5;
          color: white;
        }
        .description {
          font-size: 1.2rem;
          line-height: 1.5;
          width: 80%;
          text-align: center;
        }
        @media (max-width: 600px) {
          .tech-card {
            flex: 0 1 calc(25% - 1em);
          }
          .content-wrapper {
            padding: 1rem;
          }
        }
        @media (max-width: 1025px) {
          .tech-card {
            flex: 0 1 calc(50% - 1em);
          }
        }
      `}</style>
    </div>
  )
}

const softData = [
  {
    key: 4,
    title: 'Social Media Marketing',
    description:
      'Advertising through various social medias for maximum outreach',
    src: './icons/smartphone.svg',
  },
  {
    key: 5,
    title: 'Email Marketing',
    description:
      'Intuitive, forward thinking email marketing that is results driven',
    src: './icons/inbox.svg',
  },
  {
    key: 6,
    title: 'Content Management',
    description:
      'Consistent, eloquent content curated for your business and your clients',
    src: './icons/book-open.svg',
  },
  {
    key: 7,
    title: 'S.E.O.',
    description: 'We know how to optimize your SEO to produce real results',
    src: './icons/search.svg',
  },
  {
    key: 1,
    title: 'Web Design',
    description: 'Custom Designs to bring your business to life online',
    src: './icons/layout.svg',
  },
  {
    key: 2,
    title: 'Web Development',
    description:
      'Custom solutions for your business, built with best practices',
    src: './icons/code.svg',
  },
  {
    key: 3,
    title: 'Web Maintenance',
    description: 'Proactive web maintenance to keep your site running',
    src: './icons/tool.svg',
  },
]

export default Technology
