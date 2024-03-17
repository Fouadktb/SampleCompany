'use client'

import { useMemo, useState } from 'react'
import { Button, HStack, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import CsvDownloader from 'react-csv-downloader'
import type { Device } from 'types/devices'

import { DeviceCard } from '.'

interface Props {
  devices: Device[]
}

const cols = [
  { id: 'id', displayName: 'ID' },
  { id: 'IPv4_address', displayName: 'IPv4 Address' },
  { id: 'hostname', displayName: 'Hostname' },
  { id: 'MAC_address', displayName: 'MAC Address' },
  { id: 'operating_system', displayName: 'Operating System' },
  { id: 'manufacturer', displayName: 'Manufacturer' },
  { id: 'model', displayName: 'Model' },
  { id: 'open_ports', displayName: 'Open Ports' },
]

export const SelectableDevices = ({ devices }: Props) => {
  const [isSelecting, setIsSelecting] = useState(false)
  const [selectedDevices, setSelectedDevices] = useState<Device[]>([])

  const handleSelect = (device: Device) => {
    if (selectedDevices.includes(device)) {
      setSelectedDevices(selectedDevices.filter(d => d.id !== device.id))
    } else {
      setSelectedDevices([...selectedDevices, device])
    }
  }

  const datas = useMemo(() => {
    return devices.map(device => {
      return {
        id: String(device.id),
        IPv4_address: device.IPv4_address,
        hostname: device.hostname,
        MAC_address: device.MAC_address,
        operating_system: device.operating_system,
        manufacturer: device.manufacturer,
        model: device.model,
        open_ports: device.open_ports.join(', '),
      }
    })
  }, [devices])

  const selectedDatas = useMemo(() => {
    return selectedDevices.map(device => {
      return {
        id: String(device.id),
        IPv4_address: device.IPv4_address,
        hostname: device.hostname,
        MAC_address: device.MAC_address,
        operating_system: device.operating_system,
        manufacturer: device.manufacturer,
        model: device.model,
        open_ports: device.open_ports.join(', '),
      }
    })
  }, [selectedDevices])

  return (
    <Stack width='full'>
      {isSelecting && (
        <Text
          textAlign='center'
          fontSize='2xl'
          fontStyle='italic'
        >
          *Click on Device to Select
        </Text>
      )}
      <SimpleGrid
        width='full'
        py={12}
        gap={4}
        minChildWidth={350}
      >
        {Array.isArray(devices) && devices?.length > 0 ? (
          devices?.map(device => {
            return (
              <DeviceCard
                device={device}
                key={device?.id}
                isSelecting={isSelecting}
                isSelected={selectedDevices.includes(device)}
                handleSelect={handleSelect}
              />
            )
          })
        ) : (
          <Text>No devices with Vulnerabilities found</Text>
        )}
      </SimpleGrid>

      <HStack justify='center'>
        <CsvDownloader
          filename='Devices'
          datas={datas}
          columns={cols}
        >
          <Button>Export all Devices</Button>
        </CsvDownloader>

        {isSelecting ? (
          <CsvDownloader
            filename='Devices'
            datas={selectedDatas}
            columns={cols}
          >
            <Button
              backgroundColor='teal.500'
              color='white'
              onClick={() => {
                setIsSelecting(false)
                setSelectedDevices([])
              }}
            >
              Export selected Devices
            </Button>
          </CsvDownloader>
        ) : (
          <Button
            onClick={() => {
              setIsSelecting(true)
            }}
          >
            Select devices to Export
          </Button>
        )}
      </HStack>
    </Stack>
  )
}
