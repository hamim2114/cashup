import { Box, Typography } from '@mui/material'
import Marquee from 'react-fast-marquee'
import React from 'react'

const SponsoredBy = () => {
  return (
    <Box mb={15} mt={4}>
      <Typography variant="h6" textAlign='center' mb={2} fontWeight="bold" >
        Sponsored By
      </Typography>
      <Marquee autoFill gradient>
        <img style={{ width: '100%', height: '100px', marginRight: '30px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsScWYmyfPv3XdkNdEFVJ1wlDKMOgcSWUcg&s' alt="" />
      </Marquee>
    </Box>
  )
}

export default SponsoredBy