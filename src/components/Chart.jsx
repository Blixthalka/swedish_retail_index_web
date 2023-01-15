import ReactECharts from 'echarts-for-react';
import React, { useEffect, useState } from 'react';
import { formatShortDate, formatDate } from '../utils/util';

import { graphic } from 'echarts';

function Chart({ className, data }) {
    if (!data?.graph || data?.graph.length <= 1) {
        return (<></>)
    }

    let option = {
        backgroundColor: "transparent",
        textStyle: {
            color: '#9ca3af',
            fontFamily: 'JetBrains Mono, sans-serif',
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                fontSize: 14,
                showMinLabel: false,
                showMaxLabel: false,
                formatter: function (value) {
                    return formatShortDate(value);
                }
            }
        },
        yAxis: {
            type: 'value',
            min: Math.round(Number(data.min) - 1),
            max: Math.round(Number(data.max) + 1),
            splitLine: {
                lineStyle: {
                    type: "dashed",
                    color: "#1f2937"
                }
            },
            minInterval: 1,
            axisLabel: {
                show: false,
                fontSize: 14,
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
            formatter: function (params) {
                console.log(JSON.stringify(params[0]))
                const p = params[0]
                return `${formatShortDate(p.name)} <br />
                        <strong>${p.value[1]}</strong>`;
            }
        },
        grid: {
            left: '0',
            right: '0',
            bottom: '0',
            top: '0',
            containLabel: true
        },
        series: [
            {
                data: data.graph.map(d => [d.date, d.value]),
                type: 'line',
                color: '#fff',
                showSymbol: false,
                smooth: true,
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
                  }
            }
        ]
    };


    return (
        <div className={className}>
            <ReactECharts
                option={option}
                notMerge={true}
                lazyUpdate={true}
            />
        </div>

    );
}

export default Chart;
