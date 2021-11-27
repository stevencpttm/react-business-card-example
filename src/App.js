import React, { Component } from 'react'
import './App.css'
import BusinessCard from './BusinessCard'

class App extends Component {
  state = {
    profiles: [
      {
        name: 'Steven',
        title: 'Developer',
        department: 'Development Team',
        phone: '+853 66666666',
        imageUrl: 'https://sdfsdf.dev/300x300.png,black,white',
        showProfileImage: true,
      },
      {
        name: 'John',
        title: 'Manager',
        department: 'Development Team',
        phone: '+853 66222222',
        imageUrl: 'https://sdfsdf.dev/300x300.png,yellow,black',
        showProfileImage: false,
      }
    ],
    currentIndex: 0,
  }

  changeProfile = (index) => {
    this.setState({
      currentIndex: index,
    })
  }

  render() {
    let profile = this.state.profiles[this.state.currentIndex]

    return (
      <div>
        <a href="#" onClick={(e) => {
          e.preventDefault()
          this.changeProfile(0)
        }}>Steven</a>{' '}
        <a href="#" onClick={(e) => {
          e.preventDefault()
          this.changeProfile(1)
        }}>John</a>

        <BusinessCard
          name={profile.name}
          title={profile.title}
          department={profile.department}
          phone={profile.phone}
          showProfileImage={profile.showProfileImage}>
          <img src={profile.imageUrl} />
        </BusinessCard>
      </div>
    )
  }
}

export default App