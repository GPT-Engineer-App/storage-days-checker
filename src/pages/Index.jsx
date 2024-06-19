import React, { useState } from 'react';
import { Container, VStack, Input, Button, Text, HStack, Select } from '@chakra-ui/react';

const Index = () => {
  const [storageCapacity, setStorageCapacity] = useState('');
  const [bitrate, setBitrate] = useState('');
  const [recordingTime, setRecordingTime] = useState('');
  const [result, setResult] = useState(null);

  const calculateStorageDays = () => {
    const storageGB = parseFloat(storageCapacity);
    const bitrateMbps = parseFloat(bitrate);
    const recordingHours = parseFloat(recordingTime);

    if (isNaN(storageGB) || isNaN(bitrateMbps) || isNaN(recordingHours)) {
      setResult('Please enter valid numbers for all fields.');
      return;
    }

    const bitrateMBps = bitrateMbps / 8; // Convert Mbps to MBps
    const dailyUsageGB = (bitrateMBps * 3600 * recordingHours) / (1024); // Daily usage in GB
    const storageDays = storageGB / dailyUsageGB;

    setResult(`The camera can store approximately ${storageDays.toFixed(2)} days of video.`);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Camera Storage Calculator</Text>
        <Input
          placeholder="Storage Capacity (GB)"
          value={storageCapacity}
          onChange={(e) => setStorageCapacity(e.target.value)}
          type="number"
        />
        <HStack width="100%">
          <Select placeholder="Video Format" width="50%">
            <option value="h264">H.264</option>
            <option value="h265">H.265</option>
          </Select>
          <Input
            placeholder="Bitrate (Mbps)"
            value={bitrate}
            onChange={(e) => setBitrate(e.target.value)}
            type="number"
            width="50%"
          />
        </HStack>
        <Input
          placeholder="Recording Time per Day (hours)"
          value={recordingTime}
          onChange={(e) => setRecordingTime(e.target.value)}
          type="number"
        />
        <Button onClick={calculateStorageDays} colorScheme="blue">Calculate</Button>
        {result && <Text>{result}</Text>}
      </VStack>
    </Container>
  );
};

export default Index;