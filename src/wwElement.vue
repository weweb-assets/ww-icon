<template>
    <div v-html="iconHTML" :style="style" class="ww-icon"></div>
</template>

<script>
const placeholderIcon =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4m0-4h.01"/></svg>';

export default {
    props: {
        content: { type: Object, required: true },
        /* wwEditor:start */
        wwEditorState: { type: Object, required: true },
        /* wwEditor:end */
    },
    setup() {
        const { getIcon } = wwLib.useIcons();
        return {
            getIcon,
        };
    },
    computed: {
        iconHTML() {
            return this.getIcon(this.content.icon) || placeholderIcon;
        },
        style() {
            return {
                '--icon-color': this.content.color,
            };
        },
    },
};
</script>

<style scoped lang="scss">
.ww-icon {
    color: var(--icon-color, unset);
}
</style>
