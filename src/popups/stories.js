import wwIconPopupStyle from './wwIconPopupStyle.vue';
wwLib.wwPopups.addPopup('wwIconPopupStyle', wwIconPopupStyle);

wwLib.wwPopups.addStory('WWICON_STYLE', {
    title: {
        en: 'Icon style',
        fr: "Style de l'icône",
    },
    type: 'wwIconPopupStyle',
    buttons: {
        OK: {
            text: {
                en: 'Ok',
                fr: 'Valider',
            },
            next: false,
        },
    },
});

wwLib.wwPopups.addStory('WWICON_SELECT', {
    title: {
        en: 'Select icon',
        fr: 'Choisir une icon',
    },
    type: 'wwPopupIcons',
    next: false,
});
