import React from 'react';

const AddedFeature = props => {

  const handleRemoveFeature = () => {
    return;
    //build this out
  }

  return (
    <li>
      <button onClick={handleRemoveFeature} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
