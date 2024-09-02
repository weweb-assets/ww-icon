<template>
    <component :is="tag" v-bind="properties" class="ww-icon" :style="style">
        <div :class="[content.icon]" aria-hidden="true"></div>
    </component>
</template>

<script>
export default {
    props: {
        content: { type: Object, required: true },
    },
    setup() {
        const { hasLink, properties, tag } = wwLib.wwElement.useLink();
        return { hasLink, properties, tag };
    },
    computed: {
        style() {
            return {
                color: this.content.color,
                fontSize: `${this.content.fontSize}px`,
            };
        },
    },
};
</script>

<style scoped lang="scss">
.ww-icon {
    justify-content: center;
    align-items: center;
    transition: inherit;
}
</style>
