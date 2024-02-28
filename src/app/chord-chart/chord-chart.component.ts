// chord-chart.component.ts
import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-chord-chart',
  templateUrl: './chord-chart.component.html',
  styleUrls: ['./chord-chart.component.css']
})
export class ChordChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Actual group and chord labels for demonstration
    const groupLabels = ['Airport', 'City Center', 'Shopping Mall'];
    const chordLabels = ['Airport to City Center', 'City Center to Shopping Mall', 'Shopping Mall to Airport'];

    // Sample data for demonstration (change this to your actual matrix data)
    const matrix = [
      [10, 20, 30],
      [40, 50, 60],
      [70, 80, 90]
    ];

    // Set up dimensions
    const width = 600;
    const height = 400;
    const outerRadius = Math.min(width, height) * 0.5 - 40;
    const innerRadius = outerRadius - 30;

    // Set up SVG container
    const svg = d3.select('#chord-chart-container')
                  .append('svg')
                  .attr('width', width)
                  .attr('height', height)
                  .append('g')
                  .attr('transform', `translate(${width / 2}, ${height / 2})`);

    // Set up chord layout
    const chordLayout = d3.chord()
                          .padAngle(0.05)
                          .sortSubgroups(d3.descending)
                          .sortChords(d3.descending);

    // Generate chords
    const chords = chordLayout(matrix);

    // Set up arc generator
    const arc = d3.arc()
                  .innerRadius(innerRadius)
                  .outerRadius(outerRadius);

    // Set up ribbon generator
    const ribbon = d3.ribbon()
                     .radius(innerRadius);

    // Add ribbons for chords
    svg.append('g')
       .selectAll('path')
       .data(chords)
       .enter()
       .append('path')
       .attr('d', ribbon)
       .style('fill', '#2196F3') // Blue color for demonstration
       .style('opacity', 0.7)
       .style('stroke', '#fff')
       .style('stroke-width', '1px')
       .on('mouseover', showTooltip)
       .on('mousemove', moveTooltip)
       .on('mouseleave', hideTooltip);




// Inside ngOnInit method after adding ribbons

// Add group labels
svg.append('g')
   .selectAll('g')
   .data(chords.groups)
   .enter()
   .append('text')
   .attr('class', 'group-label')
   .attr('transform', d => `rotate(${(d.startAngle + d.endAngle) / 2 * 180 / Math.PI - 90}) translate(${outerRadius + 10})`)
   .attr('dy', '0.35em')
   .attr('text-anchor', d => (d.startAngle + d.endAngle) / 2 > Math.PI ? 'end' : null)
   .style('font-size', '12px')
   .style('font-family', 'Arial, sans-serif')
   .style('fill', '#333') // Adjust color as needed
   .text((d, i) => groupLabels[i]);

// Add chord labels
svg.append('g')
   .selectAll('g')
   .data(chords)
   .enter()
   .append('text')
   .attr('class', 'chord-label')
   .attr('transform', d => {
       const angle = (d.source.startAngle + d.source.endAngle) / 2;
       const midRadius = Math.min(outerRadius, innerRadius) + 20; // Adjust the radius to position labels closer to the center
       const x = midRadius * Math.cos(angle); // X coordinate based on angle
       const y = midRadius * Math.sin(angle); // Y coordinate based on angle
       return `translate(${x}, ${y}) rotate(${angle * 180 / Math.PI - 90}) rotate(${angle >= Math.PI ? 180 : 0})`;
   })
   .attr('dy', '0.35em')
   .attr('text-anchor', d => (d.source.startAngle + d.source.endAngle) / 2 > Math.PI ? 'end' : null)
   .style('font-size', '10px')
   .style('font-family', 'Arial, sans-serif')
   .style('fill', '#666')
   .text((d, i) => chordLabels[i]);








    // Function to show tooltip
    function showTooltip(d) {
      d3.select(this).attr('opacity', 0.8);
      const tooltip = d3.select('#chord-tooltip');
      tooltip.style('display', 'block')
             .html(chordLabels[d.source.index]);
    }

    // Function to move tooltip
    function moveTooltip(d) {
      const tooltip = d3.select('#chord-tooltip');
      tooltip.style('top', (d3.event.pageY - 10) + 'px')
             .style('left', (d3.event.pageX + 10) + 'px');
    }

    // Function to hide tooltip
    function hideTooltip() {
      d3.select(this).attr('opacity', 1);
      const tooltip = d3.select('#chord-tooltip');
      tooltip.style('display', 'none');
    }
  }
}
