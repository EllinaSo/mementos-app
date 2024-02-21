import React from 'react';
import moment from 'moment';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Post = ({
  data: {
    title, tags, message, creator, selectedFile, likeCount, createdAt,
  },
  onEdit,
  onDelete,
}) => (
  <Card sx={{ height: '100%' }}>
    <Stack sx={{ height: '100%' }}>
      <CardHeader
        disableTypography
        action={(
          <IconButton aria-label="Edit" onClick={onEdit}>
            <EditIcon />
          </IconButton>
        )}
        title={<Typography variant="body1" sx={{ fontWeight: 'bold' }}>{title}</Typography>}
        subheader={(
          <Typography variant="body2" color="text.secondary">
            <b>
              {`${creator} - `}
            </b>
            {moment(createdAt).fromNow()}
          </Typography>
        )}
      />

      {selectedFile && (
        <CardMedia
          component="img"
          height="190"
          image={selectedFile}
          alt={`${title} photo`}
        />
      )}

      {(message || tags) && (
        <CardContent sx={{ paddingBottom: 0 }}>
          <Typography variant="body2" mb={1}>
            {message}
          </Typography>

          {tags && (
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {tags.split(' #').map(
                (tag, index) => (tag ? <Chip key={index} variant="outlined" color="success" size="small" label={`${index ? '#' : ''}${tag}`} /> : null),
              )}
            </Stack>
          )}
        </CardContent>
      )}

      <CardActions disableSpacing sx={{ justifyContent: 'space-between', marginTop: 'auto' }}>
        <Stack direction="row" alignItems="center">
          <IconButton aria-label="Like it">
            <FavoriteIcon />
          </IconButton>
          <Typography color="text.secondary">{likeCount}</Typography>
        </Stack>
        <IconButton aria-label="Delete" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Stack>
  </Card>
);

export default Post;
