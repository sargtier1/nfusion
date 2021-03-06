import Router from 'next/router'
import { CornerDownLeft } from 'react-feather'
import { Text, Image, Spacer } from '@zeit-ui/react'

export default function PostHeader({ title, coverImage }) {
  return (
    <div className='post-header'>
      <Spacer y={2} />
      <div>
        <Image
          className='post-image'
          width='100%'
          height='auto'
          src={coverImage}
        />
      </div>
      <Spacer y={2} />
      <div className='subtitle'>
        <Text h2>{title}</Text>
        <div className='center back' onClick={() => Router.push('/services')}>
          <CornerDownLeft size={30} /> <Spacer x={0.5} />
          <Text style={{ margin: 0 }} h4>
            Back
          </Text>
        </div>
      </div>
      <style jsx>{`
        .back {
          cursor: pointer;
        }
        .subtitle {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .post-header {
          width: 60%;
          margin: auto;
        }
        @media (max-width: 840px) {
          .post-image {
            height: 250px;
          }
          .post-header {
            padding: 1rem;
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
