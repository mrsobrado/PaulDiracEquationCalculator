// src/components/DiracCalculator.js
import React, { useState } from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import InputForm from './InputForm';
import Hints from './Hints';
import DemoData from './DemoData';

function DiracCalculator() {
  const [result, setResult] = useState(null);

  const calculateDiracEquation = (inputValues) => {
    // Placeholder calculation. Replace with Dirac equation logic using `mathjs` or similar.
    const calculatedResult = `Result with values: ${JSON.stringify(inputValues)}`;
    setResult(calculatedResult);
  };

  return (
    <Box mt={4}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant="h6">Input Parameters</Typography>
            <InputForm onCalculate={calculateDiracEquation} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <Hints />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant="h6">Result</Typography>
            <Typography variant="body1">{result || 'No calculation yet.'}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <DemoData />
        </Grid>
      </Grid>
    </Box>
  );
}

export default DiracCalculator;
