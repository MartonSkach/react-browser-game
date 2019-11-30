import React from 'react';
import { HomeButton } from '../HomeButton';

class Instructions extends React.Component {
  state = {
    page: 1,
    nextButtonOpacity: 1,
    previousButtonOpacity: 0.2,
    nextButtonCursor: 'pointer',
    previousButtonCursor: 'unset',
  }

  nextPage = () => {
    if (this.state.page === 1) {
      this.setState({ page: this.state.page + 1 });
      this.setState({
        nextButtonOpacity: 0.2,
        previousButtonOpacity: 1,
        nextButtonCursor: 'unset',
        previousButtonCursor: 'pointer',
      });
    }
  }

  previousPage = () => {
    if (this.state.page === 2) {
      this.setState({ page: this.state.page - 1 });
      this.setState({
        nextButtonOpacity: 1,
        previousButtonOpacity: 0.2,
        nextButtonCursor: 'pointer',
        previousButtonCursor: 'unset',
      });
    }
  }

  render() {
    let currentPage = this.state.page;
    const pageOne = (
      <div>
        <p>BASIC INSTRUCTIONS</p>
      </div>
    )
    const pageTwo = (
      <div className='Instructions-Page-Two'>
        <h2>Abilities</h2>
        <div className='Instructions-Page-Two-Paragraphs'>
          <div>
            <div className='Instructions-Page-Two-Wrapper'>
              <div className='Instructions-Page-Two-Icons' id='Deflect'></div>
              <p><strong>Deflect</strong> - deflect in the given direction, blocking your enemy's attacks. Successful deflects automatically trigger a counter attack.</p>
            </div>
            <div className='Instructions-Page-Two-Wrapper' >
              <div className='Instructions-Page-Two-Icons' id='Block'></div>
              <p><strong>Block</strong> - block any normal attack to prevent health damage and receive posture damage instead.</p>
            </div>
            <div className='Instructions-Page-Two-Wrapper' >
              <div className='Instructions-Page-Two-Icons' id='Dodge'></div>
              <p><strong>Dodge</strong> - try to dodge an attack. If you are successful, receive no damage at all, otherwise receive full damage. Dodging counters impaling attacks.</p>
            </div>
            <div className='Instructions-Page-Two-Wrapper' >
              <div className='Instructions-Page-Two-Icons' id='Jump'></div>
              <p><strong>Jump</strong> - jump to counter sweeping attacks.</p>
            </div>
          </div>
        </div>
      </div>
    )

    let pageContent = (
      <div className='Instructuons-CurrentPage'>
        {currentPage === 1 ? pageOne : pageTwo}
      </div>
    )

    return (
      <div className='Instructions'>
        <div className='Backdrop' />
        <div className='Screen-Title'><h1>INSTRUCTIONS</h1></div>
        <div>{pageContent}</div>
        <div className='Instructions-PageController'>
          <div
            className='Instructions-Page-Button'
            id='Previous'
            onClick={this.previousPage}
            style={{ opacity: `${this.state.previousButtonOpacity}`, cursor: `${this.state.previousButtonCursor}`}}
            >
            </div>
          <div>
            <p>{this.state.page}</p>
          </div>
          <div
            className='Instructions-Page-Button'
            id='Next'
            onClick={this.nextPage}
            style={{ opacity: `${this.state.nextButtonOpacity}`, cursor: `${this.state.nextButtonCursor}` }}
            >
            </div>
        </div>
        <HomeButton />
      </div>
    )
  }
}

export default Instructions
