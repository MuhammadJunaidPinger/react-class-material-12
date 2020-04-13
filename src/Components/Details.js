import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { getPostAndCommentsFromApi } from '../Config/Api'
import { connect } from 'react-redux'

const classes = {
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class Details extends React.Component {
  state = {
    post: {},
    comments: []
  }

  componentDidMount() {
    this.getPostAndComments()
  }

  async getPostAndComments() {
    const postId = this.props.match.params.itemId

    const { post, comments } = await getPostAndCommentsFromApi(postId)

    this.setState({ post, comments })
  }

  goBack() {
    this.props.history.push('/home')
  }

  renderComment(item) {
    return <Card >
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {item.name}
        </Typography>
        <Typography variant="h5" component="h2">
          {item.email}
        </Typography>
        <Typography variant="body2" component="p">
          {item.body}
        </Typography>
      </CardContent>
    </Card>
  }

  render() {
    const { post, comments } = this.state

    return (
      <div>
        <button onClick={this.goBack.bind(this)}>Back</button>
        <h1>POST DETAILS</h1>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        
        <h3>Comments</h3>
        <div style={{background: 'gray', width: '70vw', margin: 'auto'}}>
          {comments.map(item => {
            return this.renderComment(item)
          })}
        </div>

        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(withRouter(Details))
