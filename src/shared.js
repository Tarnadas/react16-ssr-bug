import React from 'react'

export default function renderer (isServer, render) {
  return render(<AppView isServer={isServer} />, !isServer && document.getElementById('root'))
}

class AppView extends React.Component {
  render () {
    const isServer = this.props.isServer
    console.log(isServer)
    const styles = {
      server: {
        backgroundColor: 'red'
      },
      client: {
        backgroundColor: 'green'
      }
    }
    return (
      <div>
        {
          isServer ?
            <div style={styles.server}>isServer</div> :
            <div style={styles.client}>isClient</div>
        }
      </div>
    )
  }
}
