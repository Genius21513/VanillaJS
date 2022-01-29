const emitVideoData = {
    id: '_all',
    onReady: function (video) {
        const intitiatedVideos = window.intitiated_videos || []
        const videoEvent = (video, videoEventType) => {
            const videoCustomEvent = new CustomEvent('video', {
                detail: {
                    videoName: video.name(),
                    videoId: video.hashedId(),
                    videoSecondsWatched: video.secondsWatched(),
                    videoIsMuted: video.isMuted(),
                    videoSecondsLength: Math.round(video.duration()),
                    videoCurrentTime: Math.round(video.time()),
                    eventType: videoEventType
                }
            })
            window.dispatchEvent(videoCustomEvent)
        }

        console.log('Video Available - test')
        videoEvent(video, 'videoAvailable')

        video.bind('play', () => {
            if (intitiatedVideos.includes(video.hashedId())) {
                console.log('Video Resume')
                videoEvent(video, 'videoResumed')
            } else {
                console.log('Video Started')
                videoEvent(video, 'videoStarted')
                intitiatedVideos.push(video.hashedId())
            }
        })

        video.bind('percentwatchedchanged', (percent, lastPercent) => {
            if (percent >= 0.25 && lastPercent < 0.25) {
                console.log('25% played')
                videoEvent(video, 'video25')
            } else if (percent >= 0.50 && lastPercent < 0.50) {
                console.log('50% played')
                videoEvent(video, 'video50')
            } else if (percent >= 0.75 && lastPercent < 0.75) {
                console.log('75% played')
                videoEvent(video, 'video75')
            }
        })

        video.bind('pause', () => {
            console.log('Video Paused')
            videoEvent(video, 'videoPaused')
        })

        video.bind('end', () => {
            console.log('Video End')
            videoEvent(video, 'videoCompleted')
        })
    }
}

export default emitVideoData
