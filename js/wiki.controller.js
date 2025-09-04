'use strict'


function onInit() {
    console.log('WikiTube initialized');
}


function renderVideoList(videos) {
    console.log('Rendering video list:', videos);
}

function onSearchVideos() {
    searchVideos()
        .then(videos => {
            console.log('Search results:', videos);
            renderVideoList(videos);
        })
        .catch(err => console.error('Error searching videos:', err));
}
