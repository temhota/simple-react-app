import React, {Component} from 'react';
import axios from 'axios';

export default class Comments extends Component {
  constructor(props) {
   super(props)
   this.state = {
     comments: [],
     displayBotton: true,
     slice: 3
   }

   this.showMore = this.showMore.bind(this);
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/post/${this.props.postId}/comments`)
      .then(res => {
        const comments = res.data
        this.setState({ comments })
      })
  }

  showMore() {
      this.setState({
        displayBotton: false,
        slice: this.state.comments.length
      })
  }

  render() {
    let displayBotton = this.state.displayBotton ? "block" : "none"
    let slice = this.state.slice

    return (
      <div className="comments">
        <h4>Comments:</h4>
        { this.state.comments.map(comment =><div key={comment.id} className="alert alert-secondary ">
          <h5>{comment.name}</h5>
          <p>{comment.body}</p></div>).slice(0, slice)}
          <button onClick={this.showMore} style={{display: displayBotton}} type="button" className="btn btn-primary">Show more</button>
      </div>
    )
  }
}
