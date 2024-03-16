'use server'

import { Device, SearchParams, Vulnerability } from 'types/devices'

async function fetcher<T>(url: string, searchParams?: SearchParams): Promise<T | null> {
  const params = new URLSearchParams(searchParams).toString()

  const baseURL = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000'

  try {
    const res = await fetch(`${baseURL}/api/${url}?${params}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
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
