let configuration = {};

configuration.canvas = document.querySelector("#canvas");
configuration.context = configuration.canvas.getContext("2d");

configuration.canvas.width = window.innerWidth;
configuration.canvas.height = window.innerHeight;

configuration.backgroundColor = "orange";
configuration.dropLength = 100;
configuration.dropSize = 20;
configuration.dropCap = "round";

export default configuration;
