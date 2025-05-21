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
                tooltip:
                    'A string that defines the icon code.\n\nAlways use icons full names in binding.\n\n<b>Icons with partial or cut names will not be included in the published app.</b>\n\nEx:\n<code>if(cond, "lucide/my-icon", "lucide/other-icon")</code>\n\ninstead of\n<code>"lucide/" + if(cond, "my-icon", "other-icon")</code>',
            },
            propertyHelp: {
                tooltip:
                    'Always use icons full names in binding.\n\n<b>Icons with partial or cut names will not be included in the published app.</b>\n\nEx:\n<code>if(cond, "lucide/my-icon", "lucide/other-icon")</code>\n\ninstead of\n<code>"lucide/" + if(cond, "my-icon", "other-icon")</code>',
            },
            /* wwEditor:end */
        },
        color: {
            label: { en: 'Color', fr: 'Couleur' },
            type: 'Color',
            bindable: true,
            states: true,
            classes: true,
            responsive: true,
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
