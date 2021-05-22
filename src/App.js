import React from 'react'
import UserStore from './stores/UserStore'
import LoginForm from './LoginForm'
import InputField from './InputField'
import SubmitButton from './SubmitButton'
import './App.css';

class App extends React.Component {

  async componentDidMount() {

    try {
      
      let res = await fetch('/isLoggedIn', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })

      let result = await res.json()

      if (result && result.success) {
        UserStore.loading = false
        UserStore.isLoggedIn = true
        UserStore.username = result.username
      }

      else {
        UserStore.loading = false
        UserStore.isLoggedIn = false
      }
    }

    catch(e) {
      UserStore.loading = false
      UserStore.isLoggedIn = false
    }
  }

  render() {
    return (
      <div className="app">
        Hello World
      </div>
    );
  }
  
}

export default App;
