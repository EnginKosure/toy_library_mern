import React from 'react';
import { Button } from './Button';
// import {Link} from 'react-router-dom'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/chanel.mp4' autoPlay='true' loop />
      <p>SPEELOTHEEK - AARTSELAAR </p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path='/hero'
        >
          ViEW COLLECTIE
        </Button>
        {/* <Link to='/services'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
          path='/services'
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
        </Link> */}
      </div>
    </div>
  );
}

export default HeroSection;