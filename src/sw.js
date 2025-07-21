import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST)

registerRoute(
  ({ url }) =>
    url.origin === 'https://airbnb-backend-eight-omega.vercel.app' &&
    url.pathname.startsWith('/api/products'),
  new StaleWhileRevalidate({
    cacheName: 'api-cache',
  })
);
self.addEventListener('fetch', (event) => {
  console.log('[SW] Fetching:', event.request.url);
});
