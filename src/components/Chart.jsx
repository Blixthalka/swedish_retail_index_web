import ReactECharts from 'echarts-for-react';
import React from 'react';
import { formatShortDate } from '../utils/util';

import { graphic } from 'echarts';

function Chart({ data, ...other }) {
    if (!data?.graph || data?.graph.length <= 1) {
        return (<></>)
    }
    console.log(data)

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
            min: Math.floor(Number(data.min) - 2),
            max: Math.ceil(Number(data.max) + 2),
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
                fontSize: 12,
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
            }
        },
        grid: {
            left: '0',
            right: '5px',
            bottom: '0',
            top: '5px',
            containLabel: true
        },
        series: [
            {

                data: data.graph.map(d => [d.date, d.compare]),
                type: 'line',
                color: '#4b5563',
                showSymbol: false,
                smooth: true,
                lineStyle: {
                    width: 2
                },
                name: data.compare_name
            },
            {
                data: data.graph.map(d => [d.date, d.value]),
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
                name: "SRI"
            },
        ]
    };


    return (
        <div {...other}>
            <ReactECharts
                option={option}
                notMerge={true}
                lazyUpdate={true}
            />
        </div>

    );
}

export default Chart;
