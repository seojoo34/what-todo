self.addEventListener('install', (e) => {
  console.log('Service Worker 설치 완료!');
});

self.addEventListener('fetch', (e) => {
  // 요청을 가로채지만 지금은 아무것도 하지 않음 (기본 기능)
});
