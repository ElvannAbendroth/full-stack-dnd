export async function GET() {
  return new Response(JSON.stringify({ version: 1 }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
