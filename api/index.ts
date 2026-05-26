// Vercel Edge Function — re-exports the Cloudflare Worker bundle.
// The worker uses Web standard Request/Response, which Edge runtime supports.
// @ts-expect-error - bundled output, no types
import worker from '../dist/server/index.js';

export const config = {
  runtime: 'edge',
};

export default async function handler(request: Request): Promise<Response> {
  try {
    return await worker.fetch(request, {}, {});
  } catch (err) {
    console.error('Edge handler error:', err);
    return new Response('Internal Server Error', { status: 500 });
  }
}
