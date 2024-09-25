import { GlobalProvider } from './GlobalContext';

const AppContext = ({ children }: { children: React.ReactNode }) => (
  <GlobalProvider>
    {children}
  </GlobalProvider>
);
export default AppContext;
