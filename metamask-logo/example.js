// Don't use this method as it gives no control over the fox
// Leave it here in case I change my mind

var createViewer = require('../index');

var viewer = createViewer({
  width: 0.4,
  height: 0.4,
  followMouse: true
});

document.getElementById('fox').appendChild(viewer.container);
