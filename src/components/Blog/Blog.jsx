import { postImg1 } from '../../assets'
import './Blog.css'

const Blog = () => {
  return (
    <section id="blog" className="blog pink">
      <div className="wrapper">
        <h2 className="light">Latest Posts</h2>

        <div className="content-container">
          <div className="post">
            <div className="tag">DAW</div>
            <img src={postImg1} />
            <a href="#">
              <h3 className="post-title">How To Use Drum Machine in Logic Pro X</h3>
            </a>
          </div>

          <div className="post">
            <div className="tag">DAW</div>
            <img src={postImg1} />
            <a href="#">
              <h3 className="post-title">How To Use Drum Machine in Logic Pro X</h3>
            </a>
          </div>

          <div className="post">
            <div className="tag">DAW</div>
            <img src={postImg1} />
            <a href="#">
              <h3 className="post-title">How To Use Drum Machine in Logic Pro X</h3>
            </a>
          </div>
        </div>

        <div className="btn-container">
          <a href="#" className="all-posts-btn">
            All Posts
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blog
