import { Box } from '@mui/material'
import React from 'react'
import BaseCardComponent from '../components/BaseCardComponent'
import Banner from '../components/Banner'
import Base from '../components/Base'

const UserDashboard = () => {
  return (
    <Base>
      <Box>
        <Banner />
        <BaseCardComponent />
      </Box>
    </Base>
  );
}

export default UserDashboard