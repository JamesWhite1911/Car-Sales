import React from 'react';

import { connect } from 'react-redux';

import { addFeature } from './../actions/featureActions';

const AdditionalFeature = props => {

  const handleAddFeature = () => {
    props.addFeature(props.feature)
  }

  return (
    <li>
      <button onClick={handleAddFeature} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
