import Layout from "../components/Layout"
import {withRouter} from 'next/router'

const Post = ({router}) => {
  return (
    <Layout title={router.query.title}>
      <p style={{width: '80vw'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis placeat aliquid dicta optio, ea perspiciatis. Illum ab consequatur totam blanditiis veritatis maxime animi dicta fugiat. Ut inventore quidem dolorem minima!</p>
    </Layout>
  )
}

export default withRouter(Post)
