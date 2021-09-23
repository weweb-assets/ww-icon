export default {
    editor: {
        label: {
            en: 'Icon',
            fr: 'Icône',
        },
        icon: 'start-active',
        menuOptions: {
            quick: {
                sections: ['icon', 'ww-link', 'color', 'ww-background'],
            },
        },
        styleOptions: {
            color: { type: 'Color', label: { en: 'Color', fr: 'Couleur' } },
            fontSize: { type: 'Number', label: { en: 'Size', fr: 'Taille' } },
        },
        settingsOptions: {
            icon: { type: 'Icon', label: { en: 'Icon', fr: 'Icône' } },
        },
    },
    options: {
        hyperlink: true,
    },
    properties: {
        fontSize: {
            label: { en: 'Size', fr: 'Taille' },
            type: 'Number',
            bindable: true,
            responsive: true,
            states: true,
            defaultValue: 20,
        },
        color: {
            label: { en: 'Color', fr: 'Couleur' },
            type: 'Color',
            bindable: true,
            responsive: true,
            states: true,
            defaultValue: '#000000',
        },
        icon: {
            label: { en: 'Icon', fr: 'Icône' },
            type: 'Icon',
            bindable: true,
            defaultValue: 'wwi wwi-icon',
        },
    },
};
