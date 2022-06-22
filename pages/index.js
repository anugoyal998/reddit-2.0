import Head from 'next/head'
import Feed from '../components/Feed'
import Postbox from '../components/Postbox'

export default function Home(props) {
  return (
    <div className="max-w-5xl my-7 mx-auto">
      <Head>
        <title>Reddit 2.0</title>
      </Head>
      <Postbox/>
      <div className="">
        <Feed/>
      </div>
    </div>
  )
}
