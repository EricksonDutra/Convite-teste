// document.addEventListener('DOMContentLoaded', () => {
//     const video = document.querySelector('video');

//     if (video) {
//         // Garante que o vídeo está silenciado para o autoplay
//         video.muted = true;
//         video.play().catch((error) => {
//             console.log('Autoplay bloqueado:', error);
//         });

//         // Remove o mute após interação do usuário
//         document.addEventListener('canplay', () => {
//             video.muted = false; // Ativa o som
//             video.play().catch((error) => {
//                 console.log('Erro ao reproduzir:', error);
//             });
//         });
//     }
    
// });