import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import SubTopic from './Subtopic';



export default class Topic extends Component {

  componentDidMount() {
    console.log('Page::', this.props)
  }

  render() {

    let { match } = this.props;
    return(
      <div className="topic">
        <h1>Topics </h1>
        <ul>
          <li><Link to={`${match.url}/Sherlock`}>Sherlock</Link></li>
          <li><Link to={`${match.url}/Coffee`}>Cofee</Link></li>
        </ul>




        <Route path={`${match.url}/:topicId`} component={SubTopic} />

      </div>
    )
  }
}
