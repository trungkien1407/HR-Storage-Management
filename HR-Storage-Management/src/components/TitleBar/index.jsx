import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import AddchartIcon from '@mui/icons-material/Addchart'
import RefreshIcon from '@mui/icons-material/Refresh'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
// import React from 'react'
import { Box } from '@mui/material'

function Title_Bar() {
  return (
    <Box sx={{
        display:'flex',
        justifyContent:'space-between',
        width:'100%',
        paddingX:'64px',
        maxHeight:'70px',
        paddingY:'20px'
    }}>
        <Box>
            <Typography variant='h6' gutterBottom sx={{fontWeight:700}}>
                0
            </Typography>
        </Box>
        <Box sx={{
            display:'flex',
            gap: 1,
            
        }}>
            <Button size="small" variant="outlined" startIcon={<AddIcon/>}>Tạo thẻ</Button>
            <Button size="small" variant="outlined" startIcon={<AddchartIcon/>}>Đặt biểu đồ</Button>
            <Button size="small" variant="outlined" startIcon={<RefreshIcon/>}>Làm mới</Button>
            <Button size="small" variant="outlined" startIcon={<MoreHorizIcon/>}></Button>

        </Box>
    </Box>
  )
}

export default Title_Bar
