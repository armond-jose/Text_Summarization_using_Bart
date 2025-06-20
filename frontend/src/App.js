import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Paper,
  Alert,
  Box,
} from '@mui/material';

// 🔧 Toggle between local and deployed backend
const BACKEND_URL = 'https://0042-2409-40f3-1017-3733-114a-bc57-9ba8-c0f9.ngrok-free.app/summarize';


// const BACKEND_URL = 'https://your-backend-url.onrender.com/summarize';

function App() {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSummarize = async () => {
    if (!inputText.trim()) {
      setError("Please enter some text to summarize.");
      return;
    }

    setLoading(true);
    setSummary('');
    setError('');

    try {
      const response = await axios.post(BACKEND_URL, {
        text: inputText,
      });
      setSummary(response.data.summary);
    } catch (err) {
      setError('Something went wrong. Please ensure the backend is running.');
    }

    setLoading(false);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
        py: 5,
        px: 2,
      }}
    >
      <Container maxWidth="md">
        <Paper elevation={10} sx={{ p: 4, borderRadius: 6, backgroundColor: '#1c1c1e', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
          <Typography variant="h3" align="center" gutterBottom sx={{ color: '#d4af37', fontWeight: 'bold', fontFamily: 'serif' }}>
            🧠 BART Text Summarizer
          </Typography>

          <TextField
            label="Enter text to summarize"
            multiline
            rows={8}
            fullWidth
            variant="outlined"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            margin="normal"
            sx={{
              backgroundColor: '#2c2c2e',
              input: { color: '#ffffff' },
              textarea: { color: '#ffffff' },
              label: { color: '#d4af37' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#555',
                },
                '&:hover fieldset': {
                  borderColor: '#d4af37',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#d4af37',
                },
              },
            }}
          />

          <Button
            variant="contained"
            size="large"
            onClick={handleSummarize}
            disabled={loading}
            sx={{
              mt: 2,
              background: 'linear-gradient(to right, #d4af37, #c19a6b)',
              color: 'black',
              fontWeight: 'bold',
              fontSize: '1rem',
              '&:hover': {
                background: 'linear-gradient(to right, #c19a6b, #d4af37)',
              },
            }}
            fullWidth
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Summarize'}
          </Button>

          {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}

          {summary && (
            <Paper elevation={6} sx={{ mt: 4, p: 3, backgroundColor: '#2c2c2e', borderLeft: '5px solid #d4af37' }}>
              <Typography variant="h5" sx={{ color: '#d4af37', fontWeight: 'bold', fontFamily: 'serif' }}>
                📄 Summary
              </Typography>
              <Typography variant="body1" sx={{ mt: 1, color: '#ffffff', fontSize: '1.1rem', lineHeight: 1.6 }}>
                {summary}
              </Typography>
            </Paper>
          )}
        </Paper>
      </Container>
    </Box>
  );
}

export default App;
