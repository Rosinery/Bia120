function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  
  
  
}

function modelLoaded() {
    console.log('Model Loaded!');
}

function draw() {
  
}
var previousResult = '';

function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    if((results[0].confidence > 0.5) && (previousResult != results[0].label)){
      
    }
  }
}
