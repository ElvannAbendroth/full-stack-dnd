export async function GET() {
  return new Response(JSON.stringify({ version: 2 }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
