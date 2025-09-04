'use strict'

// https://www.youtube.com/watch?v=EK_LN3XEcnw 

function onInit() {
    console.log('WikiTube initialized')
    // renderVideoList(videos)
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
        <li class="video-item" onclick="onVideoSelect('${video.id}')">
        <img src="${video.thumbnail}" alt="${video.title}">
            <h3>${video.title}</h3>
        </li>
    `)

    elVideoList.innerHTML = strHtml.join('')

    renderVideoPlay(videos[4])
    renderWiki(videos[4].description)

}

function renderVideoPlay(video) {
    console.log('Rendering video play section', video)

    // console.log(document.querySelector('iframe'))

    const elVideoPlay = document.querySelector('.video-play')
    console.log(elVideoPlay)

    const elIframe = elVideoPlay.querySelector('iframe')
    elIframe.src = `https://www.youtube.com/embed/${video.id}`

}

function onVideoSelect(videoId) {
    const video = gCache.find(video => video.id === videoId)
    console.log('Selected video:', video)
    if (video) {
        renderVideoPlay(video)
    }

    const elVideoList = document.querySelector('.video-play p')
    console.log(elVideoList)
    const strHtml = video.title
    elVideoList.innerHTML = strHtml

    renderWiki(video.description)

}

function renderWiki(description) {
    const elWiki = document.querySelector('.wiki p')
    console.log(elWiki)
    elWiki.innerHTML = description

}

function onSearchVideos() {
    searchVideos()
        .then(videos => {
            console.log('Search results:', videos)
            renderVideoList(videos)
        })
        .catch(err => console.error('Error searching videos:', err))
}
