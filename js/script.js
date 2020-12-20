const buttonAudio = document.querySelector('.audioButton')
const audio = document.querySelector('.audio')
audio.volume = 0.2
buttonAudio.addEventListener('click', () => {
  if(!audio.muted){
    audio.muted = true
    buttonAudio.setAttribute('src',"./img/mute.svg")
  }else{
    audio.muted = false
    buttonAudio.setAttribute('src',"./img/volume.svg")
  }
})