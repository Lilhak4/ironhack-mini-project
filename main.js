var video = document.querySelector('video');
navigator.mediaDevices.getUserMedia({video:true, audio:false})
  .then(function(mediaStream){
    window.stream = mediaStream;
    video.src = URL.createObjectURL(mediaStream);
    video.play();
});