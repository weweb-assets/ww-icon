<template>
    <div class="ww-icon">
        <div :class="[wwObject.content.data.icon]" aria-hidden="true" :style="style"></div>
    </div>
</template>
 

<script>
/* wwManager:start */
import wwIconPopupStyle from './wwIconPopupStyle.vue'
wwLib.wwPopups.addPopup('wwIconPopupStyle', wwIconPopupStyle);
/* wwManager:end */

export default {
    name: "ww-icon",
    props: {
        wwObjectCtrl: Object,
        wwAttrs: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
        }
    },
    computed: {
        wwObject() {
            return this.wwObjectCtrl.get();
        },
        style() {
            let style = {};
            let wwObjectStyle = this.wwObject.content.data.style || {};

            style.color = wwObjectStyle.color || '#000000';

            if (wwObjectStyle.gradient && wwObjectStyle.gradient.value) {
                style.background = wwObjectStyle.gradient.value;
                style.backgroundColor = wwObjectStyle.gradient.default;
            }
            else {
                style.background = '';
                style.backgroundColor = wwObjectStyle.backgroundColor || '#FFFFFF';
            }

            style.borderRadius = (wwObjectStyle.borderRadius || 50) + '%';
            style.borderWidth = (wwObjectStyle.borderWidth || 1) + 'px';
            style.borderColor = wwObjectStyle.borderColor || '#000000';
            style.borderStyle = wwObjectStyle.borderStyle || 'solid';
            style.width = (wwObjectStyle.size || 40) + 'px';
            style.height = (wwObjectStyle.size || 40) + 'px';
            style.fontSize = (wwObjectStyle.fontSize || 20) + 'px';
            style.boxShadow = this.getShadow();

            return style;
        }
    },
    watch: {
    },
    beforeDestroy() { },
    methods: {
        init() {

        },

        getShadow() {
            let wwObjectStyle = this.wwObject.content.data.style || {};
            const shadow = wwObjectStyle.boxShadow || {};
            if (shadow.x || shadow.y || shadow.b || shadow.s || shadow.c) {
                return shadow.x + 'px ' + shadow.y + 'px ' + shadow.b + 'px ' + shadow.s + 'px ' + shadow.c;
            }
            return '';
        },

        /* wwManager:start */
        /*=============================================m_ÔÔ_m=============================================\
          CHANGE ICON
        \================================================================================================*/
        async changeIcon() {
            wwLib.wwObjectHover.setLock(this);

            wwLib.wwPopups.addStory('WWICON_SELECT', {
                title: {
                    en_GB: 'Select icon',
                    fr_FR: 'Choisir une icon'
                },
                type: 'wwPopupIcons'
            },
            )

            let options = {
                firstPage: 'WWICON_SELECT'
            }

            try {
                const result = await wwLib.wwPopups.open(options)
                this.wwObject.content.data.icon = result.icon;


                this.wwObjectCtrl.update(this.wwObject);

            } catch (error) {

            }

            wwLib.wwObjectHover.removeLock();
        },
        async edit() {
            wwLib.wwObjectHover.setLock(this);

            wwLib.wwPopups.addStory('WWICON_EDIT', {
                title: {
                    en_GB: 'Edit icon',
                    fr_FR: 'Editer l\'icon'
                },
                type: 'wwPopupEditWwObject',
                buttons: null,
                storyData: {
                    list: {
                        EDIT_SELECT: {
                            separator: {
                                en_GB: 'Icon',
                                fr_FR: 'Icône'
                            },
                            title: {
                                en_GB: 'Select icon',
                                fr_FR: 'Sélectionner une icône'
                            },
                            desc: {
                                en_GB: '',
                                fr_FR: ''
                            },
                            icon: 'wwi wwi-icon',
                            shortcut: 'i',
                            next: 'WWICON_SELECT'
                        },
                        EDIT_STYLE: {
                            separator: {
                                en_GB: 'Style',
                                fr_FR: 'Style'
                            },
                            title: {
                                en_GB: 'Change icon style',
                                fr_FR: 'Changer l\'apparence de l\'icon'
                            },
                            desc: {
                                en_GB: 'Borders, colors, shadow, ...',
                                fr_FR: 'Bordures, couleurs, ombres, ...'
                            },
                            icon: 'wwi wwi-edit-style',
                            shortcut: 's',
                            next: 'WWICON_STYLE'
                        }
                    }
                }
            })
            wwLib.wwPopups.addStory('WWICON_SELECT', {
                title: {
                    en_GB: 'Select icon',
                    fr_FR: 'Choisir une icon'
                },
                type: 'wwPopupIcons',
                next: 'WWICON_STYLE'
            },
            )
            wwLib.wwPopups.addStory('WWICON_STYLE', {
                title: {
                    en_GB: 'Icon style',
                    fr_FR: 'Style de l\'icône'
                },
                type: 'wwIconPopupStyle',
                buttons: {
                    OK: {
                        text: {
                            en_GB: 'Ok',
                            fr_FR: 'Valider'
                        },
                        next: false
                    }
                }
            })

            let options = {
                firstPage: 'WWICON_EDIT',
                data: {
                    wwObject: this.wwObject
                }
            }

            try {
                const result = await wwLib.wwPopups.open(options);

                /*=============================================m_ÔÔ_m=============================================\
                  ICON
                \================================================================================================*/
                if (typeof (result.icon) != 'undefined') {
                    this.wwObject.content.data.icon = result.icon;
                }

                /*=============================================m_ÔÔ_m=============================================\
                  STYLE
                \================================================================================================*/
                this.wwObject.content.data.style = this.wwObject.content.data.style || {};
                if (typeof (result.borderColor) != 'undefined') {
                    this.wwObject.content.data.style.borderColor = result.borderColor;
                }
                if (typeof (result.borderRadius) != 'undefined') {
                    this.wwObject.content.data.style.borderRadius = result.borderRadius;
                }
                if (typeof (result.borderStyle) != 'undefined') {
                    this.wwObject.content.data.style.borderStyle = result.borderStyle;
                }
                if (typeof (result.borderWidth) != 'undefined') {
                    this.wwObject.content.data.style.borderWidth = result.borderWidth;
                }
                if (typeof (result.boxShadow) != 'undefined') {
                    this.wwObject.content.data.style.boxShadow = result.boxShadow;
                }
                if (typeof (result.color) != 'undefined') {
                    this.wwObject.content.data.style.color = result.color;
                }
                if (typeof (result.backgroundColor) != 'undefined') {
                    this.wwObject.content.data.style.backgroundColor = result.backgroundColor;
                }
                if (typeof (result.gradient) != 'undefined') {
                    this.wwObject.content.data.style.gradient = result.gradient;
                }
                if (typeof (result.gradientColor) != 'undefined') {
                    this.wwObject.content.data.style.backgroundColor = result.gradientColor;
                }
                if (typeof (result.fontSize) != 'undefined') {
                    this.wwObject.content.data.style.fontSize = result.fontSize;
                }
                if (typeof (result.size) != 'undefined') {
                    this.wwObject.content.data.style.size = result.size;
                }


                this.wwObjectCtrl.update(this.wwObject);

                this.wwObjectCtrl.globalEdit(result);


            } catch (error) {
                console.log(error);
            }

            wwLib.wwObjectHover.removeLock();
        }
        /* wwManager:end */
    },
    mounted() {
        this.init()

        //console.log(this.wwObject)

        /*
        wwLib.wwElementsStyle.applyAllStyles({
            wwObject: this.wwObject,
            lastWwObject: null,
            element: this.$el,
            noAnim: this.wwAttrs.wwNoAnim,
        });
        */

        this.$emit('ww-loaded', this);
    }
};
</script>

<style scoped lang="scss">
.ww-icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
