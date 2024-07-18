import { useContext } from 'react';
import { LevelContext } from './LevelContext.jsx';

export default function Section({ children }) {
  const level = useContext(LevelContext);
  return (
    <section className="card p-2 m-3">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
