import React from 'react'

class Tooltip extends React.Component {
  getPositionStyle() {
    const { x, y } = this.props.position
    return { left: `${x}px`, top: `${y}px` }
  }

  getClassName() {
    return `tooltip${this.props.visible ? ' tooltip--visible' : ''}`
  }

  render() {
    return (
      <div className={this.getClassName()} style={this.getPositionStyle()}>
        <span>{this.props.name}</span>
      </div>
    )
  }
}

export default Tooltip
