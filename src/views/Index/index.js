import Layout from 'components/Layout'
import Introduction from 'components/Introduction'
import Button from 'components/Button'
import UseCases from './UseCases'
import Features from './Features'
import './index.css'

export default () => (
  <Layout class='layout'>
    <Introduction>
      <h1>Keep it Real-time!</h1>
      <h2>
        UpSub is a Pub/Sub service built for the Web.<br />
        Distributable, Reliable & best of all open source.
      </h2>
      <Button href='/getting-started' color='primary' large text='Getting Started' />
      <Button href='/docs' color='white' borderless transparent large text='Documentation' />
    </Introduction>
    <UseCases />
    <Features />
  </Layout>
)
