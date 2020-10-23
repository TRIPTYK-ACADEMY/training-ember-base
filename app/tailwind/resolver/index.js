let reduceCalc = require('reduce-css-calc');

module.exports = {
  negateValue(value) {
    try {
      return reduceCalc(`calc(${value} * -1)`)
    } catch (e) {
      return value
    }
  },
  negative(scale) {
    return Object.keys(scale)
      .filter(key => scale[key] !== '0')
      .reduce(
        (negativeScale, key) => ({
          ...negativeScale,
          [`-${key}`]: this.negateValue(scale[key]),
        }),
        {}
      )
  },
  breakpoints(screens) {
    return Object.keys(screens)
      .filter(key => typeof screens[key] === 'string')
      .reduce(
        (breakpoints, key) => ({
          ...breakpoints,
          [`screen-${key}`]: screens[key],
        }),
        {}
      )
  }
}