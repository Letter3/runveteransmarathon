import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from 'prop-types';

const VeteransNavigation = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light nav-wrapper' data-toggle='collapse'
         data-target='.nav-collapse' id='veterans'>
      <a className='navbar-brand' href='/veterans.html'>VM</a>
      <div className='collapse navbar-collapse' id='navbarText'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to={'races'}
                  className='nav-link dropdown-toggle'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'>Races</Link>
            <div className='dropdown-menu'>
              <Link className='dropdown-item' to='marathon.html'>Marathon</Link>
              <Link className='dropdown-item' to='halfmarathon.html'>Half-marathon</Link>
              <Link className='dropdown-item' to='fivek.html'>5k</Link>
            </div>
          </li>
          <li className='nav-item'>
            <Link to='raceday.html' className='nav-link' aria-haspopup='true' aria-expanded='false'>Race Day</Link>
          </li>
          <li className='nav-item'>
            <Link to='results.html' className='nav-link'>Results</Link>
          </li>
          <li className='nav-item'>
            <Link to='faq.html' className='nav-link'>FAQ</Link>
          </li>
          <li className='nav-item'>
            <a href='https://runsignup.com/Race/IN/ColumbiaCity/VeteransMarathon' target='_blank'
               rel='noopener noreferrer' className='nav-link'>Register
              <i className='fas fa-external-link-alt padding-left-one'></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

VeteransNavigation.propTypes = {
  enJson: PropTypes.object
};

export default VeteransNavigation;
