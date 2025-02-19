<template>
    <div v-html="iconHTML" :style="style" class="ww-icon"></div>
</template>

<script>
import icons, { placeholderIcon } from './icons.js';

export default {
    props: {
        content: { type: Object, required: true },
        /* wwEditor:start */
        wwEditorState: { type: Object, required: true },
        /* wwEditor:end */
    },
    computed: {
        iconHTML() {
            return icons[this.content.icon] || placeholderIcon;
        },
        style() {
            return {
                '--icon-color': this.content.color,
            };
        },
    },
};
</script>

<style scoped>
.ww-icon {
    color: var(--icon-color, unset);
}
</style>
