import { type NextRequest } from 'next/server'
import { devices } from '@/data/devices'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('sort')

  try {
    const data = devices

    // by default sort by hostname asc order if no query is provided
    data.sort((a, b) => {
      if (query === 'desc') {
        return a.hostname > b.hostname ? -1 : 1
      }
      return a.hostname > b.hostname ? 1 : -1
    })

    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}
