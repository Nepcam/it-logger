import React, {useState, useEffect} from 'react';
import TechItem from './TechItem';


const TechListModel = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  },[]);

  const getTechs = async () => {
    setLoading(true);
    const res = await fetch('/techs');
    const data = await res.json();

    setTechs(data);
    setLoading(false);
  }

  return (
    <div id='tech-list-model' className='model'>
      <div className='model-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading && techs.map(tech => (
            <TechItem tech={tech} key={tech.id}/> 
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TechListModel
