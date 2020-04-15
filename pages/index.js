import Layout from '../components/layout'
import Hero from '../components/heroImage'
import Intro from '../components/landing/intro'
import ServicesIntro from '../components/landing/service'
import TechIntro from '../components/landing/tech'
import CallTo from '../components/landing/callToAction'

const Home = () => (
  <Layout title='Welcome to my site'>
    <Hero
      title='N-Fusion Solutions'
      description="DFW's Newest, Premier Web Development and Internet Marketing Agency"
      size='85'
    />
    <Intro />
    <div style={{ background: 'snow' }}>
      <svg
        style={{ transform: 'scale(-1, 1)' }}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1000 100'
        preserveAspectRatio='none'
      >
        <path style={{ fill: 'whitesmoke' }} d='M0,6V0h1000v100L0,6z'></path>
      </svg>
    </div>
    <ServicesIntro />
    <div style={{ background: 'lightblue' }}>
      <svg
        style={{ transform: 'scale(1, 1)' }}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1000 100'
        preserveAspectRatio='none'
      >
        <path style={{ fill: 'snow' }} d='M0,6V0h1000v100L0,6z'></path>
      </svg>
    </div>
    <TechIntro />
    <div className='dots'>
      <svg
        style={{ transform: 'scale(-1, 1)' }}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1000 100'
        preserveAspectRatio='none'
      >
        <path style={{ fill: 'lightblue' }} d='M0,6V0h1000v100L0,6z'></path>
      </svg>
    </div>
    <CallTo />
    <style jsx>
      {`
        .dots {
          background-image: radial-gradient(#ddd 1px, transparent 0),
            radial-gradient(#ddd 1px, transparent 0);
          background-position: 0 0, 25px 25px;
          background-attachment: fixed;
          background-size: 50px 50px;
          overflow-x: hidden;
        }
        .intro-wrapper {
          background: whitesmoke;
          display: flex;
          padding: 2rem;
          margin: auto;
        }
        .intro-description {
          line-height: 2;
        }
        a {
          cursor: text;
        }
        @media (max-width: 840px) {
          .wrapper {
            display: flex;
            flex-direction: column;
          }
          .intro-wrapper {
            flex-direction: column;
          }
        }
        @media (max-width: 840px) {
          .wrapper {
            display: flex;
            flex-direction: column;
          }
          .intro-wrapper {
            flex-direction: column;
          }
        }
      `}
    </style>
  </Layout>
)

export default Home
