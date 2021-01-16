import React, {useState} from 'react';
import data from './components/data';
import List from './components/List';
function App(props) {
  const [people, setPeople] = useState(data);

  return (
  <main>
    <section className="container">
      <h3>{people.length} birthdays today! 🎉</h3>
      <List people={people} />
      <button onClick={() => setPeople([])}>
        clear all
      </button>

    </section>
  </main>
  );
}

export default App;
