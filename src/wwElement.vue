<template>
    <div v-html="iconHTML" :style="style" class="ww-icon"></div>
</template>

<script>
import { ref, watchEffect } from 'vue';
const placeholderIcon =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4m0-4h.01"/></svg>';

export default {
    props: {
        content: { type: Object, required: true },
        /* wwEditor:start */
        wwEditorState: { type: Object, required: true },
        /* wwEditor:end */
    },
    setup(props) {
        const { getIcon } = wwLib.useIcons();
        const iconText = ref(null);
        watchEffect(async () => {
            iconText.value = await getIcon(props.content.icon);
        });
        return {
            getIcon,
            iconText,
        };
    },
    computed: {
        iconHTML() {
            return this.iconText || placeholderIcon;
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
