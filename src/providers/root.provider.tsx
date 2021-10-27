import { FC } from 'react';
import WorkProvider from './work/works.provider';

const RootProvider: FC = ({ children }) => {
  return <WorkProvider>{children}</WorkProvider>;
};

export default RootProvider;
