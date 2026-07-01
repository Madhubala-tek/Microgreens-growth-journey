
// 1. Grab all 9 grid items at once
const gridItems = document.querySelectorAll('.grid-item');

// Keep track of the currently playing audio so sounds don't overlap
let currentAudio = null;

// 2. Loop through each grid item
gridItems.forEach(item => {
    
    // 3. Listen for a click on this specific item
    item.addEventListener('click', function() {
        
        // If an audio file is already playing, stop it first
        if (currentAudio) {
            currentAudio.pause();
        }

        // 4. Get the day number from the 'data-day' attribute (e.g., "5")
        const dayNumber = this.getAttribute('data-day');
        
        // 5. Create a new audio player pointing to the right file (e.g., "day5.mp3")
        currentAudio = new Audio(`day${dayNumber}.mp3`);
        
        // 6. Play it!
        currentAudio.play();
    });
});