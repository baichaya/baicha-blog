# vue

## vue scss 使用 var 变量

```md
<template>
    <div class="box" :style="{ '--width': width }"></div>
</template>

<style lang="scss" scoped>
   .box {
      width: var(--width);
   }
</style>
```

## echarts 效果

![vue](/images/jt1.png)

```md
<script setup lang="ts">
 const chartOption = ref({
  grid: {
    top: '5%',
    left: '3%',
    right: '1%',
    bottom: '1%'
  },
  xAxis: {
    show: false
  },
  yAxis: [
    {
      axisLine: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        interval: 0,
        inside: true,
        color: '#d9f1fd',
        align: 'left',
        verticalAlign: 'bottom',
        padding: [0, 0, 10, 0],
        formatter: function (value, index) {
          return '{title|' + value + '}';
        },
        rich: {
          title: {
            width: 50,
            fontSize: 12
          }
        }
      },
      // 柱状图名
      data: ['用电量', '用水量']
    },
    {
      triggerEvent: true,
      show: true,
      inverse: true,
      data: [100, 100],
      axisLine: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        margin: 0,
        interval: 0,
        inside: true,
        padding: [0, 0, 10, 0],
        color: '#d9f1fd',
        fontSize: 12,
        align: 'right',
        verticalAlign: 'bottom',
        formatter: function (value, index) {
          return '';
        }
      }
    }
  ],
  series: [
    {
      name: 'bar',
      type: 'bar',
      barGap: '-65%',
      barWidth: 19,
      itemStyle: {
        borderColor: 'rgba(217, 217, 217, 0.5)',
        borderWidth: 1,
        color: 'rgba(102, 102, 102,0)'
      },
      z: 1,
      data: [100, 100]
    },
    {
      name: 'data',
      type: 'bar',
      barGap: '-80%',
      barWidth: 10,
      itemStyle: {
        show: true,
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          {
            offset: 0,
            color: 'rgba(16, 66, 142, 1)'
          },
          {
            offset: 1,
            color: 'rgba(0, 101, 255, 1)'
          }
        ])
      },
      max: 1,
      labelLine: {
        show: true
      },
      z: 2,
      data: []
    },
    {
      name: 'pictorialBar',
      type: 'pictorialBar',
      symbol: 'rect',
      symbolSize: [4, 15],
      zlevel: 13,
      barMinHeight: 1,
      symbolPosition: 'end',
      symbolOffset: [3, 2],
      itemStyle: {
        color: '#d9f1fd',
        shadowBlur: 5,
        shadowColor: 'rgba(0, 0, 0, 0.72)'
      },
      data: []
    }
  ]
});
</script>
```
