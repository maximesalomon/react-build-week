import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getExperimentsAsync } from '../actions/actionCreators';

export class Experiments extends React.Component {
  componentDidMount() {
    this.props.getExperimentsAsync();
  }

  render() {
    return (
        <>
            <h1>Croissant Experiments</h1>
            <div>
                {
                this.props.experiments.map(experiment => (
                    <p>{experiment.name}</p>
                ))
                }
            </div>
        </>
    );
  }
}

const mapStateToProps = state => ({
    experiments: state.experiments
  });
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      getExperimentsAsync
    }, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Experiments);