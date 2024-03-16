import { type NextRequest } from 'next/server'
import { vulnerabilities } from '@/data/vulnerabilities'

export async function GET(_: NextRequest, { params: { id } }: { params: { id: number } }) {
  try {
    const data = vulnerabilities

    if (id) {
      const deviceVulnerabilities = data.filter(
        vulnerability => vulnerability.device_id === Number(id),
      )
      return Response.json(deviceVulnerabilities)
    }
  } catch (error) {
    return Response.json({ error })
  }
}
