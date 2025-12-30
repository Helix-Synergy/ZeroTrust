import { useParams } from 'react-router-dom';
import { epms_details_map  } from '../../utils/Pannel Members/panel_members';
import EpmTemplate from './EpmTemplate';


const EpmsDetails = () => {
  const { id } = useParams();
  const epm = epms_details_map[id];

  if (!epm) {
    return <div className="text-center mt-20 text-xl font-semibold">Orator not found</div>;
  }

  return <EpmTemplate {...epm} />;
};

export default EpmsDetails;

