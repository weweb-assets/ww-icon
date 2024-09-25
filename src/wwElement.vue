<template>
    <component :is="tag" v-bind="properties" class="ww-icon" :style="style" :class="{ '-link': hasLink && !isEditing }">
        <div :class="[content.icon]" aria-hidden="true"></div>
    </component>
</template>

<script>
export default {
    props: {
        content: { type: Object, required: true },
        /* wwEditor:start */
        wwEditorState: { type: Object, required: true },
        /* wwEditor:end */
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
        isEditing() {
            /* wwEditor:start */
            return this.wwEditorState.editMode === wwLib.wwEditorHelper.EDIT_MODES.EDITION;
            /* wwEditor:end */
            // eslint-disable-next-line no-unreachable
            return false;
        },
    },
};
</script>

<style scoped lang="scss">
.ww-icon {
    justify-content: center;
    align-items: center;
    &.-link {
        cursor: pointer;
    }
}
</style>
