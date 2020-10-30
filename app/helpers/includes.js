import { helper } from '@ember/component/helper';

export default helper(function includes([array, item]/*, hash*/) {
  return array.includes(item);
});
