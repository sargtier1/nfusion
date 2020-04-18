import { Row } from '@zeit-ui/react'

export default function Sell() {
  return (
    <>
      <Row justify='center' align='middle'>
        <div className='call-to-wrapper'>
          <h2>What We Offer </h2>
          <p>
            Our recommendations based on your audit will be in seven specialized
            services that N-Fusion Solutions knows we can deliver on. That last
            thing you need is a company to over promise and under deliver. Check
            out our services below and contact us today!
          </p>
        </div>
      </Row>
      <style jsx>
        {`
          .call-to-wrapper {
            display: flex;
            flex-direction: column;
            padding: 2rem;
            margin: auto;
            height: 55vh;
            width: 70%;
            align-items: center;
            justify-content: center;
            text-align: center;
          }
          .call-to-wrapper {
            line-height: 2;
            font-size: 1.5rem;
          }
          .call-to-description {
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
            .call-to-wrapper {
              flex-direction: column;
            }
          }
          @media (max-width: 840px) {
            .wrapper {
              display: flex;
              flex-direction: column;
            }
            .call-to-wrapper {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}
