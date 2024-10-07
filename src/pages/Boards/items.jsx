import { Box, Typography, FormControl, Select, MenuItem, Button, Link, TextField, InputLabel, OutlinedInput } from '@mui/material';
import React, { useState } from 'react';
import AppBar from '~/components/AppBar';
import ItemBoard from '../../components/BoardBar/itemBoard'; // Nhập ItemBoard

function Item() {
  const [assignedTo, setAssignedTo] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [searchAssigned, setSearchAssigned] = useState('');
  const [searchCreated, setSearchCreated] = useState('');
  const [filterName, setFilterName] = useState(''); // Trạng thái cho tên bộ lọc
  const [sidebarOpen, setSidebarOpen] = useState(true); // Trạng thái cho sidebar

  const handleAssignedToChange = (event) => {
    setAssignedTo(event.target.value);
    setSearchAssigned(''); // Reset ô tìm kiếm khi chọn
  };

  const handleCreatedByChange = (event) => {
    setCreatedBy(event.target.value);
    setSearchCreated(''); // Reset ô tìm kiếm khi chọn
  };

  const handleSaveFilter = () => {
    console.log('Tên bộ lọc:', filterName);
    setFilterName(''); // Reset ô nhập tên bộ lọc sau khi lưu
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); // Đảo ngược trạng thái sidebar
  };

  const MenuProps = {
    PaperProps: {
      sx: {
        maxHeight: 200,
        overflow: 'auto',
      },
    },
  };

  return (
    <Box>
      <AppBar />
      <ItemBoard onToggleSidebar={toggleSidebar} />

      {/* Hiển thị sidebar chỉ khi sidebarOpen là true */}
      {sidebarOpen && (
        <Box
          sx={{
            width: 240,
            backgroundColor: '#f5f5f5',
            height: '100vh',
            padding: 1,
            boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography variant="h6" sx={{ fontSize: '14px' }}>Lọc Theo</Typography>
          
          {/* Bộ lọc "Được Giao Cho" */}
          <FormControl fullWidth sx={{ mt: 1 }}>
            <InputLabel sx={{ fontSize: '12px' }}>Được Giao Cho</InputLabel>
            <Select
              value={assignedTo}
              onChange={handleAssignedToChange}
              input={<OutlinedInput label="Được Giao Cho" sx={{ borderRadius: '8px', fontSize: '12px' }} />}
              MenuProps={MenuProps}
              renderValue={(value) => value || <em style={{ fontSize: '12px' }}>Chọn Người</em>}
            >
              <MenuItem>
                <TextField
                  size='small'
                  fullWidth
                  label="Tìm Kiếm"
                  variant="outlined"
                  value={searchAssigned}
                  onChange={(e) => setSearchAssigned(e.target.value)}
                  placeholder="Nhập để tìm kiếm"
                  onClick={(e) => e.stopPropagation()}
                  sx={{ borderRadius: '8px', fontSize: '12px' }}
                />
              </MenuItem>
              <MenuItem value="user1" sx={{ fontSize: '12px' }}>Người 1</MenuItem>
              <MenuItem value="user2" sx={{ fontSize: '12px' }}>Người 2</MenuItem>
              <MenuItem value="user3" sx={{ fontSize: '12px' }}>Người 3</MenuItem>
            </Select>
          </FormControl>

          {/* Bộ lọc "Được Tạo Bởi" */}
          <FormControl fullWidth sx={{ mt: 1 }}>
            <InputLabel sx={{ fontSize: '12px' }}>Được Tạo Bởi</InputLabel>
            <Select
              value={createdBy}
              onChange={handleCreatedByChange}
              input={<OutlinedInput label="Được Tạo Bởi" sx={{ borderRadius: '8px', fontSize: '12px' }} />}
              MenuProps={MenuProps}
              renderValue={(value) => value || <em style={{ fontSize: '12px' }}>Chọn Người Tạo</em>}
            >
              <MenuItem>
                <TextField
                  size='small'
                  fullWidth
                  label="Tìm Kiếm"
                  variant="outlined"
                  value={searchCreated}
                  onChange={(e) => setSearchCreated(e.target.value)}
                  placeholder="Nhập để tìm kiếm"
                  onClick={(e) => e.stopPropagation()}
                  sx={{ borderRadius: '8px', fontSize: '12px' }}
                />
              </MenuItem>
              <MenuItem value="creator1" sx={{ fontSize: '12px' }}>Người Tạo 1</MenuItem>
              <MenuItem value="creator2" sx={{ fontSize: '12px' }}>Người Tạo 2</MenuItem>
              <MenuItem value="creator3" sx={{ fontSize: '12px' }}>Người Tạo 3</MenuItem>
            </Select>
          </FormControl>

          {/* Nhập tên bộ lọc */}
          <Typography variant="h6" sx={{ mt: 2, fontSize: '14px' }}>Tên Bộ Lọc</Typography>
          <TextField
            fullWidth
            variant="outlined"
            value={filterName}
            onChange={(e) => setFilterName(e.target.value)}
            placeholder="Nhập tên bộ lọc"
            sx={{
              borderRadius: '8px',
              fontSize: '12px',
              '& .MuiOutlinedInput-notchedOutline': {
                borderRadius: '8px',
              },
            }}
          />

          {/* Nút lưu bộ lọc */}
          <Button 
            variant="contained" 
            sx={{ mt: 2, borderRadius: '8px', fontSize: '12px', padding: '6px 12px' }}
            onClick={handleSaveFilter}
          >
            Lưu
          </Button>

          {/* Liên kết để chỉnh sửa bộ lọc */}
          <Link href="/edit-filters" sx={{ mt: 2, display: 'block', textDecoration: 'none', color: 'blue', fontSize: '12px' }}>
            Chỉnh Sửa Bộ Lọc
          </Link>
        </Box>
      )}
    </Box>
  );
}

export default Item;
