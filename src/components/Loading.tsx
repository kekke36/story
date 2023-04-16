import { CircularProgress } from '@mui/material'
import React from 'react'

const Loading = () => {
  return (
    <div className='relative'>
      <div className='absolute inset-0 z-10 flex h-screen items-center justify-center bg-black opacity-20'>
        <CircularProgress />
      </div>
    </div>
  )
}

export default Loading
