// import React from 'react'
// import { styled } from '@mui/material/styles'
import {Container} from '@mui/material'
import AppBar from '~/components/AppBar'
import BoardBar from '~/components/BoardBar'
import List from '@mui/material/List'
import ListSubheader from '@mui/material/ListSubheader'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import SettingsIcon from '@mui/icons-material/Settings'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'
import ConstructionIcon from '@mui/icons-material/Construction'
import DomainIcon from '@mui/icons-material/Domain'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import TuneIcon from '@mui/icons-material/Tune'
import WebIcon from '@mui/icons-material/Web'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import WarehouseIcon from '@mui/icons-material/Warehouse'
import StorefrontIcon from '@mui/icons-material/Storefront'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import DescriptionIcon from '@mui/icons-material/Description'
import PaymentIcon from '@mui/icons-material/Payment'
import HistoryEduIcon from '@mui/icons-material/HistoryEdu'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import PieChartIcon from '@mui/icons-material/PieChart'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import HandymanIcon from '@mui/icons-material/Handyman'
import InventoryIcon from '@mui/icons-material/Inventory'
import RequestPageIcon from '@mui/icons-material/RequestPage'
import HomeIcon from '@mui/icons-material/Home'
// import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Grid2 from '@mui/material/Grid2'
// import Paper from '@mui/material/Paper'
import Link from '@mui/material/Link'
import Badge from '@mui/material/Badge'
const shapeCircleStyles = { borderRadius: '50%' }
const shapeStyles = { bgcolor: 'primary.main', width: 20, height: 20 }
import { BarChart } from '@mui/x-charts/BarChart'
import {Box} from '@mui/material'
import CustomCard from '../../components/CustomCard/index.jsx'
import { Card, Chip } from '@mui/material';





