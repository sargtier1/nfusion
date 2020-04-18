import Layout from '../../components/layout'
import { Row, Col } from '@zeit-ui/react'
import ServiceList from '../../components/services/serviceList'
import ServiceIntro from '../../components/services/intro'
import SecondIntro from '../../components/services/secondIntro'
import Sell from '../../components/services/sell'
import { getAllServices } from '../../lib/api'
import Hero from '../../components/hero'

export default function ServicesPage({ allServices }) {
  console.log(allServices)
  return (
    <Layout title='Services'>
      <Hero
        title='Services N-Fusion'
        description='Learn more about how N-Fusion can help your business'
        size='55'
      />
      <Row gap={0}>
        <Col span={24}>
          <ServiceIntro />
          <div style={{ background: 'lightblue' }}>
            <svg
              style={{ transform: 'scale(-1, 1)' }}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1000 100'
              preserveAspectRatio='none'
            >
              <path
                style={{ fill: 'whitesmoke' }}
                d='M0,6V0h1000v100L0,6z'
              ></path>
            </svg>
          </div>
          <SecondIntro />
          <Sell />
          <ServiceList services={allServices} />
        </Col>
      </Row>
    </Layout>
  )
}

export async function getStaticProps() {
  const allServices = getAllServices(['title', 'slug', 'coverImage', 'excerpt'])

  return {
    props: { allServices },
  }
}
