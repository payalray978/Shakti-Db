Highcharts.chart("container", {
  chart: {
    type: "areaspline",
  },
  title: {
    // text: "Moose and deer hunting in Norway, 2000 - 2021",
    align: "left",
    text: null,
  },
  exporting: {
    buttons: {
      contextButton: {
        enabled: false,
      },
    },
  },
  //    events: {
  //       load: function () {
  //         this.renderer.boxWrapper.element.childNodes[2].style.display = 'none';
  //       },
  subtitle: {
    // text: 'Source: <a href="https://www.ssb.no/jord-skog-jakt-og-fiskeri/jakt" target="_blank">SSB</a>',
    align: "left",
  },
  legend: {
    layout: "horizontal",
    align: "right",
    verticalAlign: "bottom",
    x: 0,
    y: 0,
    // floating: true,
    // borderWidth: 1,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
  },
  xAxis: {
    plotBands: [
      {
        // Highlight the two last years
        from: 1,
        to: 30,
        // color: "rgba(68, 170, 213, .2)",
      },
    ],
    scrollbar: {
      enabled: true, // Enable the scrollbar
    },
  },
  yAxis: {
    title: {
      text: null,
    },
  },
  tooltip: {
    shared: true,
    // headerFormat: "<b>Hunting season starting autumn {point.x}</b><br>",
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    series: {
      pointStart: 200,
      pointInterval: 5,
      color: "#efbc6d",
    },
    areaspline: {
      fillOpacity: 0,
    },
  },
  series: [
    {
      name: "Received",
      data: [22, 21, 30, 26, 85, 62, 40],
      fillOpacity: 0.5,
      marker: {
        fillColor: "white",
        lineColor: "#20794a",
        lineWidth: 2,
      },
      color: "#20794a",
    },

    {
      name: "Resolved",
      marker: {
        fillColor: "white",

        lineColor: "#efbc6d",
        lineWidth: 2,
      },
      data: [62, 42, 75, 22, 55, 40, 80],
    },
  ],
  areaspline: {
    fillOpacity: false,
  },
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 767, // or any desired breakpoint
        },
        chartOptions: {
          width: "10%",
          legend: {
            layout: "vertical",
            align: "center",
            verticalAlign: "bottom",
          },
        },
      },
    ],
  },
});
// donat chart
Highcharts.chart("dount", {
  chart: {
    type: "pie",
  },
  credits: {
    enabled: false,
  },

  title: {
    text: null,
  },
  exporting: {
    buttons: {
      contextButton: {
        enabled: false,
      },
    },
  },
  plotOptions: {
    pie: {
      innerSize: "50%", // This makes the pie a donut
      dataLabels: {
        enabled: true,
        format: "{point.percentage:.1f}%",
      },
    },
  },

  series: [
    {
      name: "Brands",
      data: [
        { name: "In-Progress", y: 50, color: "#2c81fe" },
        { name: "Resolved", y: 25, color: "#27a844" },
        { name: "Pending", y: 25, color: "#ffc53d" },
      ],
    },
  ],
});

// stacked bar
Highcharts.chart("stackedchart", {
  chart: {
    type: "column",
    // width: "100%",
  },
  title: {
    text: null,
    align: "left",
  },
  exporting: {
    buttons: {
      contextButton: {
        enabled: false,
      },
    },
  },
  credits: {
    enabled: false,
  },
  xAxis: {
    categories: [
      "Anugul",
      "Boundh",
      "Bargarh",
      " Bhadrak",
      "Cuttack",
      "Deogarh",
      "Deogarh",
      "Dhenkanal",
      "Ganjam",
      "Gajapati",
      "Jharsuguda",
      "Jaipur",
      "Jagatsinghapur",
      "Khordha",
      "Keonjhar",
      "Kalahandi",
      "Kandhamal",
      "Koraput",
      "Kendrapara",
      "Malkangiri",
      "Mayurbhanj",
      "Nabarangpur",
      "Nuapada",
      "Nayagarh",
      "Puri",
      "Rayagada",
      "Sambalpur",
      "Subarnapur",
      "Sundargarh",
    ],
  },
  yAxis: {
    min: 0,
    title: {
      text: null,
    },
    stackLabels: {
      enabled: true,
    },
  },
  legend: {
    align: "right",
    x: 0,
    verticalAlign: "bottom",
    layout: "horizontal",
    y: 0,
    // floating: true,
    // backgroundColor:
    //   Highcharts.defaultOptions.legend.backgroundColor || "white",
    // borderColor: "#CCC",
    // borderWidth: 1,
    shadow: false,
  },
  tooltip: {
    headerFormat: "<b>{point.x}</b><br/>",
    pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}",
  },
  plotOptions: {
    column: {
      stacking: "normal",
      dataLabels: {
        enabled: true,
      },
    },
  },
  series: [
    {
      name: "Resolved",
      data: [
        33, 5, 61, 13, 44, 56, 56, 43, 44, 36, 98, 76, 87, 77, 67, 65, 56, 58,
        44, 56, 56, 43, 44, 36, 40, 50, 60, 75, 22,
      ],
      color: "#27a844",
    },
    {
      name: "Pending",
      data: [
        75, 22, 55, 40, 80, 20, 5, 10, 12, 40, 50, 60, 75, 22, 55, 40, 80, 75,
        22, 55, 40, 80, 10, 20, 40, 55, 44, 67, 37,
      ],
      color: "#ffc53d",
    },
  ],
});
