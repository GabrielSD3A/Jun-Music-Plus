var audio = document.getElementById('audio');
var button = document.getElementById('play-button');

document.getElementById('add-to-library').addEventListener('click', function() {
    alert('Música adicionada à sua biblioteca!');
});

function play_music() {
    audio.play();
}