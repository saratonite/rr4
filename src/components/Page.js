import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Page extends Component {

  componentDidMount() {
    console.log('Page::', this.props)
  }

  render() {

    let { match } = this.props;
    return(
      <div className="page">
        <h1>Page : {match.params.pageId || 'Default page'} </h1>

        <Link to="/page/hello">Hello Page</Link>
        <Link to="/page/cofee">Coffee Page</Link>

      </div>
    )
  }
}
