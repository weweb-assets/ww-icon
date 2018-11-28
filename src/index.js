import wwObject from './wwObjectIcon.vue'

const name = "ww-icon";

const addComponent = function () {
    if (window.vm) {

        wwLib.wwObject.register({
            content: {
                type: name,
                data: {
                    icon: "fa fa-thumbs-o-up",
                    color: "#FFFFFF",
                    backgroundColor: "#039BE5",
                    borderColor: '',
                    classes: ["ww-class-img-format-round", "ww-class-font-size-medium", "ww-class-icon-size-xbig"]
                }
            },
            upsales: {
                wwAnalytics: {
                    click: true
                }
            },
            /* wwManager:start */
            cmsOptions: {
            }
            /* wwManager:end */
        });

        window.vm.addComponent(name, wwObject);

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