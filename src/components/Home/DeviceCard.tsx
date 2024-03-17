'use client'

import { getDeviceVulnerabilities } from '@/backend'
import { Link } from '@chakra-ui/next-js'
import { Stack, Text } from '@chakra-ui/react'
import { Device } from 'types/devices'

interface Props {
  device: Device
}

export const DeviceCard = async ({ device }: Props) => {
  const vulnerabilities = await getDeviceVulnerabilities({ id: device?.id })

  return (
    <Link
      href={`/${device?.id}`}
      key={device?.id}
    >
      <Stack
        padding={12}
        borderRadius='12px'
        border='1px solid'
      >
        <Text
          fontWeight='bold'
          textAlign='center'
          pb={4}
        >
          {device?.hostname}
        </Text>
        <Text>IP: {device?.IPv4_address}</Text>
        <Text>Model: {device?.model}</Text>
        <Text>MAC_address: {device?.MAC_address}</Text>
        <Text>Operating System: {device?.operating_system}</Text>
        <Text>Manufacturer: {device?.manufacturer}</Text>
        <Text>Open Ports: {device?.open_ports?.join(', ')}</Text>
        <Text color={vulnerabilities && vulnerabilities?.length > 0 ? 'red' : 'green'}>
          Vulnerabilities: {vulnerabilities?.length}
        </Text>
      </Stack>
    </Link>
  )
}
