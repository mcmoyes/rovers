<template>
  <div class="icon" :class="roverClasses" :style="orientationStyle">A</div>
</template>

<script>
export default {
  name: "Rover",
  props: {
    rover: Object
  },
  data: function() {
    return {
      orientationStyle: {}
    };
  },
  computed: {
    orientation: function() {
      return this.rover.orientation;
    },
    roverClasses: function() {
      let classes = {
        active: this.rover.isActive,
        disabled: this.rover.isDisabled
      };
      classes["orientation-" + this.rover.orientation] = true;
      return classes;
    }
  },
  watch: {
    orientation: function(newVal, oldVal) {
      if (newVal == "N" && oldVal == "W") {
        this.orientationStyle = { transform: "rotate(360deg)" };
        setTimeout(function() {
          this.orientationStyle = {
            transform: "rotate(0deg)",
            transition: "none"
          };
        }, 400);
      } else {
        this.orientationStyle = {};
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/_variables.scss";
.icon {
  transition: transform 0.3s ease;
}
.active {
  color: $monochrome-active;
}
.disabled {
  color: $monochrome-error;
}
.orientation-N {
  transform: rotate(0deg);
}
.orientation-E {
  transform: rotate(90deg);
}
.orientation-S {
  transform: rotate(180deg);
}
.orientation-W {
  transform: rotate(270deg);
}
</style>