// ItemBoard.jsx
import React,{useState} from 'react';
import { AppBar, Toolbar, Typography, IconButton,Box,MenuItem,Menu,Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Import biểu tượng ba gạch
import { ArrowBack } from '@mui/icons-material';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add'; // Biểu tượng dấu +

function ItemBoard({ onToggleSidebar }) {
    const [anchorElMenu, setAnchorElMenu] = useState(null); // Trạng thái cho menu
    const [anchorEl, setAnchorEl] = useState(null); // Trạng thái cho 3 chấm

    const handleMenuClick = (event) => {
      setAnchorElMenu(event.currentTarget); // Mở menu
    };
  
    const handleMenuClose = () => {
      setAnchorElMenu(null); // Đóng menu
    };
  
    const handleMenuItemClick = (item) => {
      console.log('Selected:', item);
      handleMenuClose(); // Đóng menu sau khi chọn
    }
    const handleRefresh = () => {
        console.log('Refreshing...');
    }
    const handleMoreClick = (event) => {
        setAnchorEl(event.currentTarget); // Mở menu "3 chấm"
      };
    
      const handleMoreClose = () => {
        setAnchorEl(null); // Đóng menu "3 chấm"
      };
    
    
      const handleMoreItemClick = (item) => {
        console.log('More Selected:', item);
        handleMoreClose(); // Đóng menu "3 chấm" sau khi chọn
      };
      const handleAddProduct = () => {
        console.log('Adding new product...');
      }
  return (
    
    <Box>
    <AppBar position="static" sx={{backgroundColor:'white'}}>
      <Toolbar>
        <IconButton edge="start" color="#f4f5f6" onClick={onToggleSidebar}>
          <ArrowBack />

        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1,color:'black' }}>
          Sản phẩm
        </Typography>
        
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          border: '1px solid #ccc', // Viền cho khung
          borderRadius: '4px', // Bo tròn góc
          padding: '4px 8px', // Padding cho khung
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: '#f0f0f0' // Màu nền khi hover
          }
        }} onClick={handleMenuClick}>
          <MenuIcon sx={{ color: 'black', marginRight: '4px' }} /> {/* Biểu tượng ba gạch */}
          <Typography variant="body1" sx={{ color: 'black' }}>Xem dạng danh sách</Typography>
        </Box>

        {/* Menu lựa chọn */}
        <Menu
          anchorEl={anchorElMenu}
          open={Boolean(anchorElMenu)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => handleMenuItemClick('Báo cáo')}>Báo cáo</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('Bảng thông tin tổng hợp')}>Bảng thông tin tổng hợp</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('Kanban')}>Kanban</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('Hình ảnh')}>Hình ảnh</MenuItem>
        </Menu>
        <IconButton onClick={handleRefresh} sx={{ marginLeft: 2 }}>
          <RefreshIcon sx={{ color: 'black' }} />
        </IconButton>
        <IconButton onClick={handleMoreClick} sx={{ marginLeft: 2 }}>
          <MoreVertIcon sx={{ color: 'black' }} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMoreClose}
        >
          <MenuItem onClick={() => handleMoreItemClick('Import')}>Import</MenuItem>
          <MenuItem onClick={() => handleMoreItemClick('Quyền hạn người dùng')}>Quyền hạn người dùng</MenuItem>
        </Menu>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddProduct}
          sx={{ marginLeft: 2, backgroundColor: '#1976d2', color: 'white' }}
        >
          Thêm sản phẩm
        </Button>
      </Toolbar>
    </AppBar>
    </Box>
   
  );
}

export default ItemBoard;
