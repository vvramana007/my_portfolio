import server from '../src/server';

export default async function handler(req: any, res: any) {
  try {
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers.host || 'localhost';
    const url = new URL(req.url || '/', `${protocol}://${host}`);

    const request = new Request(url, {
      method: req.method,
      headers: new Headers(req.headers as Record<string, string>),
    });

    const response = await server.fetch(request, {}, {});

    res.status(response.status);
    response.headers.forEach((value: string, key: string) => {
      res.setHeader(key, value);
    });

    const body = await response.text();
    res.send(body);
  } catch (error) {
    console.error('SSR Error:', error);
    res.status(500).send('Internal Server Error');
  }
}
