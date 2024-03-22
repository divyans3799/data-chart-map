import React, { useEffect } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { scaleLinear } from 'd3-scale';
import { hexbin } from 'd3-hexbin';
import hex from "./../../images/Hex.svg"
import './overview.css'


const Hexmap = () => {

    useEffect(() => {
        const hexmap = () => {
            const opts = {
                width: 960,
                height: 500,
                margin: { top: 20, right: 10, bottom: 20, left: 10 }
            };

            const color = scaleLinear()
                .domain([1, 255])
                .range(['#fff', '#e5e5e5'])
                .interpolate(d3.interpolateHcl);

            function exports(_selection) {
                const svg = _selection
                    .append('svg')
                    .attr('width', opts.width)
                    .attr('height', opts.height);

                const projection = d3.geoMercator()
                    .rotate([0, 0])
                    .scale(140)
                    .center([12, 25]);

                const path = d3.geoPath()
                    .projection(projection);

                d3.json('https://gist.githubusercontent.com/mbostock/4090846/raw/d534aba169207548a8a3d670c9c2cc719ff05c47/world-50m.json', function (error, world) {
                    if (error) throw error;

                    svg.append('path')
                        .datum(topojson.feature(world, world.objects.land))
                        .attr('d', path)
                        .attr('fill', 'tomato');

                    const hexagons = generateHexagons(opts);

                    svg.selectAll('.hexagon')
                        .data(hexagons)
                        .enter().append('path')
                        .attr('class', 'hexagon')
                        .attr('d', hexbin.hexagon(4.5))
                        .attr('transform', function (d) {
                            return 'translate(' + d.x + ',' + d.y + ')';
                        }).style('fill', function (d) {
                            return color(d.mean);
                        });
                });
            }

            for (const key in opts) {
                exports[key] = getSet(key, exports).bind(opts);
            }

            return exports;
        };

        const chart = hexmap();

        d3.select('#vis').call(chart);

    }, []);

    function generateHexagons(opts) {
        const points = [];
        const hexagons = [];

        const canvas = document.createElement('canvas');
        canvas.width = opts.width;
        canvas.height = opts.height;

        const context = canvas.getContext('2d');

        const image = new Image();
        image.crossOrigin = "Anonymous";
        image.src = 'https://gist.githubusercontent.com/mbostock/4090846/raw/d534aba169207548a8a3d670c9c2cc719ff05c47/world-50m.json';
        image.onload = function () {
            context.drawImage(image, 0, 0, opts.width, opts.height);
            const imageData = context.getImageData(0, 0, opts.width, opts.height);

            for (let i = 0, n = opts.width * opts.height * 4, d = imageData.data; i < n; i += 4) {
                points.push([i / 4 % opts.width, Math.floor(i / 4 / opts.width), d[i]]);
            }

            const hexbinFunction = hexbin().size([opts.width, opts.height]);
            hexbinFunction(points).forEach(function (d) {
                d.mean = d3.mean(d, function (p) {
                    return p[2];
                });
                hexagons.push(d);
            });
        };

        return hexagons;
    }

    function getSet(option, component) {
        return function (_) {
            if (!arguments.length) {
                return this[option];
            }

            this[option] = _;
 
            return component;
        };
    }

    return (
      <div>
        <div className='map' >
    <img src={hex} alt="map" className='map-container' />
        <div id="vis"></div>
        
   
    </div>
    </div>
    );
}

export default Hexmap;








