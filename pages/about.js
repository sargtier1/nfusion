import Layout from '../components/layout'
import {
  useTheme,
  Row,
  Col,
  Code,
  Divider,
  Text,
  Spacer,
  Collapse,
} from '@zeit-ui/react'
import Hero from '../components/hero'
import data from '../lib/data/about.json'

export default function About() {
  const { palette } = useTheme()

  return (
    <Layout title='About Salvatore Argentieri'>
      <Hero
        title='About N-Fusion'
        description='Meet the people that make up N-Fusion'
        size='55'
      />
      <Row>
        <Col>
          <h1>howdy</h1>
        </Col>
      </Row>
      <style jsx>{`
        .sections {
          width: 100%;
        }
        @media (max-width: 600px) {
          .mobile {
            flex=direction: column;
          }
          .sections {
            width: 50%;
          }
        }
      `}</style>
    </Layout>
  )
}
