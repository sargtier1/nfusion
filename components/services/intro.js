import { Row, Col, Spacer, Image } from '@zeit-ui/react'

export default function ServiceIntro() {
  return (
    <>
      <Row justify='center'>
        <div className='intro-wrapper'>
          <Col
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h4 className='intro-description'>
              N-Fusion Solutions is a full-service web development and internet
              marketing agency. What does that mean for you? It means, you no
              longer need to find two, three, or four different companies to
              help grow your business or build your dream website. N-Fusion
              Solutions is your one-stop shop for everything in the digital
              sphere. Our goal is to work for your business, whether that is in
              the form of building you a custom, stunning website or coming up
              with your business’s own marketing plan that can cover everything
              from Search Engine Optimization to Social Media marketing.
            </h4>
          </Col>
          <Spacer y={2} />
          <Col
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              src='./assets/services/wireframe.svg'
              width='100%'
              height='auto'
            />
          </Col>
        </div>
      </Row>
      <style jsx>
        {`
          .intro-wrapper {
            background: whitesmoke;
            display: flex;
            padding: 2rem;
            margin: auto;
            min-height: 90vh;
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
    </>
  )
}
