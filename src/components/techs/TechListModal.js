import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TechItem from './TechItem';
import { getTechs } from '../../actions/techActions';


const TechListModel = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  },[]);

  return (
    <div id='tech-list-model' className='model'>
      <div className='model-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs !== null && 
            techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

TechListModel.PropTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  tech: state.tech
});

export default connect(mapStateToProps, { getTechs }) (TechListModel);
