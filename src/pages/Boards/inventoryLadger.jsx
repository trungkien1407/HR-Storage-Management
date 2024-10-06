import Container from '@mui/material/Container'
import AppBar from '../../components/AppBar'
import Title_Bar from '../../components/TitleBar'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid2 from '@mui/material/Grid2'
import Input from '@mui/material/Input'
import { Box } from '@mui/material'
function InventoryLadger() {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      
      function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];
      
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh',  }}>
    <AppBar/>
    <Title_Bar/>
    <Box sx={{
        boxShadow: 4,
        marginTop:'10px',
        maxWidth:'95vw',
        alignItems:'center',
        justifyContent:'center',
        paddingY:'10px',
        marginLeft:'40px'
    }}>
        <Box sx={{
            display: 'flex',
            gap:'2',
            justifyContent:'center',
            paddingY:'10px'
          }}>
            <Grid2 container spacing={6}>
              <Grid2 size={2}>
                <Box
                 sx={{
                  minWidth:'100px',
                  minHeight:'30px',
                  boxShadow:'4',
                  borderRadius:'10px',
                  cursor:'pointer',
                  
                }}>
                  <Input placeholder="Công ty" sx={{ fontSize:'12px', fontWeight:'600'}}></Input>
                
                </Box>
              </Grid2>
              <Grid2 size={2}>
                <Box sx={{
                  minWidth:'100px',
                  minHeight:'30px',
                  borderRadius:'10px',
                  boxShadow:'4',
                  cursor:'pointer'
                }}>
                  <Input placeholder="Từ ngày" sx={{ fontSize:'12px', fontWeight:'600'}}></Input>
                
                </Box>
              </Grid2>
              <Grid2 size={2}>
                <Box sx={{
                  minWidth:'100px',
                  minHeight:'30px',
                  borderRadius:'10px',
                  boxShadow:'4',
                  cursor:'pointer'
                }}>
                  <Input placeholder="Đến ngày" sx={{ fontSize:'12px', fontWeight:'600'}}></Input>
                
                </Box>
              </Grid2>
              <Grid2 size={2}>
                <Box
                 sx={{
                  minWidth:'100px',
                  minHeight:'30px',
                  boxShadow:'4',
                  borderRadius:'10px',
                  cursor:'pointer',
                  
                }}>
                  <Input placeholder="Kho hàng" sx={{ fontSize:'12px', fontWeight:'600'}}></Input>
                
                </Box>
              </Grid2>
              <Grid2 size={2}>
                <Box
                 sx={{
                  minWidth:'100px',
                  minHeight:'30px',
                  boxShadow:'4',
                  borderRadius:'10px',
                  cursor:'pointer',
                  
                }}>
                  <Input placeholder="Sản phẩm" sx={{ fontSize:'12px', fontWeight:'600'}}></Input>
                
                </Box>
              </Grid2>
              <Grid2 size={2}>
                <Box
                 sx={{
                  minWidth:'100px',
                  minHeight:'30px',
                  boxShadow:'4',
                  borderRadius:'10px',
                  cursor:'pointer',
                  
                }}>
                  <Input placeholder="Nhóm hàng" sx={{ fontSize:'12px', fontWeight:'600'}}></Input>
                
                </Box>
              </Grid2>
          </Grid2>
          </Box>
          <Box sx={{
            display: 'flex',
            gap:'2',
            justifyContent:'center',
            paddingY:'10px'
          }}>
            <Grid2 container spacing={5}>
              <Grid2 size={2}>
                <Box
                 sx={{
                  minWidth:'100px',
                  minHeight:'30px',
                  boxShadow:'4',
                  borderRadius:'10px',
                  cursor:'pointer',
                  
                }}>
                  <Input placeholder="Số hiệu lô" sx={{ fontSize:'12px', fontWeight:'600'}}></Input>
                
                </Box>
              </Grid2>
              <Grid2 size={2}>
                <Box sx={{
                  minWidth:'100px',
                  minHeight:'30px',
                  borderRadius:'10px',
                  boxShadow:'4',
                  cursor:'pointer'
                }}>
                  <Input placeholder="Nhãn" sx={{ fontSize:'12px', fontWeight:'600'}}></Input>
                
                </Box>
              </Grid2>
              <Grid2 size={2}>
                <Box sx={{
                  minWidth:'100px',
                  minHeight:'30px',
                  borderRadius:'10px',
                  boxShadow:'4',
                  cursor:'pointer'
                }}>
                  <Input placeholder="Chứng từ #" sx={{ fontSize:'12px', fontWeight:'600'}}></Input>
                
                </Box>
              </Grid2>
              <Grid2 size={2}>
                <Box
                 sx={{
                  minWidth:'100px',
                  minHeight:'30px',
                  boxShadow:'4',
                  borderRadius:'10px',
                  cursor:'pointer',
                  
                }}>
                  <Input placeholder="Dự Án" sx={{ fontSize:'12px', fontWeight:'600'}}></Input>
                
                </Box>
              </Grid2>
              <Grid2 size={2}>
                <Box
                 sx={{
                  minWidth:'100px',
                  minHeight:'30px',
                  boxShadow:'4',
                  borderRadius:'10px',
                  cursor:'pointer',
                  
                }}>
                  <Input placeholder="Bao gồm UOM" sx={{ fontSize:'12px', fontWeight:'600'}}></Input>
                
                </Box>
              </Grid2>
          </Grid2>
          </Box>
        <Box>
            <TableContainer component={Paper}>
      <Table sx={{
            boxShadow:3,
            maxWidth: '100%',
        }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
        <Box sx={{
            display:'flex',
            justifyContent:'space-between',
            paddingY: '5px',
            marginTop: '10px',
            paddingX:'32px'
        }}>
            <Typography variant='caption'>
                Để so sánh, sử dụng {">"} 5, {"<"}10 hoặc = 324. Đối với phạm vi, sử dụng 5:10 (cho các giá trị trong khoảng từ 5 đến 10).
            </Typography>
            <Typography variant='caption'>
                Thời gian thực hiện: 0.025027 giây
            </Typography>
        </Box>
    </Box>
    </Container>
  )
}

export default InventoryLadger
