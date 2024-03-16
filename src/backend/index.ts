'use server'

import { Device, SearchParams, Vulnerability } from 'types/devices'

async function fetcher<T>(url: string, searchParams?: SearchParams): Promise<T | null> {
  const params = new URLSearchParams(searchParams).toString()

  try {
    const res = await fetch(
      `http://${process.env.VERCEL_URL ?? 'localhost:3000'}/api/${url}?${params}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    return await res.json()
  } catch (error) {
    console.error(error)
    return null
  }
}

export const getDevices = (searchParams: SearchParams) => {
  return fetcher<Device[]>('devices', searchParams)
}

export const getDevice = ({ id }: { id: number }) => {
  return fetcher<Device>(`devices/${id}`)
}

export const getVulnerabilities = (searchParams: SearchParams) => {
  return fetcher<Vulnerability[]>('vulnerabilities', searchParams)
}

export const getDeviceVulnerabilities = ({ id }: { id: number }) => {
  return fetcher<Vulnerability[]>(`devices/${id}/vulnerabilities`)
}
