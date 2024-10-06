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
import InventoryReport from '../../components/CustomCard/report.jsx'





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
          <InventoryReport></InventoryReport>
    </Box>
    </Box>
    </Container>
  )
}

export default Board
