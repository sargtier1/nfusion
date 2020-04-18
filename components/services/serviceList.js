import Link from 'next/link'
import { Display, Text, Spacer } from '@zeit-ui/react'

export default function ServiceList({ services }) {
  return (
    <>
      {services &&
        services.map(({ title, slug, coverImage, excerpt }, i) => (
          <Link key={i} href='/services/[slug]' as={`/services/${slug}`}>
            <a className='cards'>
              <Display
                style={{ maxWidth: '650px' }}
                shadow
                caption={
                  <div className='preview-title'>
                    <Text h3>{title}</Text>
                    <Text p b>
                      {excerpt}
                    </Text>
                  </div>
                }
              >
                <img
                  className='img'
                  width='100%'
                  height='450'
                  src={coverImage}
                  alt={title}
                />
              </Display>
            </a>
          </Link>
        ))}
      <Spacer y={0.5} />
      <style jsx>{`
        .img {
          height: 450px;
          width: 100%;
        }
        .cards {
          max-width: 500px;
        }
        .preview-title {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
        }
        @media (max-width: 840px) {
          .preview-title {
            flex-direction: column;
          }
          .img {
            height: 250px;
          }
        }
      `}</style>
    </>
  )
}
