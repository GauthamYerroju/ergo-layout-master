import './App.css';
import Grid from './core/grid.js'
import { FunctionCluster, NumberCluster, AlphaCluster } from './core/cluster'

function App() {
  const g = new Grid(2, 1)

  const c1 = new NumberCluster(1, 1)
  g.add(c1)
  
  const c2 = new AlphaCluster(1, 2)
  g.add(c2)
  
  const c3 = new FunctionCluster(0, 0)
  g.add(c3)

  g.log()
  
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main className="App-main">
      </main>
    </div>
  );
}

export default App;
