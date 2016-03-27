var upload = document.getElementById("upload");
var result = document.getElementById("result");

var sizeOfUploadedFile = document.getElementById("sizeOfUploadedFile");
var inputtedFile = document.getElementById("inputtedFile");

inputtedFile.onchange = function()
{
    var fr = new FileReader;

    fr.onload = function()
    {
        var inputtedImage = new Image;

        inputtedImage.onload = function()
        {
            sizeOfUploadedFile.innerHTML = inputtedImage.width + " x " + inputtedImage.height;
        };

        inputtedImage.src = fr.result;
    };

    fr.readAsDataURL(this.files[0]);
};