import React, { useState } from 'react';
import { Container, VStack, Input, Button, Text, HStack, Select, Box, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';

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
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <VStack spacing={4} width="100%" as={motion.div} initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
          <Heading as="h1" size="xl" mb={6}>Camera Storage Calculator</Heading>
          <Input
            placeholder="Storage Capacity (GB)"
            value={storageCapacity}
            onChange={(e) => setStorageCapacity(e.target.value)}
            type="number"
            focusBorderColor="blue.500"
            size="lg"
          />
          <HStack width="100%">
            <Select placeholder="Video Format" width="50%" size="lg" focusBorderColor="blue.500">
              <option value="h264">H.264</option>
              <option value="h265">H.265</option>
            </Select>
            <Input
              placeholder="Bitrate (Mbps)"
              value={bitrate}
              onChange={(e) => setBitrate(e.target.value)}
              type="number"
              width="50%"
              focusBorderColor="blue.500"
              size="lg"
            />
          </HStack>
          <Input
            placeholder="Recording Time per Day (hours)"
            value={recordingTime}
            onChange={(e) => setRecordingTime(e.target.value)}
            type="number"
            focusBorderColor="blue.500"
            size="lg"
          />
          <Button onClick={calculateStorageDays} colorScheme="blue" size="lg" as={motion.button} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Calculate</Button>
          {result && <Text fontSize="lg" mt={4} as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>{result}</Text>}
        </VStack>
      </motion.div>
    </Container>
  );
};

export default Index;