import { useState } from 'react'
// import List from '@mui/material/List'
// import ListItem from '@mui/material/ListItem'
import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Box } from '@mui/material'

function BoardBar() {
    const [clicked, setClicked] = useState(false);
    const handleChange = (event) => {
        const clicked = event.target.value
        setClicked(clicked)
      }
    
  return (
    <Box sx={{
        marginTop:'2px',
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: (theme) => theme.hrCustom.appBarHeight,
        display: 'flex',
        alignItems:'center',
        justifyContent: 'space-between',
        paddingX: '56px',
        background: 'rgb(246,249,247)'
    }}>
        <Box sx={{
            display: 'flex',
            gap: 1,
            alignItems:'center'}}>
                <IconButton 
                onChange={handleChange}
                value={clicked}
                onClick={() => setClicked(true)}>
                    {clicked ? <KeyboardDoubleArrowLeftIcon /> : <MenuIcon />}
                </IconButton>
            <Typography
            sx={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: 'black'
            }}>
            Kho
          </Typography>
        </Box>
        <Box sx={{
            display: 'flex',
            gap: 1,
            alignItems:'center'}}>
                <Button variant="outlined" size="small" sx={{fontSize:'16px', textAlign:'center', height:'30px', maxWidth:'5px'}}>
                    ...
                </Button>
                <Button variant="outlined" size="small" sx={{ textAlign:'center', height:'30px', maxWidth:'125px'}}>
                    Tùy chỉnh
                </Button>
        </Box>
    </Box>
    
  )
}

export default BoardBar
