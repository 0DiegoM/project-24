



Webcam.set ({
width: 350,
height: 300,
image_format: "png",
png_quality:90
});

camera = document.getElementById("camera")

Webcam.attatch('camera');

function take_snapshot() {
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id="captured_image" src="'+ data_uri +'"/>';
});
}
console.log('lm5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5M5m3LYY_/model.json', modelLoaded)
function modelLoaded() {
    console.log('Modelo Cargado');
}