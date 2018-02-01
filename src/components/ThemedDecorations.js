import React from 'react';

export default class ThemedDecorations extends React.Component{
  render() {
    const themedChildren = React.Children.map(this.props.children, child => {
      return child.className = this.props.theme
      })
    })
    return (
      
    )
  }
}