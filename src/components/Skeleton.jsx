import { Skeleton, Box, Grid, Stack } from '@mui/material';

const LoadingSkeleton = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Stack direction="row" justifyContent={'space-between'} alignItems={'center'}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Skeleton variant="circular" width={50} height={50} />
          <Skeleton variant="text" width={100} height={80} sx={{ ml: 2 }} />
        </Box>
        <Skeleton variant="text" width={80} height={60} />
      </Stack>
      <Skeleton width={200} height={80} sx={{ borderRadius: '40px', mb: 4, mx: 'auto' }} />
      <Skeleton variant="text" width={150} height={30} sx={{ mb: 2 }} />
      <Grid container spacing={2} sx={{ mb: 8 }}>
        {Array.from(new Array(8)).map((_, index) => (
          <Grid item xs={3} key={index}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Skeleton variant="circular" width={50} height={50} />
              <Skeleton variant="text" width={80} height={20} sx={{ mt: 1 }} />
            </Box>
          </Grid>
        ))}
      </Grid>
      <Skeleton variant="text" width={150} height={30} sx={{ mb: 2 }} />
      <Grid container spacing={2} sx={{ mb: 8 }}>
        {Array.from(new Array(4)).map((_, index) => (
          <Grid item xs={3} key={index}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Skeleton variant="circular" width={50} height={50} />
              <Skeleton variant="text" width={80} height={20} sx={{ mt: 1 }} />
            </Box>
          </Grid>
        ))}
      </Grid>
      <Skeleton variant="text" width={150} height={30} sx={{ mb: 2 }} />
      <Grid container spacing={2}>
        {Array.from(new Array(2)).map((_, index) => (
          <Grid item xs={6} key={index}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Skeleton variant="rectangular" sx={{ width: '100%' }} height={100} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LoadingSkeleton;