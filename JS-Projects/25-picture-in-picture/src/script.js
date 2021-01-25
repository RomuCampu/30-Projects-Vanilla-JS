const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Propmt user for media screen to pass to video element
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch (error) {
    console.log('Whoops, something whent wrong', error);
  }
}

button.addEventListener('click', async () => {
  // Disable button
  button.disable = true;
  // Laucnh picture in picture
  await videoElement.requestPictureInPicture();
  // Reset button
  button.disable = false;
});

selectMediaStream();