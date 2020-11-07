import React, { useEffect, useState } from 'react';
import G6, { Graph } from '@antv/g6';

import getConfig from './getConfig';
import useWindowDimensions from '../hooks/useWindowDimensions';

import './App.css';

const data = {
  nodes: [
    {
      id: '1',
      label: 'Node 1',
    },
    {
      id: '2',
      label: 'Node 2',
      type: 'rect-jsx',
      description: 'this is a very long description'
    },
    {
      id: '3',
      label: 'Node 3',
    },
    {
      id: '4',
      label: 'Node 4',
    },
    {
      id: '5',
      label: 'Node 5',
    },
    {
      id: '6',
      label: 'Node 6',
    },
    {
      id: '7',
      label: 'Node 7',
    },
    {
      id: '8',
      label: 'Node 8',
    },
    {
      id: '9',
      label: 'Node 9',
    },
  ],
  edges: [
    {
      source: '1',
      target: '2',
      data: {
        type: 'name1',
        amount: '100,000,000,00 元',
        date: '2019-08-03',
      },
    },
    {
      source: '1',
      target: '3',
      data: {
        type: 'name2',
        amount: '100,000,000,00 元',
        date: '2019-08-03',
      },
    },
    {
      source: '2',
      target: '5',
      data: {
        type: 'name1',
        amount: '100,000,000,00 元',
        date: '2019-08-03',
      },
    },
    {
      source: '5',
      target: '6',
      data: {
        type: 'name2',
        amount: '100,000,000,00 元',
        date: '2019-08-03',
      },
    },
    {
      source: '3',
      target: '4',
      data: {
        type: 'name3',
        amount: '100,000,000,00 元',
        date: '2019-08-03',
      },
    },
    {
      source: '4',
      target: '7',
      data: {
        type: 'name2',
        amount: '100,000,000,00 元',
        date: '2019-08-03',
      },
    },
    {
      source: '1',
      target: '8',
      data: {
        type: 'name2',
        amount: '100,000,000,00 元',
        date: '2019-08-03',
      },
    },
    {
      source: '1',
      target: '9',
      data: {
        type: 'name3',
        amount: '100,000,000,00 元',
        date: '2019-08-03',
      },
    },
  ],
};

const App = () => {
  const [graph, setGraph] = useState<Graph | null>(null);

  const ref = React.useRef(null);

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    if (ref.current) {
      setGraph(new G6.Graph(getConfig(height, width, ref)));
    }
  }, []);

  useEffect(() => {
    if (graph) {
      graph.read(data);
    }
  }, [graph]);

  // @ts-ignore
  window.g = graph;

  return (
    <div className="App">
      <div ref={ref}></div>
    </div>
  );
};

export default App;
