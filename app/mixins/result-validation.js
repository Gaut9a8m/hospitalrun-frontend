import { isEmpty } from '@ember/utils';
import Mixin from '@ember/object/mixin';
import { translationMacro as t } from 'ember-i18n';

export default Mixin.create({
  validations: {
    result: {
      acceptance: {
        accept: true,
        if(object) {
          if (!object.get('hasDirtyAttributes')) {
            return false;
          }
          let status = object.get('status');
          let result = object.get('result');
          if (status === 'Completed' && isEmpty(result)) {
            // force validation to fail
            return true;
          }
          return false;
        },
        message: t('errors.result')
      }
    }
  }
});
