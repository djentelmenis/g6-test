import React from 'react';
import { GraphOptions } from '@antv/g6/lib/types';
import G6, { Grid, Minimap } from '@antv/g6';

G6.registerNode('rect-jsx',
  (cfg) => `
    <group>
      <rect>
        <rect style={{
          width: 150,
          height: 20,
          fill: ${cfg.color},
          radius: [6, 6, 0, 0],
          cursor: 'move'，
          stroke: ${cfg.color}
        }} draggable="true">
          <text style={{
            marginTop: 2,
            marginLeft: 75,
            textAlign: 'center',
            fontWeight: 'bold',
            fill: '#fff' }}>{{label}}</text>
        </rect>
        <rect style={{
          width: 150,
          height: 55,
          stroke: ${cfg.color},
          fill: #ffffff,
          radius: [0, 0, 6, 6],
        }}>
          <text style={{ marginTop: 5, marginLeft: 3, fill: '#333', marginLeft: 4}}>Desc: {{description}}</text>
        </rect>
      </rect>
    </group>`
  )

const getConfig = (height: number, width: number, ref: React.MutableRefObject<null>): GraphOptions => {
  const minimap = new Minimap({
    size: [100, 100],
    className: 'minimap',
    type: 'delegate',
  });
  const grid = new Grid();

  const defaultNode = {
    type: 'modelRect',
    size: [270, 80],
    style: {
      radius: 5,
      stroke: '#69c0ff',
      fill: '#ffffff',
      lineWidth: 1,
      fillOpacity: 1,
    },
    // label configurations
    labelCfg: {
      style: {
        fill: '#595959',
        fontSize: 14,
      },
      offset: 10,
    },
    // left rect
    preRect: {
      show: true,
      width: 4,
      fill: '#40a9ff',
      radius: 2,
    },
    // configurations for the icon
    logoIcon: {
      // whether to show the icon
      show: false,
      x: 0,
      y: 0,
      // the image url for the icon, string type
      img:
        'https://gw.alipayobjects.com/zos/basement_prod/4f81893c-1806-4de4-aff3-9a6b266bc8a2.svg',
      width: 16,
      height: 16,
      // adjust the offset along x-axis for the icon
      offset: 0,
    },
    // configurations for state icon
    stateIcon: {
      // whether to show the icon
      show: false,
      x: 0,
      y: 0,
      // the image url for the icon, string type
      img:
        'https://gw.alipayobjects.com/zos/basement_prod/300a2523-67e0-4cbf-9d4a-67c077b40395.svg',
      width: 16,
      height: 16,
      // adjust hte offset along x-axis for the icon
      offset: -5,
    },
    // linkpoints
    anchorPoints: [
      [0, 0.5],
      [1, 0.5],
      [0.5, 0],
      [0.5, 1],
    ],
    // configurations for the four linkpoints
    linkPoints: {
      top: true,
      right: true,
      bottom: true,
      left: true,
      // the size of the linkpoints' circle
      size: 10,
      lineWidth: 1,
      fill: '#fff',
      stroke: '#72CC4A',
    },
  }

  return {
    container: ref.current!,
    width: width - 10,
    height: height - 110,
    linkCenter: false,
    modes: {
      default: ['drag-canvas', 'zoom-canvas', 'drag-node'],
      edit: ['click-select'],
    },
    plugins: [minimap, grid],
    layout: {
      type: 'dagre',
      rankdir: 'TB',
    },
    animate: true,
    nodeStateStyles: {
      // @ts-ignore
      cursor: 'pointer',
    },
    edgeStateStyles: {
      // @ts-ignore
      cursor: 'pointer',
    },
    defaultNode,
    defaultEdge: {
      type: 'polyline',
      size: 1,
      style: {
        endArrow: true,
        radius: 20,
        offset: 0,
      },
      color: '#999'
    },
  };
};

export default getConfig;
