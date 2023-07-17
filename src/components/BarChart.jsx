import ReactECharts from 'echarts-for-react';
import React from 'react';
import { formatMonthYearDate } from '../utils/util';




function Chart({ data, ...other }) {

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
            type: "category",
            axisLabel: {
                fontSize: 12,
                formatter: formatMonthYearDate
            },
            axisPointer: {
                type: 'none'
            },
        },
        yAxis: {
            type: 'value',
            position: 'right',
            splitLine: {
                lineStyle: {
                    type: "dashed",
                    color: "#1f2937"
                }
            },
            axisLabel: {
                show: false,
                inside: false,
                showMinLabel: false,
                fontSize: 12
            },

        },
        tooltip: {
            trigger: 'axis',
            borderColor: '#1f2937',
            backgroundColor: "#101011",
            textStyle: {
                fontSize: 14,
                color: "#fff"
            },
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
                data: data.map(d => [d.date, d.owners]),
                type: 'bar',
                color: '#2563eb',
                name: "Ägare",
                label: {
                    show: true,
                    position: 'inside',
                    formatter: function(params) {
                        return new Intl.NumberFormat("en-GB", {minimumFractionDigits: 0}).format((params.data[1]))
                    }
                  },
            },
        ],
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
