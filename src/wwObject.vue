<template>
    <wwIcon :content="content"></wwIcon>
</template>

<script>
/* wwManager:start */
import openPopup from './popups';
/* wwManager:end */
import wwIcon from './wwIcon.vue';

export default {
    props: {
        content: Object,
    },
    components: { wwIcon },
    wwDefaultContent: {
        fontSize: 20,
        color: '#000000',
        icon: 'wwi wwi-icon',
    },
    methods: {
        /* wwManager:start */
        async edit() {
            try {
                const update = await openPopup(this.content);
                if (update) {
                    this.$emit('update', update);
                }
            } catch (error) {
                wwLib.wwLog.error(error);
            }
        },
        /* wwManager:end */
    },
};
</script>
