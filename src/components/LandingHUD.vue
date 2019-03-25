<template>
  <div>
    <div>
      <h4>
        Land rover
        <br>==========
      </h4>
      <div class="coords">
        <div class="input-group--column">
          <label for="LandingHUD-x">X</label>
          <input
            id="LandingHUD-x"
            v-model.number="x"
            type="number"
            min="0"
            max="99"
            :disabled="rover.hasLanded"
          >
        </div>
        <div class="input-group--column">
          <label for="LandingHUD-y">Y</label>
          <input
            id="LandingHUD-y"
            v-model.number="y"
            type="number"
            min="0"
            max="99"
            :disabled="rover.hasLanded"
          >
        </div>
      </div>

      <label for="LandingHUD-orientation">Direction</label>
      <input id="LandingHUD-orientation" v-model="orientation" size="1" :disabled="rover.hasLanded">

      <div class="input-group--row">
        <button @click="onLandClick()" v-if="!rover.hasLanded" :disabled="invalidData">Land</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingHUD",
  props: {
    rover: Object
  },
  data: function() {
    return {
      x: this.rover.x,
      y: this.rover.y,
      orientation: this.rover.orientation
    };
  },
  methods: {
    onLandClick: function() {
      this.$emit("land", {
        startX: this.x,
        startY: this.y,
        startOrientation: this.orientation,
        x: this.x,
        y: this.y,
        orientation: this.orientation,
        hasLanded: true
      });
    }
  },
  computed: {
    invalidData: function() {
      return (
        this.x == null ||
        this.y == null ||
        (this.orientation !== "N" &&
          this.orientation !== "S" &&
          this.orientation !== "E" &&
          this.orientation !== "W")
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
label {
  display: block;
}
input[type="number"] {
  width: 3em;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.coords {
  display: flex;
  margin-bottom: 20px;
  .input-group--column {
    margin-right: 20px;
  }
}

.input-group--row {
  margin-top: 20px;
}
</style>
