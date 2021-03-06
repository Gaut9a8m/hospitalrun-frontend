import { map } from '@ember/object/computed';
import { isEmpty } from '@ember/utils';
import Mixin from '@ember/object/mixin';
import SelectValues from 'hospitalrun/utils/select-values';
import { computed } from '@ember/object';

export default Mixin.create({
  defaultUnitList: [
    'ampoule',
    'bag',
    'bottle',
    'box',
    'bundle',
    'capsule',
    'case',
    'container',
    'cream',
    'each',
    'gel',
    'nebule',
    'ointment',
    'pack',
    'pair',
    'pallet',
    'patch',
    'pcs',
    'pill',
    'plastic',
    'polyamp',
    'roll',
    'spray',
    'suppository',
    'suspension',
    'set',
    'syrup',
    'tablet',
    'tray',
    'tube',
    'vial'
  ],

  unitList: computed('inventoryUnitList', 'defaultUnitList', function() {
    let defaultUnitList = this.get('defaultUnitList');
    let inventoryUnitList = this.get('inventoryUnitList');
    if (isEmpty(inventoryUnitList)) {
      return defaultUnitList;
    } else {
      return inventoryUnitList;
    }
  }),

  unitListForSelect: map('unitList', SelectValues.selectValuesMap)
});
