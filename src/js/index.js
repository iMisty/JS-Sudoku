const Grid = require("./ui/grid");
const PopupNumbers = require("./ui/popupnumbers");

const grid = new Grid($("#container"));
grid.build();
grid.layout();

const popNumbers = new PopupNumbers($("popupNumbers"));
grid.bindPopup(PopupNumbers);