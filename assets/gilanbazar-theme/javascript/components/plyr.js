import Plyr from 'plyr';

window.addEventListener('DOMContentLoaded', () => {
    const plyrs = document.querySelectorAll('.js-video');
    const modal = document.querySelector('#videoModal');

    if (!plyrs || !modal) {
        return;
    }
    // eslint-disable-next-line no-unused-vars
    const players = [...plyrs].map(p => new Plyr(p));
    const video = modal.querySelector('.js-video-modal');
    const player = new Plyr(video);

    modal.addEventListener('shown.bs.modal', () => {
        player.play();
    });

    modal.addEventListener('hidden.bs.modal', () => {
        player.stop();
    });
});
