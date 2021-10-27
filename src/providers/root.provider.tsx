import { FC } from 'react';
import ClientsProvider from './clients/clients.provider';
import WorkProvider from './work/works.provider';

const RootProvider: FC = ({ children }) => {
  return (
    <WorkProvider>
      <ClientsProvider>{children}</ClientsProvider>
    </WorkProvider>
  );
};

export default RootProvider;
