import React from 'react'

export default function renderer (isServer, render) {
  return render(<AppView isServer={isServer} />, !isServer && document.getElementById('root'))
}

class AppView extends React.Component {
  render () {
    const isServer = this.props.isServer
    return (
      <div>
        {
          isServer && <ServerComponent />
        }
        <ListComponent />
      </div>
    )
  }
}

class ServerComponent extends React.Component {
  render () {
    const styles = {
      server: {
        backgroundColor: 'red'
      }
    }
    return <div style={styles.server} />
  }
}

class ListComponent extends React.Component {
  constructor (props) {
    super(props)
    this.getList = this.getList.bind(this)
  }
  getList () {
    const styles = {
      el: {
        width: '200px',
        height: '200px',
        margin: '20px',
        backgroundColor: 'blue'
      }
    }
    return Array.from((function * () {
      for (let i = 0; i < 10; i++) {
        yield <div style={styles.el} key={i} />
      }
    })())
  }
  render () {
    const styles = {
      client: {
        backgroundColor: 'green',
        display: 'flex',
        flexWrap: 'wrap'
      }
    }
    return (
      <div style={styles.client}>
        { this.getList() }
      </div>
    )
  }
}
