

var createViewer = require('../index');

var viewer = createViewer({
  width: 0.4,
  height: 0.4,
  followMouse: true
})

document.getElementById('fox').appendChild(viewer.container);
