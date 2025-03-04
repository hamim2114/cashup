import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const MainBalance = () => {
  return (
    <Box>
      <Typography sx={{ textAlign: 'center', mb: 4, fontSize: '25px', color: 'green' }}>0.00 BDT</Typography>
      <Button variant="contained" sx={{ width: '100%', bgcolor: 'green', color: 'white' }}>ট্রান্সফার করুন</Button>
    </Box>
  )
}

export default MainBalance