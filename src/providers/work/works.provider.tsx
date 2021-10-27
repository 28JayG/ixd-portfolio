import { createContext, FC, useContext, useEffect, useState } from 'react';

import { WorkModal } from '../../modals/work.modal';
import { fetchWorksFromFirebase } from './works.utils';

export const WorksContext = createContext<{
  loading: boolean;
  toggleLoading: (value: boolean) => void;
  works: WorkModal[];
}>({
  loading: false,
  toggleLoading: (value: boolean) => {},
  works: [],
});

const WorkProvider: FC = ({ children }) => {
  const [works, setWorks] = useState<Array<WorkModal>>([]);
  const [loading, setLoading] = useState(false);

  const toggleLoading = (value: boolean) => setLoading(value);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        //set loading true before fetching
        setLoading(true);
        let works = await fetchWorksFromFirebase();
        //set fetches and manipulated services
        setWorks(works as Array<WorkModal>);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    //call fetching services
    fetchWorks();
  }, []);

  return (
    <WorksContext.Provider value={{ works: works, loading, toggleLoading }}>
      {children}
    </WorksContext.Provider>
  );
};

export default WorkProvider;

export const useWorksContext = () => useContext(WorksContext);
