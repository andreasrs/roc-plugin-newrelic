import config from '../config/roc.config.js';
import meta from '../config/roc.config.meta.js';

import { name } from './util';

export default {
    name,
    config,
    meta,
    actions: {
        newrelic: {
            extension: 'roc-plugin-start',
            hook: 'register-runtime',
            action: () => ({ settings }) => () => () => {
                if (settings.runtime.newrelic.enabled) {
                    require('newrelic');
                }
            }
        }
    }
};
