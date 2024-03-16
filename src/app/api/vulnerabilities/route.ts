import { type NextRequest } from 'next/server'
import { vulnerabilities } from '@/data/vulnerabilities'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('sort')

  try {
    const data = vulnerabilities

    // by default sort by name asc order if no query is provided
    data?.sort((a, b) => {
      if (query === 'desc') {
        return a.name > b.name ? -1 : 1
      }
      return a.name > b.name ? 1 : -1
    })

    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}
