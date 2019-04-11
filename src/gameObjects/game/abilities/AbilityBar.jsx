import React from 'react';
import { connect } from 'react-redux';
import { selectNextAction } from '../../../state/ducks/player';
import * as actionType from '../../../state/actions';

class AbilityBar extends React.Component {
  render() {
    return (
      <div className='Ability-Bar'>

        <div className='Ability-Bar-Slot'>
          <div
            className='Ability-Bar-Skill'
            id='Deflect-Up'
            title='Deflect up'
            value={actionType.DEFLECT_TOP}
            onClick={this.props.selectAction} >
          </div>
        </div>

        <div className='Ability-Bar-Slot'>
          <div
            className='Ability-Bar-Skill'
            id='Deflect-Center'
            title='Deflect center'
            value={actionType.DEFLECT_CENTER}
            onClick={this.props.selectAction} >
          </div>
        </div>

        <div className='Ability-Bar-Slot'>
          <div
            className='Ability-Bar-Skill'
            id='Deflect-Down'
            title='Deflect down'
            value={actionType.DEFLECT_DOWN}
            onClick={this.props.selectAction} >
          </div>
        </div>

        <div className='Ability-Bar-Slot'>
          <div
            className='Ability-Bar-Skill'
            id='Block'
            title='Block'
            value={actionType.BLOCK}
            onClick={this.props.selectAction} >
          </div>
        </div>

        <div className='Ability-Bar-Slot'>
          <div
            className='Ability-Bar-Skill'
            id='Dodge'
            title='Dodge'
            value={actionType.DODGE}
            onClick={this.props.selectAction} >
          </div>
        </div>

        <div className='Ability-Bar-Slot'>
          <div
            className='Ability-Bar-Skill'
            id='Jump'
            title='Jump'
            value={actionType.JUMP}
            onClick={this.props.selectAction} >
          </div>
        </div>

      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectAction: (e) => dispatch(selectNextAction(e.target.getAttribute('value')))
  }
}

export default connect(null, mapDispatchToProps)(AbilityBar)
