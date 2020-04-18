import { Row, Col, Spacer, Image } from '@zeit-ui/react'

export default function SecondIntro() {
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
            <Image
              src='./assets/services/wireframe.svg'
              width='100%'
              height='auto'
            />
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
            <h4 className='intro-description'>
              N-Fusion Solutions works in two verticals, Web Development and
              Internet Marketing. With everything being online it wouldn’t make
              sense for us to just focus on one, and neither should your
              business. That is why we specialize in both verticals to provide
              you the best possible service. We understand that no two
              businesses are alike and while we recommend offering both services
              to you, it is ultimately up to you what facet you would think best
              benefit your business and help reach the goals you have. This low
              pressure, consultative approach begins with an audit of both your
              website and marketing efforts to date. Afterwards, we will sit
              down, present our findings, and recommend the next steps in
              growing your business. N-Fusion Solutions is ready to get to work
              no matter how big or small the project may be. So take a load off,
              relax, and put us to work for you!
            </h4>
          </Col>
        </div>
      </Row>
      <style jsx>
        {`
          .intro-wrapper {
            background: lightblue;
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
