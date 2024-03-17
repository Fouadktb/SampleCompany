'use client'

import { useMemo, useState } from 'react'
import { Button, HStack, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import CsvDownloader from 'react-csv-downloader'
import type { Vulnerability } from 'types/devices'

import { VulnerabilitiyCard } from '.'

interface Props {
  vulnerabilities: Vulnerability[]
}

const cols = [
  { id: 'device_id', displayName: 'device_id' },
  { id: 'CVE', displayName: 'CVE' },
  { id: 'name', displayName: 'Name' },
  { id: 'severity', displayName: 'Severity' },
  { id: 'description', displayName: 'Description' },
  { id: 'solution', displayName: 'Solution' },
  { id: 'cvss_vector', displayName: 'CVSS Vector' },
  { id: 'affected_software', displayName: 'Affected Software' },
  { id: 'exploit_present', displayName: 'Exploit Present' },
]

export const Selectablevulnerabilities = ({ vulnerabilities }: Props) => {
  const [isSelecting, setIsSelecting] = useState(false)
  const [selectedVulnerabilities, setSelectedVulnerabilities] = useState<Vulnerability[]>([])

  const handleSelect = (vulnerability: Vulnerability) => {
    if (selectedVulnerabilities.includes(vulnerability)) {
      setSelectedVulnerabilities(selectedVulnerabilities.filter(d => d.name !== vulnerability.name))
    } else {
      setSelectedVulnerabilities([...selectedVulnerabilities, vulnerability])
    }
  }

  const datas = useMemo(() => {
    return vulnerabilities?.map(vulnerability => {
      return {
        device_id: String(vulnerability.device_id),
        CVE: vulnerability.CVE,
        name: vulnerability.name,
        severity: vulnerability.severity,
        description: vulnerability.description,
        solution: vulnerability.solution,
        cvss_vector: vulnerability.cvss_vector,
        affected_software: vulnerability.affected_software?.join(', '),
        exploit_present: String(vulnerability.exploit_present),
      }
    })
  }, [vulnerabilities])

  const selectedDatas = useMemo(() => {
    return selectedVulnerabilities?.map(vulnerability => {
      return {
        device_id: String(vulnerability.device_id),
        CVE: vulnerability.CVE,
        name: vulnerability.name,
        severity: vulnerability.severity,
        description: vulnerability.description,
        solution: vulnerability.solution,
        cvss_vector: vulnerability.cvss_vector,
        affected_software: vulnerability.affected_software?.join(', '),
        exploit_present: String(vulnerability.exploit_present),
      }
    })
  }, [selectedVulnerabilities])

  return (
    <Stack width='full'>
      {isSelecting && (
        <Text
          textAlign='center'
          fontSize='2xl'
          fontStyle='italic'
        >
          *Click on Vulnerability to Select
        </Text>
      )}
      <SimpleGrid
        width='full'
        py={12}
        gap={4}
        minChildWidth={350}
      >
        {Array.isArray(vulnerabilities) && vulnerabilities?.length > 0 ? (
          vulnerabilities?.map(vulnerability => (
            <VulnerabilitiyCard
              key={vulnerability?.name}
              vulnerability={vulnerability}
              isSelecting={isSelecting}
              isSelected={selectedVulnerabilities.includes(vulnerability)}
              handleSelect={handleSelect}
            />
          ))
        ) : (
          <Text>No Vulnerabilities found</Text>
        )}
      </SimpleGrid>

      <HStack justify='center'>
        <CsvDownloader
          filename='Vulnerabilities'
          datas={datas}
          columns={cols}
        >
          <Button>Export all Vulnerabilities</Button>
        </CsvDownloader>

        {isSelecting ? (
          <CsvDownloader
            filename='Vulnerabilities'
            datas={selectedDatas}
            columns={cols}
          >
            <Button
              backgroundColor='teal.500'
              color='white'
              onClick={() => {
                setIsSelecting(false)
                setSelectedVulnerabilities([])
              }}
            >
              Export selected Vulnerabilities
            </Button>
          </CsvDownloader>
        ) : (
          <Button
            onClick={() => {
              setIsSelecting(true)
            }}
          >
            Select Vulnerabilities to Export
          </Button>
        )}
      </HStack>
    </Stack>
  )
}
