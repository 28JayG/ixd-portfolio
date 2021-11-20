import { FC } from 'react';
import ClientsProvider from './clients/clients.provider';
import NavigationProvider from './navigation/navigation.provider';
import WorkProvider from './work/works.provider';

const RootProvider: FC = ({ children }) => {
  return (
    <NavigationProvider>
      <WorkProvider>
        <ClientsProvider>{children}</ClientsProvider>
      </WorkProvider>
    </NavigationProvider>
  );
};

export default RootProvider;
