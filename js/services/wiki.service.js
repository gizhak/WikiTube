'use strict'



const STORAGE_KEY = 'videoCache'
const gCache = loadFromStorage(STORAGE_KEY) || []

// console.log('gCache on load:', gCache)
// console.log('localStorage data:', loadFromStorage(STORAGE_KEY))

function searchVideos(query = '5') {
    // check if has data from cache and loadeds
    if (gCache && gCache.length > 0) {
        console.log('Using cached data')
        return new Promise((resolve) => resolve(gCache))

    }

    const YT_KEY = `AIzaSyDbB2BXoN6FceBI4a1kPKGRo2HYY0-BV58`
    // const value = '5'
    const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${YT_KEY}&q=${query}`

    console.log('Fetching new data')

    return new Promise((resolve, reject) => {
        axios.get(URL)
            .then(res => {
                const videos = res.data.items.map(item => ({
                    id: item.id.videoId,
                    title: item.snippet.title,
                    description: item.snippet.description,
                    thumbnail: item.snippet.thumbnails.default.url
                }))

                gCache.length = 0
                gCache.push(...videos)
                saveToStorage(STORAGE_KEY, gCache)

                resolve(videos)

            })
            .catch(err => {
                reject(err)
            })

    })
}



