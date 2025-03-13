import { alpha, Box, LinearProgress, linearProgressClasses } from '@mui/material';

export function LazyFallback() {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" flexGrow={1}>
      <LinearProgress
        sx={{
          width: 1,
          maxWidth: 320,
          bgcolor: theme => alpha(theme.palette.text.primary, 0.16),
          [`& .${linearProgressClasses.bar}`]: { bgcolor: 'text.primary' },
        }}
      />
    </Box>
  );
}
