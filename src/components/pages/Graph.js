import React, { Component } from 'react';
import {
	// main component
	Chart,
	// graphs
	Bars, Cloud, Dots, Labels, Lines, Pies, RadialLines, Ticks, Title,
	// wrappers
	Layer, Animate, Transform, Handlers,
	// helpers
	helpers, DropShadow, Gradient
} from 'rumble-charts';

const series = [ {
	data: [ 10, 20, 30,40,210,70,240,80,78 ]
},
{
	data: [ 130, 170, 190,120,-70,190,90 ]
},
{
	data: [ 110, 150, 180,130,30,130,67 ]
}
];

class Graph extends React.Component {
	render() {
		return <Chart width={1200} height={500} series={series} minY={-100} maxY={500}
			scaleX={{direction: 1}}
			scaleY={{direction: 1}}
		>
			<Lines
				interpolation='monotone' // linear, cardinal, step, basis, bundle
			/>
		</Chart>;
	}
}

export default Graph;
