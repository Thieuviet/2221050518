// Hàm phát video
function playVideo(videoSrc) {
    const videoPlayer = document.getElementById('main-video');
    const videoTitle = document.getElementById('video-title');
    
    // Gán link video vào thuộc tính src của iframe
    videoPlayer.src = videoSrc;
    // videoTitle.textContent = "Đang phát: " + videoTitle;
  } 