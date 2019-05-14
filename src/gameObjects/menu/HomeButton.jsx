import React from 'react';
import { Link } from 'react-router-dom';

export const HomeButton = () => (
  <div className='Return-Home'>
    <Link to='/'>
      <div
        className='Return-Home-Button'
        title='Home'
      >
      </div>
    </Link>
  </div>
)
