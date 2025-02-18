export default {
    editor: {
        label: {
            en: 'Icon',
            fr: 'Icône',
        },
        icon: 'star',
    },
    options: {
        displayAllowedValues: ['flex', 'inline-flex'],
    },
    properties: {
        icon: {
            label: { en: 'Icon', fr: 'Icône' },
            type: 'SystemIcon',
            bindable: true,
            states: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'A string that defines the icon code`',
            },
            /* wwEditor:end */
        },
    },
};
