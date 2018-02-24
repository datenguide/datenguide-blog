// Colors
const colors = [
  '#252525',
  '#525252',
  '#737373',
  '#969696',
  '#bdbdbd',
  '#d9d9d9',
  '#f0f0f0'
]
const defaultColor = '#000000'

// Typography
const fontFamily = "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif"
const letterSpacing = 'normal'
const fontSize = 14

// Layout
const baseProps = {
  width: 450,
  height: 300,
  padding: 50,
  colorScale: colors
}

// Labels
const baseLabelStyles = {
  fontFamily,
  fontSize,
  letterSpacing,
  padding: 10,
  fill: defaultColor,
  stroke: 'transparent'
}
const centeredLabelStyles = Object.assign(
  { textAnchor: 'middle' },
  baseLabelStyles
)

// Strokes
const strokeLinecap = 'round'
const strokeLinejoin = 'round'

// Put it all together...
export default {
  area: Object.assign(
    {
      style: {
        data: {
          fill: defaultColor
        },
        labels: centeredLabelStyles
      }
    },
    baseProps
  ),
  axis: Object.assign(
    {
      style: {
        axis: {
          fill: 'transparent',
          stroke: defaultColor,
          strokeWidth: 1,
          strokeLinecap,
          strokeLinejoin
        },
        axisLabel: Object.assign({}, centeredLabelStyles, {
          padding: 25
        }),
        grid: {
          fill: 'none',
          stroke: 'none',
          pointerEvents: 'visible'
        },
        ticks: {
          fill: 'transparent',
          size: 1,
          stroke: 'transparent'
        },
        tickLabels: baseLabelStyles
      }
    },
    baseProps
  ),
  bar: Object.assign(
    {
      style: {
        data: {
          fill: defaultColor,
          padding: 8,
          strokeWidth: 0
        },
        labels: baseLabelStyles
      }
    },
    baseProps
  ),
  candlestick: Object.assign(
    {
      style: {
        data: {
          stroke: defaultColor,
          strokeWidth: 1
        },
        labels: centeredLabelStyles
      },
      candleColors: {
        positive: '#ffffff',
        negative: defaultColor
      }
    },
    baseProps
  ),
  chart: baseProps,
  errorbar: Object.assign(
    {
      borderWidth: 8,
      style: {
        data: {
          fill: 'transparent',
          stroke: defaultColor,
          strokeWidth: 2
        },
        labels: centeredLabelStyles
      }
    },
    baseProps
  ),
  group: Object.assign(
    {
      colorScale: colors
    },
    baseProps
  ),
  line: Object.assign(
    {
      style: {
        data: {
          fill: 'transparent',
          stroke: defaultColor,
          strokeWidth: 2
        },
        labels: centeredLabelStyles
      }
    },
    baseProps
  ),
  pie: {
    style: {
      data: {
        padding: 10,
        stroke: 'transparent',
        strokeWidth: 1
      },
      labels: Object.assign({}, baseLabelStyles, { padding: 20 })
    },
    colorScale: colors,
    width: 400,
    height: 400,
    padding: 50
  },
  scatter: Object.assign(
    {
      style: {
        data: {
          fill: defaultColor,
          stroke: 'transparent',
          strokeWidth: 0
        },
        labels: centeredLabelStyles
      }
    },
    baseProps
  ),
  stack: Object.assign(
    {
      colorScale: colors
    },
    baseProps
  ),
  tooltip: {
    style: Object.assign({}, centeredLabelStyles, {
      padding: 5,
      pointerEvents: 'none'
    }),
    flyoutStyle: {
      stroke: defaultColor,
      strokeWidth: 1,
      fill: '#f0f0f0',
      pointerEvents: 'none'
    },
    cornerRadius: 5,
    pointerLength: 10
  },
  voronoi: Object.assign(
    {
      style: {
        data: {
          fill: 'transparent',
          stroke: 'transparent',
          strokeWidth: 0
        },
        labels: Object.assign({}, centeredLabelStyles, {
          padding: 5,
          pointerEvents: 'none'
        }),
        flyout: {
          stroke: defaultColor,
          strokeWidth: 1,
          fill: '#f0f0f0',
          pointerEvents: 'none'
        }
      }
    },
    baseProps
  ),
  legend: {
    colorScale: colors,
    gutter: 10,
    orientation: 'vertical',
    titleOrientation: 'top',
    style: {
      data: {
        type: 'circle'
      },
      labels: baseLabelStyles,
      title: Object.assign({}, baseLabelStyles, { padding: 5 })
    }
  }
}
