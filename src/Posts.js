import React, {Component} from 'react';
import axios from 'axios';
import Comments from './Comments';

export default class Posts extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        const posts = res.data.slice(0, 10);
        this.setState({ posts });
      })
  }

  render() {
    return (
        <div className="row">
          { this.state.posts.map(post =><div key={post.id} className="col-md-12">
            <div className="card box-shadow">
              <h3>{post.title}</h3>
              <p className="card-text">{post.body}</p>
              <Comments postId={post.id}/>
            </div>
          </div>
          )}

        </div>
    )
  }
}
