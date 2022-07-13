import React from 'react';
 import PropTypes from 'prop-types';


export default function Card({children,reverse}) {
  return (
    <div
      className={`card container border d-flex justify-content-center mt-3 ${
        reverse && 'reverse container border d-flex justify-content-center mt-3'
      }`}
    >
      {children}
    </div>
  );
}
Card.defaultProps = {
  reverse: true,
};

Card.propTypes ={
children: PropTypes.node.isRequired,
  reverse: PropTypes.bool
}