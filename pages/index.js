import Layout from '../components/layout'
import { Row, Col, Code, Spacer, Divider, Text, Image } from '@zeit-ui/react'
import Hero from '../components/heroImage'
import Intro from '../components/landing/intro'

const Home = () => (
  <Layout title='Welcome to my site'>
    <Hero
      title='N-Fusion Solutions'
      description="DFW's Newest, Premier Web Development and Internet Marketing Agency"
      size='85'
    />
    <Intro />
    <svg
      style={{ transform: 'scale(-1, 1)' }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1000 100'
      preserveAspectRatio='none'
    >
      <path style={{ fill: 'whitesmoke' }} d='M0,6V0h1000v100L0,6z'></path>
    </svg>
    <style jsx>
      {`
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
