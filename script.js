var userAgent = navigator.userAgent || navigator.vendor || window.opera;

if (/android/i.test(userAgent)) {
    document.getElementById('betanchor').href = 'https://play.google.com/apps/testing/xyz.studex.studex';
    document.getElementById('betanchor').classList.remove('comingsoon');
}

if (/iPad|iPhone|iPod|Macintosh/.test(userAgent) && !window.MSStream) {
    document.getElementById('betanchor').href = 'https://testflight.apple.com/join/vboBn59L';
    document.getElementById('betanchor').classList.remove('comingsoon');
}