import React from 'react';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import SkeletonBase from '@mui/material/Skeleton';

const Skeleton = () => (
  <Card sx={{ height: '100%' }}>
    <Stack sx={{ height: '100%' }}>
      <CardHeader
        disableTypography
        title={(
          <SkeletonBase
            animation="wave"
            height={20}
            width="80%"
            style={{ marginBottom: 6 }}
          />
        )}
        subheader={(
          <SkeletonBase
            animation="wave"
            height={20}
            width="40%"
          />
        )}
      />

      <SkeletonBase sx={{ height: 190 }} animation="wave" variant="rectangular" />

      <CardContent sx={{ paddingBottom: 0 }}>
        <SkeletonBase
          animation="wave"
          height={20}
          width="100%"
          style={{ marginBottom: 6 }}
        />
        <SkeletonBase
          animation="wave"
          height={20}
          width="80%"
          style={{ marginBottom: 6 }}
        />
      </CardContent>

      <CardActions disableSpacing sx={{ justifyContent: 'space-between', marginTop: 'auto', pl: 2 }}>
        <SkeletonBase
          animation="wave"
          height={40}
          width={45}
        />
      </CardActions>
    </Stack>
  </Card>
);

export default Skeleton;
