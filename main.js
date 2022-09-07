function start() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/e-sdpbJEj/model.json", modelready);
}
function modelready() {
    console.log("model is ready");
    classifier.classify(got_result);
}
function got_result(error,results){
if (error){
    console.log("error");
 }
 else{
    console.log(results);
    label=results[0].label;
    accuracy=(results[0].confidence*100).toFixed(2);

    random_no_r=Math.floor(Math.random()*255)+1;
    random_no_g=Math.floor(Math.random()*255)+1;
    random_no_b=Math.floor(Math.random()*255)+1;

    document.getElementById("label").style.color="rgb("+random_no_r+","+random_no_g+","+random_no_b+")";
        document.getElementById("accuracy").style.color="rgb("+random_no_r+","+random_no_g+","+random_no_b+")";
        document.getElementById("label").innerHTML=label;
        document.getElementById("accuracy").innerHTML=accuracy+"%";
        
    img=document.getElementById("image");

    if(label=="cow"){
        img.src="cow.png";
    }
    else if(label=="cat"){
        img.src="cat.png";
    }
    else if(label=="lion"){
        img.src="lion.png";
    }
    else if(label=="dog"){
        img.src="dog.png";
    }
    else{
        img.src="ear.png";
    }
}
}