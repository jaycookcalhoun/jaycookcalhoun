<script>
    // Get the button element by its id
    const playButton = document.getElementById('playButton');

    // Add a click event listener to the button
    playButton.addEventListener('click', function() {
        // Create an audio element
        const audio = new Audio('music/music.mp3');

        // Play the audio
        audio.play();
    });
</script>