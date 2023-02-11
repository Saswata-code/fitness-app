import React from 'react';
import { Typography,Stack,Box } from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollbar';

const SimilarExercises = ({targetMuscleExercises,equipmentExercises}) => {
  return (
    <Box sx={{mt : {lg : '100px', xs: '0'}}}>
      <Typography variant="h3" mb={5} ml={5}>Exercises that target the same muscle group</Typography>
      <Stack direction="row" sx={{p : '2', position : 'relative'}}>
        {targetMuscleExercises.length && <HorizontalScrollBar data={targetMuscleExercises} />}
      </Stack>
      <Typography variant="h3" mb={5} ml={5}>Exercises that use the same Equipment</Typography>
      <Stack direction="row" sx={{p : '2', position : 'relative'}}>
        {equipmentExercises.length && <HorizontalScrollBar data={equipmentExercises} />}
      </Stack>

    </Box>
  )
}

export default SimilarExercises