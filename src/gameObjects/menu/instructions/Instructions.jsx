import React from 'react';

class Instructions extends React.Component {
  state = {
    page: 1,
    nextButtonOpacity: 1,
    previousButtonOpacity: 0.2,
  }

  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
    this.setState({nextButtonOpacity: 0.2, previousButtonOpacity: 1});
  }

  previousPage = () => {
    this.setState({ page: this.state.page - 1 });
    this.setState({nextButtonOpacity: 1, previousButtonOpacity: 0.2});
  }

  render() {
    let currentPage = this.state.page;
    const pageOne = (
      <div>
        <p>ATTACK TYPES</p>
        <p>OVERHEAD ATTACK</p>
        <p>CENTER ATTACK</p>
        <p>BOTTOM ATTACK</p>
        <p>IMPALING ATTACK</p>
        <p>SWEEPING ATTACK</p>
      </div>
    )
    const pageTwo = (
      <div>
        <p>BASIC INSTRUCTIONS</p>
      </div>
    )

    let pageContent = (
      <div className='Instructuons-CurrentPage'>
        {currentPage === 1 ? pageOne : pageTwo}
      </div>
    )

    return (
      <div className='Instructions'>
        <div>{pageContent}</div>
        <div className='Instructions-PageController'>
          <div onClick={this.previousPage} style={{ opacity: `${this.state.previousButtonOpacity}`}} >-</div>
          <div><p>{this.state.page}</p></div>
          <div onClick={this.nextPage} style={{ opacity: `${this.state.nextButtonOpacity}`}} >+</div>
        </div>
      </div>
    )
  }
}

export default Instructions
