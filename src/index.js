import wwObject from './wwObjectIcon.vue'

const name = "__NAME__";
const version = '__VERSION__';

const addComponent = function () {
    if (window.vm) {

        wwLib.wwObject.register({
            content: {
                type: name,
                data: {
                    icon: "wwi wwi-icon",
                    style: {
                        color: "#000000",
                        backgroundColor: "#FFFFFF",
                        gradient: '',
                        borderRadius: 50,
                        borderWidth: 2,
                        borderColor: "#000000",
                        borderStyle: "solid",
                        boxShadow: {
                            x: 0,
                            y: 0,
                            b: 0,
                            s: 0,
                            c: ''
                        },
                        size: 40,
                        fontSize: 20
                    },
                }
            },
            upsales: {
                wwAnalytics: {
                    click: true
                }
            },
            /* wwManager:start */
            cmsOptions: {
                wwObjectMenu: {
                    items: [
                        {
                            name: 'OPTIONS',
                            main: true,
                            text: {
                                en: 'Options',
                                fr: 'Options'
                            },
                            icon: 'wwi wwi-edit-other',
                            action: 'edit'
                        },
                        {
                            name: 'ICON',
                            text: {
                                en: 'Icon',
                                fr: 'Icône'
                            },
                            icon: 'wwi wwi-icon',
                            action: 'changeIcon'
                        }
                    ]
                }
            }
            /* wwManager:end */
        });

        window.vm.addComponent({
            name: name,
            version: version,
            content: wwObject
        });

        return true;
    }
    return false;
}

if (!addComponent()) {
    const iniInterval = setInterval(function () {
        if (addComponent()) {
            clearInterval(iniInterval);
        }
    }, 10);
}