const gameConfig = {
  gridWidth: 31,
  gridHeight: 25,
  numRovers: 4,
  activeRoverNum: 0,
  rovers: []
};

const roverConfig = {
  hasLanded: false,
  startX: null,
  startY: null,
  startOrientation: "",
  x: null,
  y: null,
  orientation: "",
  sequence: "",
  isDisabled: false,
  isActive: false
};

export { gameConfig, roverConfig };
