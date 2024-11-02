// src/components/Hints.js
import React from 'react';
import { Typography } from '@mui/material';

function Hints() {
  return (
    <div>
      <Typography variant="h6">Hints</Typography>
      <Typography variant="body2">
        - The Dirac equation requires input values for mass and momentum.
      </Typography>
      <Typography variant="body2">
        - Use SI units for consistency (mass in kg, momentum in kg⋅m/s).
      </Typography>
      <Typography variant="body2">
        - For free particles, assume no external fields.
      </Typography>
    </div>
  );
}

export default Hints;
