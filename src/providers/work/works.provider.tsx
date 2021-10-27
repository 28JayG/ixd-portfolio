import { createContext, FC, useEffect, useState } from 'react';
import { WorkModal } from '../../modals/work.modal';
import { fetchWorksFromFirebase } from './works.utils';

export const ServicesContext = createContext<{
  loading: boolean;
  toggleLoading: (value: boolean) => void;
  works: WorkModal[];
} | null>(null);

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
    <ServicesContext.Provider value={{ works: works, loading, toggleLoading }}>
      {children}
    </ServicesContext.Provider>
  );
};

export default WorkProvider;
