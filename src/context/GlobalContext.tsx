import {
  createContext,
  ReactNode,
  useContext,
  useState
} from 'react';

interface GlobalContextInterface {
  lastCheck: Array<{ value: number; status: string; date: string; }>;
  setLastCheck: (message: Array<{ value: number; status: string; date: string; }>) => void;
}

export const GlobalContext = createContext<GlobalContextInterface>({
  lastCheck: [],
  setLastCheck: () => undefined
});

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [lastCheck, setLastCheck] = useState<Array<{ value: number; status: string; date: string; }>>([]);

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
