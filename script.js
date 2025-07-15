document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('video-fondo');
  video.play().catch(e => console.log("Error al reproducir automáticamente:", e));
});