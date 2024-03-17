import { Stack, Text } from '@chakra-ui/react'
import { Device } from 'types/devices'

import { Link } from '../Wrappers'

interface Props {
  device: Device
  isSelecting: boolean
  isSelected: boolean
  handleSelect: (device: Device) => void
}

export const DeviceCard = ({ device, isSelecting, isSelected, handleSelect }: Props) => {
  return (
    <Stack
      padding={12}
      borderRadius='12px'
      border='1px solid'
      onClick={() => {
        if (isSelecting) {
          handleSelect(device)
        }
      }}
      borderColor={isSelected ? 'blue' : 'gray'}
      _hover={{
        cursor: 'pointer',
      }}
    >
      <Link
        href={`/${device?.id}`}
        pointerEvents={isSelecting ? 'none' : 'auto'}
        key={device?.id}
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
      </Link>
    </Stack>
  )
}
