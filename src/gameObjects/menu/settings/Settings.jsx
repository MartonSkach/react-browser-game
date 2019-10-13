import React from 'react';
import { HomeButton } from '../HomeButton';
import { connect } from 'react-redux';
import * as actionType from '../../../state/actions';

class Settings extends React.Component {
  state = {
    username: null,
  }

  onTextInput = input => {
    this.setState({ username: input })
  }

  changeName = () => {
    let spaceCount = 1;
    let properUsername = []
    this.state.username.replace(/[&/\\#,+()$~%.'":*?<>{}]/g, '').split('').forEach(letter => {
      if (letter === ' ') {
        if (spaceCount === 1) {
          return
        } else {
          properUsername.push(letter);
          spaceCount++;
        }
      } else {
        properUsername.push(letter);
        spaceCount = 0;
      }
    });

    if (spaceCount === 0 || spaceCount === 1) {
      this.props.changeUsername(properUsername.join(''))
    }
  }

  render() {
    return (
      <div className='Settings'>
        <div className='Screen-Title'><h1>SETTINGS</h1></div>
        <input
          className='Name-Change-Input'
          type='text'
          placeholder={this.props.userName}
          onChange={e => this.onTextInput(e.target.value)}
          >
          </input>
        <button
          className='Name-Change-Button'
          onClick = {this.changeName}
          >
          Change username
        </button>
        <HomeButton />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userName: state.user.userName,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeUsername: (username) =>
      dispatch({ type: actionType.CHANGE_USERNAME, payload: username })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
