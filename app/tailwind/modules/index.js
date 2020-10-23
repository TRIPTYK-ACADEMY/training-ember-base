let resolver = require('../resolver');

module.exports = {
  screens: require('./screens'),
  colors: require('./colors'),
  spacing: require('./spacing'),
  get backgroundColor(){
    return this.colors;
  },
  backgroundPosition: require('./backgroundPosition'),
  backgroundSize: require('./backgroundSize'),
  get borderColor(){
    return { ...this.colors, default: this['colors.gray.100', 'currentColor']}
  },
  borderRadius: require('./borderRadius'),
  borderWidth: require('./borderWidth'),
  boxShadow: require('./boxShadow'),
  cursor: require('./cursor'),
  fill: require('./fill'),
  flex: require('./flex'),
  flexGrow: require('./flexGrow'),
  flexShrink: require('./flexShrink'),
  fontFamily: require('./fontFamilly'),
  fontSize: require('./fontSize'),
  fontWeight: require('./fontWeight'),
  get height(){
    return { ...this.spacing, screen: '100vh'}
  },
  get inset(){
    return this.spacing;
  },
  letterSpacing: require('./letterSpacing'),
  lineHeight: require('./lineHeight'),
  listStyleType: require('./listStyleType'),
  get margin(){
    return { ...this.spacing, ...resolver.negative(this.spacing)};
  },
  maxHeight: require('./maxHeight'),
  get maxWidth(){
    return { ...require('./maxWidth'), ...resolver.breakpoints(this.screens)};
  },
  get minHeight(){
    return this.spacing;
  },
  get minWidth(){
    return this.spacing;
  },
  objectPosition: require('./objectPosition'),
  opacity: require('./opacity'),
  order: require('./order'),
  get padding(){
    return this.spacing;
  },
  get placeholderColor(){
    return this.colors;
  },
  stroke: require('./stroke'),
  strokeWidth: require('./strokeWidth'),
  get textColor(){
    return this.colors;
  },
  get width(){
    return { ...this.spacing, screen: '100vw' }
  },
  zIndex: require('./zIndex'),
  transformOrigin: require('./transformOrigin'),
  scale: require('./scale'),
  rotate: require('./rotate'),
  get translate(){
    return { ...this.spacing, ...resolver.negative(this.spacing) }
  },
  skew: require('./skew'),
  transitionProperty: require('./transitionProperty'),
  transitionTimingFunction: require('./transitionTimingFunction'),
  transitionDuration: require('./transitionDuration'),
  gap: theme => theme('spacing'),
  gridTemplateColumns: {
    none: 'none',
    '1': 'repeat(1, minmax(0, 1fr))',
    '2': 'repeat(2, minmax(0, 1fr))',
    '3': 'repeat(3, minmax(0, 1fr))',
    '4': 'repeat(4, minmax(0, 1fr))',
    '5': 'repeat(5, minmax(0, 1fr))',
    '6': 'repeat(6, minmax(0, 1fr))',
    '7': 'repeat(7, minmax(0, 1fr))',
    '8': 'repeat(8, minmax(0, 1fr))',
    '9': 'repeat(9, minmax(0, 1fr))',
    '10': 'repeat(10, minmax(0, 1fr))',
    '11': 'repeat(11, minmax(0, 1fr))',
    '12': 'repeat(12, minmax(0, 1fr))',
  },
  gridColumn: {
    auto: 'auto',
    'span-1': 'span 1 / span 1',
    'span-2': 'span 2 / span 2',
    'span-3': 'span 3 / span 3',
    'span-4': 'span 4 / span 4',
    'span-5': 'span 5 / span 5',
    'span-6': 'span 6 / span 6',
    'span-7': 'span 7 / span 7',
    'span-8': 'span 8 / span 8',
    'span-9': 'span 9 / span 9',
    'span-10': 'span 10 / span 10',
    'span-11': 'span 11 / span 11',
    'span-12': 'span 12 / span 12',
  },
  gridColumnStart: {
    auto: 'auto',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '10': '10',
    '11': '11',
    '12': '12',
    '13': '13',
  },
  gridColumnEnd: {
    auto: 'auto',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '10': '10',
    '11': '11',
    '12': '12',
    '13': '13',
  },
  gridTemplateRows: {
    none: 'none',
    '1': 'repeat(1, minmax(0, 1fr))',
    '2': 'repeat(2, minmax(0, 1fr))',
    '3': 'repeat(3, minmax(0, 1fr))',
    '4': 'repeat(4, minmax(0, 1fr))',
    '5': 'repeat(5, minmax(0, 1fr))',
    '6': 'repeat(6, minmax(0, 1fr))',
  },
  gridRow: {
    auto: 'auto',
    'span-1': 'span 1 / span 1',
    'span-2': 'span 2 / span 2',
    'span-3': 'span 3 / span 3',
    'span-4': 'span 4 / span 4',
    'span-5': 'span 5 / span 5',
    'span-6': 'span 6 / span 6',
  },
  gridRowStart: {
    auto: 'auto',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
  },
  gridRowEnd: {
    auto: 'auto',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
  },
  truncate: {
    lines: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
    }
  }
}