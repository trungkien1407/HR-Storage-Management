import {Container} from '@mui/material'
import AppBar from '../../components/AppBar'
import {Box} from '@mui/material'


function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh'}}>
        <Box>
        <AppBar />
        </Box>
    </Container>
  )
}

export default Board
