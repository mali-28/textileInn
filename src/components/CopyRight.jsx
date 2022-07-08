import * as React from 'react';

import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

function CopyRight(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default CopyRight  