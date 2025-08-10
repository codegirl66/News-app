import { useState } from "react";
import { Navbar } from './components/Navbar';
import { NewsBoard } from './components/NewsBoard';

export const App = () => {
  const [category, setCategory] = useState("general");

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} country="us" />
    </div>
  );
};

export default App;
