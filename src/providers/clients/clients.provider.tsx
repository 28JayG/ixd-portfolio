import { createContext, FC, useContext, useEffect, useState } from 'react';
import { ClientModal } from '../../modals/clinet.modal';

import { fetchClientsFromFirebase } from './clients.utils';

export const ClientsContext = createContext<{
  loading: boolean;
  clients: ClientModal[];
}>({
  loading: false,
  clients: [],
});

const ClientsProvider: FC = ({ children }) => {
  const [clients, setClients] = useState<Array<ClientModal>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        //set loading true before fetching
        setLoading(true);
        let clients = await fetchClientsFromFirebase();
        //set fetches and manipulated services
        setClients(clients as Array<ClientModal>);
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
    <ClientsContext.Provider value={{ clients, loading }}>
      {children}
    </ClientsContext.Provider>
  );
};

export default ClientsProvider;

export const useClinetsContext = () => useContext(ClientsContext);
