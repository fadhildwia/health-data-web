import { LastCheckInterface } from '@/types';
import {
  createContext,
  ReactNode,
  useContext,
  useState
} from 'react';

interface GlobalContextInterface {
  lastCheck: LastCheckInterface[];
  setLastCheck: (message: LastCheckInterface[]) => void;
}

export const GlobalContext = createContext<GlobalContextInterface>({
  lastCheck: [],
  setLastCheck: () => undefined
});

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [lastCheck, setLastCheck] = useState<LastCheckInterface[]>([]);

  return (
    <GlobalContext.Provider
      value={{
        lastCheck,
        setLastCheck,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);
