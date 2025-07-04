console.clear();

import { getRandomColor } from './utils/randomColor.js';
import Circle from './components/Circle/Circle.js';
import Square from './components/Square/Square.js';
import Pentagon from './components/Pentagon/Pentagon.js';

const root = document.getElementById('root');

const circle = Circle();
const square = Square();
const pentagon = Pentagon();

root.append(circle, square, pentagon);
