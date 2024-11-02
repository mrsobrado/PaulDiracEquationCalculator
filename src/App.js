// src/App.js
import React from 'react';
import { Container, Typography } from '@mui/material';
import DiracCalculator from './components/DiracCalculator';

function App() {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Dirac Equation Calculator
      </Typography>
      <DiracCalculator />
    </Container>
  );
}

export default App;
