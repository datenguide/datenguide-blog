import React from 'react'
import PropTypes from 'prop-types'

// Styles
import '../scss/main.scss'

export default class IndexLayout extends React.Component {
  static propTypes = {
    children: PropTypes.array
  }

  render() {
    return <div>{this.props.children}</div>
  }
}
