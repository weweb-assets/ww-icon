<template>
    <div class="ww-popup-style">
        <div class="content">
            <div class="preview">
                <wwIcon :content="options.result"></wwIcon>
            </div>
            <div class="options">
                <div class="option">
                    <div class="option-row">
                        <wwManagerColorSelect
                            :value="options.result.color"
                            @change="options.result.color = $event"
                        ></wwManagerColorSelect>
                        <wwManagerSlider
                            class="slider"
                            :options="fontSizeOptions"
                            :value="options.result.fontSize"
                            @change="options.result.fontSize = $event"
                        ></wwManagerSlider>
                        <div class="value">{{ options.result.fontSize }}px</div>
                    </div>
                </div>
                <button class="btn" @click="changeIcon">Change icon</button>
            </div>
        </div>
    </div>
</template>

<script>
import wwIcon from '../wwIcon.vue';

export default {
    name: 'wwIconPopupStyle',
    components: { wwIcon },
    props: {
        options: {
            type: Object,
            default: function () {
                return {};
            },
        },
    },
    data() {
        return {
            sizeOptions: {
                min: 10,
                max: 250,
                digits: 0,
            },
            fontSizeOptions: {
                min: 5,
                max: 245,
                digits: 0,
            },
        };
    },
    created() {
        this.options.result = { ...this.options.result, ...this.options.data };
    },
    methods: {
        async changeIcon() {
            try {
                const { icon } = (await wwLib.wwPopups.open({ firstPage: 'WWICON_SELECT' })) || {};
                if (icon) {
                    this.options.result.icon = icon;
                }
            } catch (err) {
                return;
            }
        },
    },
};
</script>

<style scoped lang="scss">
.ww-popup-style {
    .content {
        display: flex;
        padding: 20px;
        flex-direction: column;
        overflow: auto;
        min-height: 100%;
        font-family: 'Monserrat', sans-serif;

        @media (min-width: 992px) {
            flex-direction: row;
        }

        .preview {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #efefef;
            border: 2px solid #cacaca;

            @media (min-width: 992px) {
                flex-basis: 50%;
            }

            > * {
                width: 100%;
                height: 100%;
            }
        }

        .options {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 50px 0;

            @media (min-width: 992px) {
                flex-basis: 50%;
                padding: 0 15px;
                align-items: initial;
            }

            .option {
                width: 80%;
                display: flex;
                flex-direction: column;

                @media (min-width: 992px) {
                    width: 350px;
                }

                .option-row {
                    display: flex;
                    align-items: center;

                    &.center {
                        justify-content: center;
                    }

                    .slider {
                        flex-basis: 80%;

                        @media (min-width: 992px) {
                            flex-basis: 250px;
                        }
                    }

                    .value {
                        padding-left: 10px;
                        font-size: 1.2rem;
                        font-family: 'Monserrat', sans-serif;
                        flex-grow: 1;
                        text-align: right;
                        white-space: nowrap;
                    }

                    & + .option-row {
                        margin-top: 15px;
                    }

                    .border-style {
                        flex-grow: 1;
                    }

                    .border-color {
                        margin: 0 15px 0 0;
                    }
                }
            }

            .option + .title {
                margin-top: 25px;
            }
        }
        .btn {
            margin-top: 20px;
            align-self: flex-start;
        }
    }
}
</style>
