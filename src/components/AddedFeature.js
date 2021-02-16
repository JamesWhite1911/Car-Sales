import React from 'react';

import { connect } from 'react-redux';

import { removeFeature } from '../actions/featureActions';

const AddedFeature = props => {

  const handleRemoveFeature = () => {
    props.removeFeature(props.feature)
  }

  return (
    <li>
      <button onClick={handleRemoveFeature} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, { removeFeature })(AddedFeature);
