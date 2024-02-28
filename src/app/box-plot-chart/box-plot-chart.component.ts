import { Component, ElementRef, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-box-plot-chart',
  templateUrl: './box-plot-chart.component.html',
  styleUrls: ['./box-plot-chart.component.css']
})
export class BoxPlotChartComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.createBoxPlot();
  }

  private createBoxPlot(): void {
    // Sample CLV data for a cab company
    const data = [
      { group: 'Driver 1', value: [200, 300, 400, 500, 600] },
      { group: 'Driver 2', value: [250, 350, 450, 550, 650] },
      { group: 'Driver 3', value: [180, 280, 380, 480, 580] },
      // Add more data as needed
    ];

    // Chart dimensions
    const width = 600;
    const height = 430;
    const margin = { top: 20, right: 30, bottom: 50, left: 60 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Create SVG element
    const svg = d3.select(this.elementRef.nativeElement).append('svg')
      .attr('width', width)
      .attr('height', height);

    // Create scales
    const xScale = d3.scaleBand()
      .domain(data.map(d => d.group))
      .range([margin.left, width - margin.right])
      .paddingInner(0.1)
      .paddingOuter(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d3.max(d.value))])
      .nice()
      .range([height - margin.bottom, margin.top]);

    // Draw x axis
    svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale))
      .append('text')
      .attr('x', width / 2)
      .attr('y', margin.bottom - 10)
      .attr('fill', 'black')
      .attr('text-anchor', 'middle')
      .text('Driver');

    // Draw y axis
    svg.append('g')
      .attr('class', 'y-axis')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale))
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '-5.5em')
      .attr('text-anchor', 'end')
      .attr('fill', 'black')
      .text('CLV (USD)');

    // Draw box plots
    const boxPlotGroup = svg.selectAll('.box-plot')
      .data(data)
      .enter().append('g')
      .attr('class', 'box-plot')
      .attr('transform', d => `translate(${xScale(d.group) + xScale.bandwidth() / 2}, 0)`);

    // Draw box
    boxPlotGroup.append('rect')
      .attr('x', -20)
      .attr('y', d => yScale(d3.max(d.value)))
      .attr('width', 40)
      .attr('height', d => yScale(d3.min(d.value)) - yScale(d3.max(d.value)))
      .attr('fill', 'lightblue');

    // Draw median line
    boxPlotGroup.append('line')
      .attr('x1', -20)
      .attr('y1', d => yScale(d3.median(d.value)))
      .attr('x2', 20)
      .attr('y2', d => yScale(d3.median(d.value)))
      .attr('stroke', 'black')
      .attr('stroke-width', 2);
  }
}
