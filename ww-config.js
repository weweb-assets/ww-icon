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
        linkable: true,
    },
    properties: {
        icon: {
            label: { en: 'Icon', fr: 'Icône' },
            type: 'SystemIcon',
            bindable: true,
            states: true,
            /* wwEditor:start */
            hidden: (_content, _sidePanelContent, _boundProps, wwProps) => !!(wwProps && wwProps.icon),
            bindingValidation: {
                type: 'string',
                tooltip: 'A string that defines the icon code',
            },
            /* wwEditor:end */
        },
        color: {
            label: { en: 'Color', fr: 'Couleur' },
            type: 'Color',
            bindable: true,
            states: true,
            classes: true,
            options: {
                nullable: true,
            },
            hidden: (_content, _sidePanelContent, _boundProps, wwProps) => !!(wwProps && wwProps.color),
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'The color of the icon',
            },
            /* wwEditor:end */
        },
    },
};
