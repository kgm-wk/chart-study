document.addEventListener('DOMContentLoaded', function() {
  const chart = Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'タイトル文字'
    },
    xAxis: {
      categories: ['部門', '部署', '会社']
    },
    yAxis: {
      title: {
        text: '詳細'
      }
    },
    series: [{
      name: '先週',
      data: [1, -5, 4]
    }, {
      name: '今週',
      data: [5, 7, 3]
    }]
  });
  const chart2 = Highcharts.chart('container_extra', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'タイトル文字'
    },
    xAxis: {
      categories: ['部門', '部署', '会社']
    },
    yAxis: {
      title: {
        text: '詳細'
      }
    },
    series: [{
      name: '先週',
      data: [1, 0, 4]
    }, {
      name: '今週',
      data: [5, 7, 3]
    }]
  });
});