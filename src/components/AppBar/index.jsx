import { useState } from 'react'
import React from 'react'
import SvgIcon from '@mui/material/SvgIcon'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Fade from '@mui/material/Fade'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { Box } from '@mui/material'



function AppBar() {
    const [searchValue, setSearchValue] = useState()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }
    const handleClose = () => {
    setAnchorEl(null);
  }
  const [anchorE2, setAnchorE2] = React.useState(null);
    const openMenu = Boolean(anchorE2)
    const handleClickMenu = (event) => {
    setAnchorE2(event.currentTarget);
  }
    const handleCloseMenu = () => {
    setAnchorE2(null);
  }
  return (
    <Box sx={{
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: (theme) => theme.hrCustom.appBarHeight,
        display: 'flex',
        alignItems:'center',
        justifyContent: 'space-between',
        paddingX: '64px',
        paddingY: '12px',
        boxShadow: 1,
    }}
    >
        <Box>
            <SvgIcon>
                <svg
                width="30" 
                height="30" 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0H88C94.6274 0 100 5.37258 100 12V88C100 94.6274 94.6274 100 88 100H12C5.37258 100 0 94.6274 0 88V12Z" fill="#0089FF"/>
                    <path d="M65.7097 32.9462H67.3871V24H33V32.9462H43.9032H65.7097Z" fill="white"/>
                    <path d="M43.9032 66.2151V53.914H65.7097V44.9677H43.9032H33V75.1613H67.6667V66.2151H43.9032Z" fill="white"/>
                </svg>                
            </SvgIcon>
        </Box>
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2
        }}>
            <TextField 
            id="outlined-search" 
            label="Tìm kiếm hoặc gõ lệnh (CRLT + G)" 
            type="search" 
            size='small' 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'gray' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <CloseIcon sx={{
                    color: searchValue ? 'black' : 'transparent',
                    fontSize: 'small',
                    cursor: 'pointer'
                  }}
                  onClick = {() => setSearchValue('')} // Khi click vào thì nó sẽ chuyển về giá trị rỗng
                  />
                </InputAdornment>
              )
            }}
            />
            <Tooltip title="Thông báo">
                <Badge color="secondary">
                    <NotificationsNoneIcon sx={{cursor:'pointer'}} />
                </Badge>
            </Tooltip>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                color: 'transparent',
                textShadow:'0 0 0 rgba(0,0,0,0.1)',
                fontSize:'30px'
            }}>
                |
            </Box>
            
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
            }}>
                
            </Box>
                <Button
                    id="fade-button"
                    aria-controls={openMenu ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openMenu ? 'true' : undefined}
                    onClick={handleClickMenu}
                >
                    Trợ giúp
                  <ExpandMoreIcon />
                </Button>
                <Menu
                    id="fade-menu"
                    MenuListProps={{
                    'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorE2}
                    open={openMenu}
                    onClose={handleCloseMenu}
                    TransitionComponent={Fade}
                >
                    <MenuItem onClick={handleCloseMenu}>Tài Liệu</MenuItem>
                    <MenuItem onClick={handleCloseMenu}>Diễn Đàn Người Dùng</MenuItem>
                    <MenuItem onClick={handleCloseMenu}>Báo Cáo Vấn Đề</MenuItem>
                    <MenuItem onClick={handleCloseMenu}>About</MenuItem>
                    <MenuItem onClick={handleCloseMenu}>Các Phím Tắt Bàn Phím</MenuItem>
                </Menu>
            <Box>
            <Tooltip title="Account settings">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
            <Avatar sx={{ width: 32, height: 32 }}>1</Avatar>
          </IconButton>
        </Tooltip>
            </Box>
            <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
            Thông tin cá nhân
        </MenuItem>
        <MenuItem onClick={handleClose}>
            Cài Đặt
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Phiên Làm Việc Mặc Định
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Tải Lại Trang
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Xem Trang Web
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Bật Chế Độ Chiều Rộng
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Thay Đổi Chủ Đề
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Tác Vụ Ngầm
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          Đăng xuất
        </MenuItem>
      </Menu>
        </Box>

    </Box>
  )
}

export default AppBar
