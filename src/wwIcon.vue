<template>
    <div class="ww-icon" :class="[content.icon]" aria-hidden="true" :style="style"></div>
</template>

<script>
/* wwManager:start */
import openPopup from './popups';
/* wwManager:end */

export default {
    props: {
        content: Object,
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
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
