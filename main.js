function setup(){
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth=window.speechSynthesis;
    }
    function preload(){
        classifier=ml5.imageClassifier('DoodleNet')//Iniciando biblioteca ml5
    }
    
    function clearCanvas(){
        background("white")
    }
    
    function draw(){
        stroke(0)
        strokeWeight(5)
        if(mouseIsPressed){
            line(pmouseX,pmouseY,mouseX,mouseY)
        }
    }
     function classifyCanvas(){
        classifier.classify(canvas,gotResult)
     }
      function gotResult(error,results){
        if(error){
            console.error(error)
        }  
        console.log(results)
        document.getElementById("label").innerHTML="Label: "+results[0].label
        document.getElementById("confidence").innerHTML="Confidence: "+Math.round(results[0].confidence*100)
    
        utterThis=new SpeechSynthesisUtterance(results[0].label)//função que ativa a fala
        synth.speak(utterThis)//função que dá o comando da fala
      }