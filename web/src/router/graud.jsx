import { createContext } from 'react';

const authContext = createContext();

const graud = () => {
  return (
    <authContext.Provider value={{}}>
      <div>graud</div>
    </authContext.Provider>
  );
};

export default graud;
