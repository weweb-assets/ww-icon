<template>
    <div v-html="iconHTML"></div>
</template>

<script>
import icons from './icons.js';

export default {
    props: {
        content: { type: Object, required: true },
        /* wwEditor:start */
        wwEditorState: { type: Object, required: true },
        /* wwEditor:end */
    },
    computed: {
        iconHTML() {
            return icons[this.content.icon]?.svg;
        },
    },
};
</script>
