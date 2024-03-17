import { Stack, Text } from '@chakra-ui/react'
import { Vulnerability } from 'types/devices'

import { Link } from '../Wrappers'

interface Props {
  vulnerability: Vulnerability
  isSelecting: boolean
  isSelected: boolean
  handleSelect: (vulnerability: Vulnerability) => void
}

export const VulnerabilitiyCard = ({
  vulnerability,
  isSelected,
  isSelecting,
  handleSelect,
}: Props) => {
  return (
    <Stack
      padding={12}
      borderRadius='12px'
      border='1px solid'
      maxW='sm'
      onClick={() => {
        if (isSelecting) {
          handleSelect(vulnerability)
        }
      }}
      borderColor={isSelected ? 'blue' : 'gray'}
      _hover={{
        cursor: 'pointer',
      }}
    >
      <Link
        href={`/${vulnerability?.device_id}`}
        key={vulnerability?.device_id}
        pointerEvents={isSelecting ? 'none' : 'auto'}
      >
        <Text>Name: {vulnerability?.name}</Text>
        <Text>CVE: {vulnerability?.CVE}</Text>
        <Text
          color={
            vulnerability?.severity === 'Critical'
              ? 'red'
              : vulnerability?.severity === 'High'
                ? 'orange'
                : 'green'
          }
        >
          Severity: {vulnerability?.severity}
        </Text>
        <Text>Description: {vulnerability?.description}</Text>
        <Text>Solution: {vulnerability?.solution}</Text>
        <Text>CVSS Vector: {vulnerability?.cvss_vector}</Text>
        <Text>Affected Software: {vulnerability?.affected_software}</Text>
        <Text color={vulnerability?.exploit_present ? 'red' : 'green'}>
          Exploit Present: {String(vulnerability?.exploit_present)}
        </Text>
      </Link>
    </Stack>
  )
}
