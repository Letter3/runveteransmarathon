import React from 'react';

const CourseMap = (props) => {
  const {
    name = ''
  } = props;
  return (
    <div className='section-wrapper'>
      <h2>Course map</h2>
      <img src={name} alt='course map'/>
    </div>
  );
};

export default CourseMap;