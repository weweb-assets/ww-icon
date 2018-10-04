<template>
  <div class="ww-icon">
    <div v-bind:class="[wwObject.content.data.icon]" aria-hidden="true"></div>
  </div>
</template>
 

<script>
export default {
  name: "ww-icon",
  props: {
    wwObject: {
      type: Object,
      default: {}
    },
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
  },
  watch: {
  },
  beforeDestroy() { },
  methods: {
    init() {

    }
  },
  mounted() {
    this.init()

    console.log(this.wwObject)

    wwLib.wwElementsStyle.applyAllStyles({
      wwObject: this.wwObject,
      lastWwObject: null,
      element: this.$el,
      noAnim: this.wwAttrs.wwNoAnim,
    });
  }
};
</script>

<style scoped>
.ww-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.ww-icon-container {
  display: inline-flex;
  justify-content: center;
}

.ww-icon-container > div {
  align-self: center;
}

.ww-class-btn-bg-none {
  background-color: rgba(0, 0, 0, 0) !important;
}

.ww-class-icon-size-xxsmall {
  min-width: 15px;
  min-height: 15px;
}

.ww-class-icon-size-xxsmall .ww-icon-table {
  min-width: 15px;
  min-height: 15px;
}

.ww-class-icon-size-xsmall {
  min-width: 20px;
  min-height: 20px;
}

.ww-class-icon-size-xsmall .ww-icon-table {
  min-width: 20px;
  min-height: 20px;
}

.ww-class-icon-size-small {
  min-width: 30px;
  min-height: 30px;
}

.ww-class-icon-size-small .ww-icon-table {
  min-width: 30px;
  min-height: 30px;
}

.ww-class-icon-size-medium {
  min-width: 40px;
  min-height: 40px;
}

.ww-class-icon-size-medium .ww-icon-table {
  min-width: 40px;
  min-height: 40px;
}

.ww-class-icon-size-big {
  min-width: 60px;
  min-height: 60px;
}

.ww-class-icon-size-big .ww-icon-table {
  min-width: 60px;
  min-height: 60px;
}

.ww-class-icon-size-xbig {
  min-width: 80px;
  min-height: 80px;
}

.ww-class-icon-size-xbig .ww-icon-table {
  min-width: 80px;
  min-height: 80px;
}

.ww-class-icon-size-xxbig {
  min-width: 100px;
  min-height: 100px;
}

.ww-class-icon-size-xxbig .ww-icon-table {
  min-width: 100px;
  min-height: 100px;
}

.ww-class-img-format-round-small {
  border-radius: 7px;
  overflow: hidden;
  /* WTF ?? Sometimes doesn't work without this */
  perspective: 1px;
}

.ww-class-img-format-round-big {
  border-radius: 20px;
  overflow: hidden;
  /* WTF ?? Sometimes doesn't work without this */
  perspective: 1px;
}

.ww-class-img-format-round {
  border-radius: 100%;
  overflow: hidden;
  /* WTF ?? Sometimes doesn't work without this */
  perspective: 1px;
}
</style>
