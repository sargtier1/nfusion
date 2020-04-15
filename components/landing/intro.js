import { Row, Col, Spacer, Image } from '@zeit-ui/react'

export default function Intro() {
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
            <h1 className='title'>Who is N-Fusion Solutions?</h1>
            <h3 className='intro-description'>
              N-Fusion Solutions is the people's champion in all things internet
              marketing. We specialize in creating stunning websites and
              formalizing comprehensive marketing strategies that keep the core
              values of your company intact, all while increasing your bottom
              line.
            </h3>
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
            <Image src='./assets/champion.svg' width='100%' height='auto' />
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
