import { createContext, FC, useContext, useState } from 'react';

export const NavigationContext = createContext<{
  sideNavOpen: boolean;
  toggleSideNav: () => void;
}>({
  sideNavOpen: false,
  toggleSideNav: () => {},
});

const NavigationProvider: FC = ({ children }) => {
  const [sideNavOpen, setOpen] = useState<boolean>(false);

  const toggleSideNav = () => setOpen(!sideNavOpen);

  return (
    <NavigationContext.Provider value={{ toggleSideNav, sideNavOpen }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;

export const useNavContext = () => useContext(NavigationContext);
