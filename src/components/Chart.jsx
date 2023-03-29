import ReactECharts from 'echarts-for-react';
import React from 'react';
import { formatShortDate } from '../utils/util';

import { graphic } from 'echarts';

function toolTipFormatter(params) {
    return `${formatShortDate(params[0].name)} <br />
    <div style="display: flex; justify-content: space-between;"><div>${params[0].marker} <strong style="margin-right: 10px;">${params[0].seriesName}</strong></div>${new Intl.NumberFormat("se-SE", {minimumFractionDigits: 2}).format(params[0].value[1])}</div>
    <div style="display: flex; justify-content: space-between;"><div>${params[1].marker} <strong style="margin-right: 10px;">${params[1].seriesName}</strong></div>${new Intl.NumberFormat("se-SE", {minimumFractionDigits: 2}).format(params[1n    ].value[1])}</div>
    `
}

function Chart({ graph, ...other }) {
    if (!graph?.series || graph?.series.length <= 1) {
        return (<></>)
    }

    let option = {
        backgroundColor: "transparent",
        textStyle: {
            color: '#9ca3af',
            fontFamily: 'JetBrains Mono, sans-serif',
        },
        legend: {
            show: false,
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                fontSize: 12,
                showMinLabel: false,
                showMaxLabel: false,
                formatter: formatShortDate
            }
        },
        yAxis: {
            type: 'value',
            min: Math.floor(Number(graph.min) - 2),
            max: Math.ceil(Number(graph.max) + 2),
            splitLine: {
                lineStyle: {
                    type: "dashed",
                    color: "#1f2937"
                }
            },
            minInterval: 1,
            position: 'right',
            axisLabel: {
                show: true,
                inside: true,
                showMinLabel: false,
                fontSize: 12
            }
        },
        tooltip: {
            trigger: 'axis',
            borderColor: '#1f2937',
            backgroundColor: "#101011",
            textStyle: {
                fontSize: 14,
                color: "#fff"
            },
            axisPointer: {
                type: 'line'
            },
            formatter: toolTipFormatter
         },
        grid: {
            left: '5px',
            right: '5px',
            bottom: '0',
            top: '5px',
            containLabel: true
        },
        series: [
            {
                data: graph.series.map(d => [d.date, d.value]),
                type: 'line',
                color: '#fff',
                showSymbol: false,
                smooth: true,
                lineStyle: {
                    width: 2
                },
                areaStyle: {
                    color: new graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(255, 255, 255, 0.00)'
                        }])
                },
                name: graph.main_name,
                z: 4
            },
            {

                data: graph.series.map(d => [d.date, d.compare]),
                type: 'line',
                color: '#881337',
                showSymbol: false,
                smooth: true,
                lineStyle: {
                    width: 2
                },
                name: graph.compare_name,
                z:3
            },


        ]
    };


    return (
        <div {...other} style={{marginRight: '-5px', marginLeft: '-5px'}}>
            <ReactECharts
                option={option}
                notMerge={true}
                lazyUpdate={true}
            />
        </div>

    );
}

export default Chart;
