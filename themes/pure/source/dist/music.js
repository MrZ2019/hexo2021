
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    lrcType: 3,
    audio: [
      {
        name: "tapestry",
        artist: '',
        url: 'http://mrz2019.github.io/Tapestry.mp3',
        cover: '',
        lrc: ''
      },
    ]
});
