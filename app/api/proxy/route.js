export const runtime = 'edge';

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const vehicle = url.searchParams.get('vehicle') || 'JK05F1806';

    const API_KEY = process.env.DARK_OP_KEY;
    if (!API_KEY) {
      return new Response(JSON.stringify({ error: 'API key not configured' }), { status: 500 });
    }

    const externalUrl = `http://dark-op.dev-is.xyz/?key=${encodeURIComponent(API_KEY)}&vehicle=${encodeURIComponent(vehicle)}`;

    const response = await fetch(externalUrl);
    const contentType = response.headers.get('content-type') || 'text/plain';
    const body = await response.text();

    return new Response(body, {
      status: response.status,
      headers: { 'Content-Type': contentType },
    });
  } catch (err) {
    console.error('Edge proxy error:', err);
    return new Response(JSON.stringify({ error: 'Failed to fetch data', details: err.message }), { status: 500 });
  }
}
