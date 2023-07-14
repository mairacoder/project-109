function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kjcMPBYnh/model.json' , modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}


var dog = 0;
var cat  = 0;


function gotResults(error , results){
    if(error){
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_accuracy").innerHTML = 'Accuracy -  ' +(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r + "," +random_number_g + ","+random_number_b+")";
        document.getElementById("result_accuracy").style.color = "rgb("+random_number_r + "," +random_number_g + ","+random_number_b+")";

        img = document.getElementById('img_animal');
        
       


        if (results[0].label == "Barking"){
            img.src = 'dog-happy.gif';
            dog = dog=1 ;
            document.getElementById("result_count").innerHTML = "Detected Count - " + dog;

            
        } else if (results[0].label == "Meowing"){
            
            img.src = 'little-black-white-cute-cat-meow-p2i481yvmyo43wj3.gif';
            cat = cat+1
              document.getElementById("result_count").innerHTML = "Detected Count - " + cat;
            
        } else{
            img.src = "ear.png"
        }






    } 
}