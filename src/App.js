import './App.css';
import Grid from './core/grid.js'
import Cluster from './core/cluster'

function App() {
  const g = new Grid(2, 1)
  // console.log(g)

  const c1 = new Cluster(0, 0, 4, 3, 'a')
  g.add(c1)
  // console.log(g.width, g.height)
  
  const c2 = new Cluster(1, 2, 5, 4, 'b')
  g.add(c2)
  // console.log(g.width, g.height)
  
  const c3 = new Cluster(0, 0, 16, 9, null)
  g.add(c3)
  console.log(g.width, g.height)

  // g.remove(c3)
  // console.log(g.width, g.height)

  console.log('=========================')
  console.log(g.keys)
  
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
