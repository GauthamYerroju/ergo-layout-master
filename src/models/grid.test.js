import Grid from './grid';
import { Cluster } from './cluster';


/*
  - width
  - height
  makeCells
  add
  remove
  collisions
  hasCollision
*/

test('Create cell structure for given minWidth and minHeight', () => {
  const g = new Grid(4, 3)
  expect(g.cells.length).toBe(4)
  g.cells.forEach(col => {
    expect(col.length).toBe(3)
  })
});

test('minWidth and minHeight should be respected', () => {
  const g = new Grid(4, 3)
  expect(g.width).toBe(4)
  expect(g.height).toBe(3)

  const c = new Cluster(0, 0, 2, 1)
  g.add(c)

  expect(g.width).toBe(4)
  expect(g.height).toBe(3)
});


test('width and height should react to clusters', () => {
  const g = new Grid(4, 3)
  const c1 = new Cluster(0, 0, 5, 4)
  g.add(c1)
  expect(g.width).toBe(5)
  expect(g.height).toBe(4)

  g.remove(c1)
  const c2 = new Cluster(3, 1, 5, 4)
  g.add(c2)
  expect(g.width).toBe(8)
  expect(g.height).toBe(5)
});

