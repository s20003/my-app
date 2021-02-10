import React from 'react'
import './App.css'
import { Paper, Button } from '@material-ui/core/'

class myApp extends React.Component {
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
          <Paper elevation={9}>
            <h3 className='title'>ISS POSISHON</h3>
            <ul>
              {Object.keys(items).map(key => (
                <li key={key}>
                  {key} - {items[key]}
                </li>
              ))}
            </ul>
            <Button
              variant='contained'
              color='primary'
              onClick={loadPage}
              disableElevation
            >
              update
            </Button>
          </Paper>
        </div>
      )
    }
  }
}

const loadPage = props => {
  return window.location.reload(false)
}

export default myApp
