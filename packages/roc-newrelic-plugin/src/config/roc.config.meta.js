import {
    isBoolean
} from 'roc/validators';

export default {
    settings: {
        descriptions: {
            runtime: {
                newrelic: {
                    enabled: 'If NewRelic should be started or not.'
                }
            }
        },
        validations: {
            runtime: {
                newrelic: {
                    enabled: isBoolean
                }
            }
        }
    }
};
