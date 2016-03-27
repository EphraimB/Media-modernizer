var upload = document.getElementById("upload");
var result = document.getElementById("result");

var resolutionOfUploadedFile = document.getElementById("resolutionOfUploadedFile");
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
            resolutionOfUploadedFile.innerHTML = "Resolution: " + inputtedImage.width + " x " + inputtedImage.height;
            sizeOfUploadedFile.innerHTML = "Size: " + inputtedImage.size;
        };

        inputtedImage.src = fr.result;
    };

    fr.readAsDataURL(this.files[0]);
};