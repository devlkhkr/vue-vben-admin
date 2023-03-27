<template>
  <div ref="chartRef" :style="{ height, width }"></div>
</template>
<script lang="ts">
  import { defineComponent, PropType, ref, Ref, onMounted } from 'vue';
  import { useECharts } from '/@/hooks/web/useECharts';

  export default defineComponent({
    props: {
      width: {
        type: String as PropType<string>,
        default: '100%',
      },
      height: {
        type: String as PropType<string>,
        default: 'calc(100vh - 78px)',
      },
    },
    setup() {
      const chartRef = ref<HTMLDivElement | null>(null);
      const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);
      const dataAll = [389, 259, 262, 324, 232, 176, 196, 214, 133, 370];
      const yAxisData = [
        '원인1',
        '원인2',
        '원인3',
        '원인4',
        '원인5',
        '원인6',
        '원인7',
        '원인8',
        '원인9',
        '원인10',
      ];
      onMounted(() => {
        setOptions({
          backgroundColor: '#0f375f',
          title: [
            {
              text: '각 채널 불만 점유율',
              left: '2%',
              top: '1%',
              textStyle: {
                color: '#fff',
                fontSize: 14,
              },
            },
            {
              text: '불만 원인 TOP10',
              left: '40%',
              top: '1%',
              textStyle: {
                color: '#fff',
                fontSize: 14,
              },
            },
            {
              text: '각 레벨 불만 점유율',
              left: '2%',
              top: '50%',
              textStyle: {
                color: '#fff',
                fontSize: 14,
              },
            },
          ],
          grid: [{ left: '50%', top: '7%', width: '45%', height: '90%' }],
          tooltip: {
            formatter: '{b} ({c})',
          },
          xAxis: [
            {
              gridIndex: 0,
              axisTick: { show: false },
              axisLabel: { show: false },
              splitLine: { show: false },
              axisLine: { show: false },
            },
          ],
          yAxis: [
            {
              gridIndex: 0,
              interval: 0,
              data: yAxisData.reverse(),
              axisTick: { show: false },
              axisLabel: { show: true },
              splitLine: { show: false },
              axisLine: { show: true, lineStyle: { color: '#6173a3' } },
            },
          ],
          series: [
            {
              name: '각 채널 불만 점유율',
              type: 'pie',
              radius: '30%',
              center: ['22%', '25%'],
              data: [
                { value: 335, name: '고객센터 전화' },
                { value: 310, name: '아우디 공식 웹사이트' },
                { value: 234, name: '미디어 노출' },
                { value: 135, name: '품질검사원' },
                { value: 105, name: '기타' },
              ],
              labelLine: { show: false },
              label: {
                show: true,
                formatter: '{b} \n ({d}%)',
                color: '#B1B9D3',
              },
            },
            {
              name: '각 레벨의 불만 비율',
              type: 'pie',
              radius: '30%',
              center: ['22%', '75%'],
              labelLine: { show: false },
              data: [
                { value: 335, name: 'A레벨' },
                { value: 310, name: 'B레벨' },
                { value: 234, name: 'C레벨' },
                { value: 135, name: 'D레벨' },
              ],
              label: {
                show: true,
                formatter: '{b} \n ({d}%)',
                color: '#B1B9D3',
              },
            },
            {
              name: '최다 불만 사유 TOP 10',
              type: 'bar',
              xAxisIndex: 0,
              yAxisIndex: 0,
              barWidth: '45%',
              itemStyle: { color: '#86c9f4' },
              label: { show: true, position: 'right', color: '#9EA7C4' },
              data: dataAll.sort(),
            },
          ],
        });
      });
      return { chartRef };
    },
  });
</script>
