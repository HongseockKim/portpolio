$(document).ready(function(){
    vrEvent();
});

function vrEvent(){
    var panoElement = document.getElementById('pano');
    var viewerOpts = {
        controls: {
            mouseViewMode: 'drag'    // drag|qtvr
        }
    };

    var viewer = new Marzipano.Viewer(panoElement, viewerOpts);

    var levels = [
  { tileSize: 512, size: 512 },
  { tileSize: 512, size: 1024 }
];

    var geometry = new Marzipano.CubeGeometry(levels);
    var source = Marzipano.ImageUrlSource.fromString("tiles/{z}/{f}/{y}/{x}.jpg");
    var view = new Marzipano.RectilinearView();

    var scene = viewer.createScene({
    source: source,
    geometry: geometry,
    view: view
    });
}