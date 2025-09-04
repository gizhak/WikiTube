'use strict'



function onInit() {
    console.log('WikiTube initialized')
    // renderVideoList()
}


function renderVideoList(videos) {
    console.log('Rendering video list:', videos)

    if (!videos || videos.length === 0) {
        console.log('No videos to display')
        return
    }

    const elVideoList = document.querySelector('.video-list')
    console.log(elVideoList)

    const strHtml = videos.map(video => `
        <li class="video-item">
        <img src="${video.thumbnail}" alt="${video.title}">
            <h3>${video.title}</h3>
        </li>
    `)

    elVideoList.innerHTML = strHtml.join('')

}

function onSearchVideos() {
    searchVideos()
        .then(videos => {
            console.log('Search results:', videos)
            renderVideoList(videos)
        })
        .catch(err => console.error('Error searching videos:', err))
}
