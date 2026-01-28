let app = new PIXI.Application({});
document.body.appendChild(app.view);

let img = new PIXI.Sprite.from("anime.jpg");

img.width = window.innerWidth;
img.height = window.innerHeight;

app.stage.addChild(img);

depthMap = new PIXI.Sprite.from("anime_depth.png");
app.stage.addChild(depthMap);
depthMap.height = window.innerHeight;
depthMap.width = window.innerWidth;

displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
app.stage.filters = [displacementFilter];

window.onmousemove = function (e) {
  displacementFilter.scale.x = (window.innerWidth / 2 - e.clientX) / 30;
  displacementFilter.scale.y = (window.innerHeight / 2 - e.clientY) / 30;
};
