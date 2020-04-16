import Link from 'next/link'
import { Display, Text, Spacer } from '@zeit-ui/react'
import Date from './date'

export default function ServiceList({ services }) {
  return (
    <>
      {services &&
        services.map(({ title, slug, date, coverImage, excerpt }, i) => (
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
                <img width='100%' height='auto' src={coverImage} alt={title} />
              </Display>
            </a>
          </Link>
        ))}
      <Spacer y={0.5} />
      <style jsx>{`
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
        }
        @
      `}</style>
    </>
  )
}