function Board() {
  const cardData = [
    { title: 'Sản phẩm', value: '96 Available', status: '' },
    { title: 'Yêu cầu nguyên liệu', value: '4 Pending', status: '' },
    // ... các thẻ còn lại
  ];
  const circle = (
    <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
  );
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh',  }}>
        <Box>
        <AppBar />
        </Box>
        <Box>
        <BoardBar />
        </Box>
        <Box sx={{
          display: 'flex',
          maxHeight:'100vh',
          paddingX: '44px',
          marginTop:'12px',
          overflowY:'auto'
        }}>
          <Box sx={{
            maxWidth:'250px',
            color:'black',
            fontWeight:'400',
            fontSize: '12px',
            display: 'flex',
            flexDirection: 'column',
            overflowX:'hidden',
            overflowY:'auto',

          }}>
              
              <List
      sx={{ width: '100%', 
            maxWidth: 250,
            justifyContent:'flex-start',
            display:'flex',
            flexDirection:'column'
          }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" sx={{ marginLeft: '6px'}}>
          BỘ PHẬN
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Trang chủ" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <RequestPageIcon />
        </ListItemIcon>
        <ListItemText primary="Kế toán" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <InventoryIcon />
        </ListItemIcon>
        <ListItemText primary="Tài sản" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <HandymanIcon />
        </ListItemIcon>
        <ListItemText primary="Build" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Mua hàng" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <PieChartIcon />
        </ListItemIcon>
        <ListItemText primary="CRM" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <BusinessCenterIcon />
        </ListItemIcon>
        <ListItemText primary="Nhân sự" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <HistoryEduIcon />
        </ListItemIcon>
        <ListItemText primary="Khoản vay" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <PaymentIcon />
        </ListItemIcon>
        <ListItemText primary="Bảng lương" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DescriptionIcon />
        </ListItemIcon>
        <ListItemText primary="Dự án" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AnalyticsIcon />
        </ListItemIcon>
        <ListItemText primary="Chất lượng" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <StorefrontIcon />
        </ListItemIcon>
        <ListItemText primary="Bán hàng" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <WarehouseIcon />
        </ListItemIcon>
        <ListItemText primary="Kho" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <SupportAgentIcon />
        </ListItemIcon>
        <ListItemText primary="Hỗ trợ" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <WebIcon />
        </ListItemIcon>
        <ListItemText primary="Website" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Cài đặt" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <FolderOpenIcon />
        </ListItemIcon>
        <ListItemText primary="Tiện ích" />
      </ListItemButton>
    </List>
    <List
      sx={{ width: '100%', maxWidth: 250 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          TÊN MIỀN
        </ListSubheader>
      }>
        <ListItemButton>
        <ListItemIcon>
          <DomainIcon />
        </ListItemIcon>
        <ListItemText primary="Sản xuất" />
      </ListItemButton>
      </List>
      <List
      sx={{ width: '100%', maxWidth: 250 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          QUẢN TRỊ
        </ListSubheader>
      }>
        <ListItemButton>
        <ListItemIcon>
          <TuneIcon />
        </ListItemIcon>
        <ListItemText primary="Tùy biến" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <IntegrationInstructionsIcon />
        </ListItemIcon>
        <ListItemText primary="Tích hợp" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <ConstructionIcon />
        </ListItemIcon>
        <ListItemText primary="Công cụ" />
      </ListItemButton>
      </List>
          </Box>
          
          
          {/* Main Content */}
          
          
          {/* Chart */}
          <Box sx={{
            maxWidth:'1000px',
            maxHeight:'420px',
            boxShadow: '4',
            paddingY:'15px',
            marginLeft:'32px',
            borderRadius:'15px',
            marginTop:'10px'
          }}>
          <Typography variant="h6" gutterBottom sx={{ marginTop: '24px', paddingX:'38px'}}>
              Warehouse wise Stock Value
          </Typography>
          <Typography variant="caption" gutterBottom sx={{ display: 'block', marginTop: '2px', paddingX:'38px'}}>
            Đã đồng bộ hóa lần cuối 3 phút trước
          </Typography>
              <BarChart 
                    xAxis={[
                      {
                        id: 'barCategories',
                        data: ['Cửa hàng - MO', 'Hàng chuyển đi - MO'],
                        scaleType: 'band',
                      },
                    ]}
                    series={[
                      {
                        data: [2, 0],
                      },
                    ]}
                    width={900}
                    height={300}
                    sx={{
                      paddingX:'44px'
                    }}
                  />
              
          
          
          {/* Phần Quick Access */}
          <Typography variant="h6" gutterBottom sx={{ marginTop: '40px', fontWeight:'600'}}>
              Quick Access
          </Typography>
         <CustomCard></CustomCard>
   


          {/* Masters & Reports */}
          <Box>
          <Typography variant="h6" gutterBottom sx={{ marginTop: '40px', fontWeight:'600'}}>
              Masters & Reports
          </Typography>
          </Box>
          <Box sx={{
            display: 'flex',
            gap:'1',
            flexGrow: 1,
            paddingY:'12px'
          }}>
            <Grid2 container spacing={3}>
              <Grid2 size={4}>
                <Box sx={{
                  minWidth:'300px',
                  minHeight:'70px',
                  display:'flex',
                  gap: 1,
                  boxShadow:'4',
                  borderRadius:'10px',
                  alignItems:'flex-start',
                  paddingX:'20px',
                  flexDirection: 'column'
                }}>
                <Box sx={{
                  display:'flex',
                  gap: 1,
                  borderRadius:'10px',
                  alignItems:'center',
                  paddingY:'8px'
                }}>
                <DescriptionIcon />
                <Typography variant='subtitle'>Hàng hóa và giá cả</Typography>
                </Box>
                <Box sx={{
                  display: 'flex',
                  
                }}>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge color="warning" overlap="circular" badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Sản phẩm
                  </Typography>
                  </Box>
                </Box>
                <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge color="warning" overlap="circular" badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Nhóm hàng
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge color='warning' overlap="circular" badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Sản phẩm lô
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge  badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Bảng giá
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge  badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Giá sản phẩm
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge  badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Quy tắc giao hàng
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge  badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Quy tắc định giá
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge  badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Mục thay thế
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge  badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Mục Nhà sản xuất
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge  badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Số thuế hải quan
                  </Typography>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={4}>
                <Box sx={{
                  minWidth:'300px',
                  minHeight:'70px',
                  display:'flex',
                  gap: 1,
                  boxShadow:'4',
                  borderRadius:'10px',
                  alignItems:'flex-start',
                  paddingX:'20px',
                  flexDirection: 'column'
                }}>
                <Box sx={{
                  display:'flex',
                  gap: 1,
                  borderRadius:'10px',
                  alignItems:'center',
                  paddingY:'8px'
                }}>
                <DescriptionIcon />
                <Typography variant='subtitle'>Giao dịch hàng tồn kho</Typography>
                </Box>
                <Box sx={{
                  display: 'flex',
                  
                }}>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge color="warning" overlap="circular" badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Yêu cầu nguyên liệu
                  </Typography>
                  </Box>
                </Box>
                <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge color="warning" overlap="circular" badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Chứng từ kho
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge color="warning" overlap="circular" badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Phiếu giao hàng
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge color="warning" overlap="circular" badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Biên lai nhận hàng
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge color="warning" overlap="circular" badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Danh sách lựa chọn
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge  badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Giao hàng tận nơi
                  </Typography>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={4}>
                <Box sx={{
                  minWidth:'300px',
                  minHeight:'70px',
                  display:'flex',
                  gap: 1,
                  boxShadow:'4',
                  borderRadius:'10px',
                  alignItems:'flex-start',
                  paddingX:'20px',
                  flexDirection: 'column'
                }}>
                <Box sx={{
                  display:'flex',
                  gap: 1,
                  borderRadius:'10px',
                  alignItems:'center',
                  paddingY:'8px'
                }}>
                <DescriptionIcon />
                <Typography variant='subtitle'>Báo cáo hàng tồn kho</Typography>
                </Box>
                <Box sx={{
                  display: 'flex',
                  
                }}>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge color="warning" overlap="circular" badgeContent=" ">
                    {circle}
                  </Badge>
                  <Link href="inventoryLadger" target="_blank">
                  <Typography variant='subtitle'>
                    Sổ cái hàng tồn kho
                  </Typography>
                  </Link>
                  </Box>
                </Box>
                <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge color="warning" overlap="circular" badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Số tồn kho
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge color="warning" overlap="circular" badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Dự kiến số lượng tồn kho
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge  badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Tóm tắt cổ phiếu
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Hàng tồn kho cũ dần
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge  badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Giá cổ phiếu
                  </Typography>
                  </Box>
                </Box>
              </Grid2>
          </Grid2>
          </Box>
          <Box sx={{
            display: 'flex',
            gap:'1',
            flexGrow: 1,
            paddingY: '12px'
          }}>
            <Grid2 container spacing={3}>
              <Grid2 size={4}>
                <Box sx={{
                  minWidth:'300px',
                  minHeight:'70px',
                  display:'flex',
                  gap: 1,
                  boxShadow:'4',
                  borderRadius:'10px',
                  alignItems:'flex-start',
                  paddingX:'20px',
                  flexDirection: 'column'
                }}>
                <Box sx={{
                  display:'flex',
                  gap: 1,
                  borderRadius:'10px',
                  alignItems:'center',
                  paddingY:'8px'
                }}>
                <DescriptionIcon />
                <Typography variant='subtitle'>Cài đặt</Typography>
                </Box>
                <Box sx={{
                  display: 'flex',
                  
                }}>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge color="warning" overlap="circular" badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Thiết lập thông số hàng tồn kho
                  </Typography>
                  </Box>
                </Box>
                <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge color="warning" overlap="circular" badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Kho hàng
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge color='warning' overlap="circular" badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Unit of Measure (UOM)
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge color="warning" overlap="circular" badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Cài đặt Biến thể mục
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge color="warning" overlap="circular" badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Nhãn
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge  badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Giá trị thuộc tính
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge  badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Hệ số chuyển đổi ĐVT
                  </Typography>
                  </Box>
                  </Box>
              </Grid2>
              <Grid2 size={4}>
                <Box sx={{
                  minWidth:'300px',
                  minHeight:'70px',
                  display:'flex',
                  gap: 1,
                  boxShadow:'4',
                  borderRadius:'10px',
                  alignItems:'flex-start',
                  paddingX:'20px',
                  flexDirection: 'column'
                }}>
                <Box sx={{
                  display:'flex',
                  gap: 1,
                  borderRadius:'10px',
                  alignItems:'center',
                  paddingY:'8px'
                }}>
                <DescriptionIcon />
                <Typography variant='subtitle'>Số thứ tự và hàng loạt</Typography>
                </Box>
                <Box sx={{
                  display: 'flex',
                  
                }}>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge color="warning" overlap="circular" badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Số seri
                  </Typography>
                  </Box>
                </Box>
                <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge color="warning" overlap="circular" badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Lô hàng
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge  badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Lưu ý cài đặt
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge  badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Không nối tiếp hợp đồng dịch vụ hết...
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge  badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Serial No tình trạng
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge  badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Nối tiếp không có bảo hành hết hạn
                  </Typography>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={4}>
                <Box sx={{
                  minWidth:'300px',
                  minHeight:'70px',
                  display:'flex',
                  gap: 1,
                  boxShadow:'4',
                  borderRadius:'10px',
                  alignItems:'flex-start',
                  paddingX:'20px',
                  flexDirection: 'column'
                }}>
                <Box sx={{
                  display:'flex',
                  gap: 1,
                  borderRadius:'10px',
                  alignItems:'center',
                  paddingY:'8px'
                }}>
                <DescriptionIcon />
                <Typography variant='subtitle'>Công cụ</Typography>
                </Box>
                <Box sx={{
                  display: 'flex',
                  
                }}>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge color="warning" overlap="circular" badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Kiểm kê, chốt kho
                  </Typography>
                  </Box>
                </Box>
                <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge color="warning" overlap="circular" badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Bảng đóng gói
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge  badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Kiếm tra chất lượng
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge  badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Mẫu kiểm tra chất lượng
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Cân bằng chứng khoán nhanh
                  </Typography>
                  </Box>
                </Box>
              </Grid2>
          </Grid2>
          </Box>
          <Box sx={{
            display: 'flex',
            gap:'1',
            flexGrow: 1,
            paddingY:'12px'
          }}>
            <Grid2 container spacing={3}>
              <Grid2 size={4}>
                <Box sx={{
                  minWidth:'300px',
                  minHeight:'70px',
                  display:'flex',
                  gap: 1,
                  boxShadow:'4',
                  borderRadius:'10px',
                  alignItems:'flex-start',
                  paddingX:'20px',
                  flexDirection: 'column'
                }}>
                <Box sx={{
                  display:'flex',
                  gap: 1,
                  borderRadius:'10px',
                  alignItems:'center',
                  paddingY:'8px'
                }}>
                <DescriptionIcon />
                <Typography variant='subtitle'>Báo Cáo Chính</Typography>
                </Box>
                <Box sx={{
                  display: 'flex',
                  
                }}>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge color="warning" overlap="circular" badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Mẫu hàng - danh sách tỷ giá thông...
                  </Typography>
                  </Box>
                </Box>
                <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge color="warning" overlap="circular" badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Phân tích hàng tồn kho
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge color='warning' overlap="circular" badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Số lượng cổ phiếu so với Số lượng hà...
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge  badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Xu hướng phiếu giao hàng
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge  badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                  Xu hướng của biên lai nhận hàng
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge  badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Phân tích đơn hàng bán hàng
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge  badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Phân tích đơn đặt hàng
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge  badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Thiếu mục Báo cáo
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge  badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Lịch sử số dư theo từng đợt
                  </Typography>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={4}>
                <Box sx={{
                  minWidth:'300px',
                  minHeight:'70px',
                  display:'flex',
                  gap: 1,
                  boxShadow:'4',
                  borderRadius:'10px',
                  alignItems:'flex-start',
                  paddingX:'20px',
                  flexDirection: 'column'
                }}>
                <Box sx={{
                  display:'flex',
                  gap: 1,
                  borderRadius:'10px',
                  alignItems:'center',
                  paddingY:'8px'
                }}>
                <DescriptionIcon />
                <Typography variant='subtitle'>Báo Cáo Khác</Typography>
                </Box>
                <Box sx={{
                  display: 'flex',
                  
                }}>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge  badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Mục yêu cầu được chuyển giao
                  </Typography>
                  </Box>
                </Box>
                <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge  badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Tình trạng hết lô hàng
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge  badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Giá mục
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge  badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Mẫu hàng thông minh được gợi ý sẵn
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge  badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Chi tiết biến thể của Chi tiết
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge  badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Nguyên liệu thầu phụ được chuyển n...
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge  badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Mục hợp đồng được nhận
                  </Typography>
                  </Box><Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge  badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    So sánh giá trị cổ phiếu và tài khoản
                  </Typography>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={4}>
                <Box sx={{
                  minWidth:'300px',
                  minHeight:'70px',
                  display:'flex',
                  gap: 1,
                  boxShadow:'4',
                  borderRadius:'10px',
                  alignItems:'flex-start',
                  paddingX:'20px',
                  flexDirection: 'column',
                  overflowX:'hidden'
                }}>
                <Box sx={{
                  display:'flex',
                  gap: 1,
                  borderRadius:'10px',
                  alignItems:'center',
                  paddingY:'8px'
                }}>
                <DescriptionIcon />
                <Typography variant='subtitle'>Incorrect Data Report</Typography>
                </Box>
                <Box sx={{
                  display: 'flex',
                  
                }}>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge  badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Incorrect Serial No Qty and Valuation
                  </Typography>
                  </Box>
                </Box>
                <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge  badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    Incorrect Balance Qty After transact...
                  </Typography>
                  </Box>
                  <Box sx=
                  {{display: 'flex', 
                    gap:1, 
                    cursor:'pointer',
                    height:'fit-content',
                    '&:hover':{
                      border: '1px solid gray',
                      backgroundColor:'lightgray',
                      width:'260px'
                    }}}>
                  <Badge  badgeContent=" ">
                    {circle}
                  </Badge>
                  <Typography variant='subtitle'>
                    So sánh giá trị cổ phiếu và tài khoản
                  </Typography>
                  </Box>
                </Box>
              </Grid2>
          </Grid2>
          </Box>
          </Box>
        </Box>
        
       
    </Container>
  )
}

export default Board
