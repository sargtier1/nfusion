import { useRouter } from 'next/router'
import Head from 'next/head'
import { Spinner, Row, Col, Spacer } from '@zeit-ui/react'
import PostHeader from '../../components/services/header'
import PostBody from '../../components/services/body'
import { getServicesBySlug, getAllServices } from '../../lib/api'
import markdownToHtml from '../../lib/html'
import Layout from '../../components/layout'
import Hero from '../../components/hero'
import data from '../../lib/data/service.json'

export default function Services({ service }) {
  const router = useRouter()
  if (!router.isFallback && !service?.slug) {
    return <ErrorPage statusCode={404} />
  }
  console.log(service)
  return (
    <>
      {router.isFallback ? (
        <Row style={{ padding: '10px 0', width: '50px' }}>
          <Spinner size='large' />
        </Row>
      ) : (
        <Layout title={service.metaTitle}>
          <Head>
            <meta property='og:image' content={service.coverImage} />
          </Head>
          <Hero
            title={service.title}
            description={service.excerpt}
            height={65}
          />
          <Spacer y={2} />
          <Row justify='center'>
            <Col>
              <PostBody content={service.content} />
            </Col>
          </Row>
          <Spacer y={1} />
          <Row justify='center'>
            <Col>
              <PostHeader coverImage={service.coverImage} />
            </Col>
          </Row>
          <Spacer y={1} />
        </Layout>
      )}
    </>
  )
}

export async function getStaticProps({ params }) {
  const service = getServicesBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'coverImage',
    'excerpt',
    'metaTitle',
  ])
  const content = await markdownToHtml(service.content || '')

  return {
    props: {
      service: {
        ...service,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const services = getAllServices(['slug'])

  return {
    paths: services.map((services) => {
      return {
        params: {
          slug: services.slug,
        },
      }
    }),
    fallback: false,
  }
}
