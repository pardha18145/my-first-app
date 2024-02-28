// bubble-chart.component.ts

import { Component, ElementRef, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.css']
})
export class BubbleChartComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.createBubbleChart();
  }

  createBubbleChart() {
    const data = [
      { name: 'Occasional Riders', rides: 500, expenditure: 3000, type: 'Tourists' },
      { name: 'Regular Riders', rides: 1500, expenditure: 6000, type: 'Daily Commuters' },
      { name: 'Frequent Riders', rides: 3000, expenditure: 9000, type: 'Business Travellers' }
    ];

    const svg = d3.select(this.elementRef.nativeElement).select('.bubble-chart');

    const width = 630;
    const height = 475;
    const margin = { top: 20, right: 20, bottom: 70, left: 70 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    const xScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.rides)])
      .range([0, chartWidth]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.expenditure)])
      .range([chartHeight, 0]);

    const rScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.rides)])
      .range([5, 30]);

    const color = d3.scaleOrdinal(d3.schemeCategory10)
      .domain(data.map(d => d.type));

    svg.attr('width', width)
      .attr('height', height);

    const chart = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    chart.append('g')
      .attr('transform', `translate(0, ${chartHeight})`)
      .call(d3.axisBottom(xScale))
      .append('text')
      .attr('x', chartWidth / 2)
      .attr('y', margin.bottom - 10)
      .attr('text-anchor', 'middle')
      .text('Rides');

    chart.append('g')
      .call(d3.axisLeft(yScale))
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', -margin.left + 10)
      .attr('x', -chartHeight / 2)
      .attr('text-anchor', 'middle')
      .text('Expenditure');

    const legend = chart.append('g')
      .attr('transform', `translate(${chartWidth - 100}, ${margin.top})`)
      .selectAll('g')
      .data(data.map(d => d.type))
      .enter().append('g')
      .attr('transform', (d, i) => `translate(0, ${i * 20})`);

    legend.append('circle')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', 6)
      .style('fill', color);

    legend.append('text')
      .attr('x', 12)
      .attr('y', 0)
      .attr('dy', '0.35em')
      .text(d => d);

    chart.selectAll('.bubble')
      .data(data)
      .enter().append('circle')
      .attr('class', 'bubble')
      .attr('cx', d => xScale(d.rides))
      .attr('cy', d => yScale(d.expenditure))
      .attr('r', d => rScale(d.rides))
      .style('fill', d => color(d.type))
      .style('opacity', 0.7)
      .on('mouseover', function (event, d) {
        d3.select(this).attr('stroke', 'black').attr('stroke-width', 2);
        showTooltip(d);
      })
      .on('mouseout', function (event, d) {
        d3.select(this).attr('stroke', 'none');
        hideTooltip();
      });

    function showTooltip(d) {
      const tooltip = d3.select('.bubble-tooltip');
      tooltip.html(`<strong>${d.name}</strong><br>Rides: ${d.rides}<br>Expenditure: $${d.expenditure}`);
      tooltip.style('visibility', 'visible');
    }

    function hideTooltip() {
      const tooltip = d3.select('.bubble-tooltip');
      tooltip.style('visibility', 'hidden');
    }
  }

}
