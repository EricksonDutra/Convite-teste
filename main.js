document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('video');
    if (video) {
        video.play().catch(() => {
            console.log('Autoplay bloqueado, tentando iniciar manualmente.');
        });
    }

    video.addEventListener('canplay', () => {
        video.muted = false;
    })
});