https://teachablemachine.withgoogle.com/models/nxsZa5rE3/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/nxsZa5rE3/model.json",modelready)
}
function modelready(){
    classifier.classify(gotResults)
}
function gotResults(error, result){
    if (error) {
        console.error(error)
    } else {
        console.log(result)
        document.getElementById("result_label").innerHTML = "I can hear - " + result[0].label
        document.getElementById("result_confidence").innerHTML = "Accuracy - " + result[0].confidence
        r = Math.floor(Math.random() * 255)
        g = Math.floor(Math.random() * 255)
        b = Math.floor(Math.random() * 255)
        document.getElementById("result_label").style.color = "rgb(" + r + ","  + g + ","  + b + ")"
        document.getElementById("result_confidence").style.color = "rgb(" + r + ","  + g + ","  + b + ")"
        img1 = document.getElementById("i1")
        if (result[0].label == "Barking"){
            img1.src = "dog.jpg"
         
        }
        if (result[0].label == "Meowing"){
            img1.src = "cat.jpg"
        
            }
        if (result[0].label == "Roaring"){
            img1.src = "lion.jpg"

                }
        if (result[0].label == "Mooing"){
            img1.src = "cow.png"
            }          

    }
}