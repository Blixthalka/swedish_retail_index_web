import ReactECharts from 'echarts-for-react';
import React from 'react';
import { formatShortDate } from '../utils/util';

import { graphic } from 'echarts';

function toolTipFormatterCompare(params) {
    return `${formatShortDate(params[0].name)} <br />
    <div style="display: flex; justify-content: space-between;"><div>${params[0].marker} <strong style="margin-right: 10px;">${params[0].seriesName}</strong></div>${new Intl.NumberFormat("se-SE", {minimumFractionDigits: 2}).format(params[0].value[1])}</div>
    <div style="display: flex; justify-content: space-between;"><div>${params[1].marker} <strong style="margin-right: 10px;">${params[1].seriesName}</strong></div>${new Intl.NumberFormat("se-SE", {minimumFractionDigits: 2}).format(params[1].value[1])}</div>
    `
}


function toolTipFormatter(params) {
    return `${formatShortDate(params[0].name)} <br />
    <div style="display: flex; justify-content: space-between;"><div>${params[0].marker} <strong style="margin-right: 10px;">${params[0].seriesName}</strong></div>${new Intl.NumberFormat("se-SE", {minimumFractionDigits: 2}).format(params[0].value[1])}</div>
    `
}

function Chart({ graph, ...other }) {
    if (!graph?.series || graph?.series.length <= 1) {
        return (<></>)
    }

    const series = [
        {
            data: graph.series.map(d => [d.date, d.value]),
            type: 'line',
            color: '#fff',
            showSymbol: false,
            smooth: true,
            datasetId: 'main',
            universalTransition: true,
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
            name: graph.main_name || "ads",
            z: 4
        },
    ]
    const hasCompare = graph.series[0]?.compare !== undefined

    if (hasCompare) {
        series.push({
            data: graph.series.map(d => [d.date, d.compare]),
            type: 'line',
            color: '#881337',
            showSymbol: false,
            smooth: true,
            datasetId: 'compare',
            universalTransition: true,
            lineStyle: {
                width: 2
            },
            name: graph.compare_name,
            z: 3
        })
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
                fontSize: 14,
                showMinLabel: false,
                showMaxLabel: false,
                formatter: formatShortDate
            }
        },
        yAxis: {
            type: 'value',
            min: Number(graph.min) * 0.99,
            //min: Number(graph.min),
            splitLine: {
                lineStyle: {
                    type: "dashed",
                    color: "#1f2937"
                }
            },
            axisLine: {
                onZero: false
            },
            boundaryGap: false,
            position: 'right',
            axisLabel: {
                show: true,
                inside: true,
                showMinLabel: false,
                showMaxLabel: true,
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
            formatter: hasCompare ? toolTipFormatterCompare : toolTipFormatter
        },
        grid: {
            left: '5px',
            right: '5px',
            bottom: '0',
            top: '5px',
            containLabel: true
        },
        series: series,
        stateAnimation: {
            duration: 10000
        }


    };


    return (
        <div {...other} style={{ marginRight: '-5px', marginLeft: '-5px' }}>
            <ReactECharts
                option={option}
                notMerge={true}
                lazyUpdate={true}
            />
        </div>

    );
}

export default Chart;
