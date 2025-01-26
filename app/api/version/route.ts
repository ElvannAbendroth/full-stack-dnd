export async function GET() {
  return new Response(JSON.stringify({ version: 3 }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
