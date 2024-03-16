export type SearchParams = {
  sort?: string
}

export interface Vulnerability {
  device_id: number
  CVE: string
  name: string
  severity: string
  description: string
  solution: string
  cvss_vector: string
  affected_software: string[]
  exploit_present: boolean
}

export interface Device {
  id: number
  IPv4_address: string
  hostname: string
  MAC_address: string
  operating_system: string
  manufacturer: string
  model: string
  open_ports: string[]
}
