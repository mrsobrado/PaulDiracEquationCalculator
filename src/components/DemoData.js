// src/components/DemoData.js
import React from 'react';
import { Typography, Button } from '@mui/material';

function DemoData() {
  const exampleData = {
    mass: 9.11e-31, // electron mass in kg
    momentum: 1.0e-22, // example momentum in kg⋅m/s
  };

  return (
    <div>
      <Typography variant="h6">Demo Data</Typography>
      <Typography variant="body2">Mass: {exampleData.mass} kg</Typography>
      <Typography variant="body2">Momentum: {exampleData.momentum} kg⋅m/s</Typography>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => alert('Demo data loaded!')}
        fullWidth
        style={{ marginTop: '16px' }}
      >
        Load Demo Data
      </Button>
    </div>
  );
}

export default DemoData;
