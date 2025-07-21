import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

// Cache API
registerRoute(
  ({ url }) => url.pathname.startsWith('https://airbnb-backend-eight-omega.vercel.app/api/'),
  new StaleWhileRevalidate({
    cacheName: 'api-cache',
  })
);
