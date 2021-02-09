import React from 'react'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoaded: false,
      items: []
    }
    this.URI = 'http://api.open-notify.org/iss-now.json'
  }

  componentDidMount () {
    window
      .fetch(this.URI)
      .then(res => res.json())
      .then(json => {
        console.log(json.iss_position)
        this.setState({ isLoaded: true, items: json.iss_position })
      })
  }

  render () {
    const { items, isLoaded } = this.state
    console.log(items)
    if (!isLoaded) {
      return <h3>...Loading</h3>
    } else {
      return (
        <div>
          <h4>ISS POSISHON</h4>
          <ul>
            {Object.keys(items).map(key => (
              <li key={key}>
                {key} - {items[key]}
              </li>
            ))}
          </ul>
        </div>
      )
    }
  }
}

export default App