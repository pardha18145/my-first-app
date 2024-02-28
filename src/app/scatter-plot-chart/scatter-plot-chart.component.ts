import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-scatter-plot-chart',
  templateUrl: './scatter-plot-chart.component.html',
  styleUrls: ['./scatter-plot-chart.component.css']
})
export class ScatterPlotChartComponent implements OnInit {

  ngOnInit(): void {
    // Churn rate data over time (dummy data)
    const churnData = [
      {"time": "Jan", "churnRate": 0.1},
      {"time": "Feb", "churnRate": 0.15},
      {"time": "Mar", "churnRate": 0.12},
      {"time": "Apr", "churnRate": 0.18},
      {"time": "May", "churnRate": 0.2},
      {"time": "Jun", "churnRate": 0.17}
    ];

    // Margin convention
    const margin = {top: 20, right: 30, bottom: 40, left: 60};
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // SVG
    const svg = d3.select("#scatterplot-container").append("svg")
      .attr("viewBox", [0, 0, width + margin.left + margin.right, height + margin.top + margin.bottom])
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Scales
    const x = d3.scaleBand()
      .domain(churnData.map(d => d.time))
      .range([0, width])
      .padding(0.1);
    
    const y = d3.scaleLinear()
      .domain([0, d3.max(churnData, d => d.churnRate)])
      .nice()
      .range([height, 0]);

    // Axes
    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y);

    // Draw circles for churn rate
    svg.selectAll("circle")
      .data(churnData)
      .join("circle")
      .attr("cx", d => x(d.time))
      .attr("cy", d => y(d.churnRate))
      .attr("r", 5)
      .attr("fill", "steelblue");

    // Draw axes
    svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis)
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-0.5em")
      .attr("dy", "0.15em")
      .attr("transform", "rotate(-45)");

    svg.append("g")
      .call(yAxis);

    // Add X axis label
    svg.append("text")
      .attr("x", width / 2)
      .attr("y", height + margin.top)
      .attr("text-anchor", "middle")
      .text("Time Period");

    // Add Y axis label
    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", 0 - (height / 2))
      .attr("y", 0 - margin.left)
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Churn Rate");
  }
}
