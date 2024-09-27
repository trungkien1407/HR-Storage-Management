import {Container} from '@mui/material'
import AppBar from '~/components/AppBar'
import BoardBar from '~/components/BoardBar'
import {Box} from '@mui/material'


function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh',  }}>
        <Box>
        <AppBar />
        </Box>
        <Box>
        <BoardBar />
        </Box>
        
       
    </Container>
  )
}

export default Board
