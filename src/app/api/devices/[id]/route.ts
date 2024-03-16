import { type NextRequest } from 'next/server'
import { devices } from '@/data/devices'

export async function GET(_: NextRequest, { params: { id } }: { params: { id: number } }) {
  try {
    const data = devices

    if (id) {
      const device = data.find(device => device.id === Number(id))
      return Response.json(device)
    }
  } catch (error) {
    return Response.json({ error })
  }
}
