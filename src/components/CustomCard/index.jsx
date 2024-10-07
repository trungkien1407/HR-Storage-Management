import React from 'react';
import { Card, Typography, Chip, Grid, Box, Link } from '@mui/material';

const data = [
  { title: 'Sản phẩm', status: '96 Available', color: '#43A047', bgColor: '#E8F5E9' },
  { title: 'Yêu cầu nguyên liệu', status: '4 Pending', color: '#FB8C00', bgColor: '#FFF3E0' },
  { title: 'Chứng từ kho', status: '', color: '', bgColor: '' },
  { title: 'Biên lai nhận hàng', status: '4 To Bill', color: '#FB8C00', bgColor: '#FFF3E0' },
  { title: 'Phiếu giao hàng', status: '1 To Bill', color: '#FB8C00', bgColor: '#FFF3E0' },
  { title: 'Số cái hàng tồn kho', status: '', color: '', bgColor: '' },
  { title: 'Số tồn kho', status: '', color: '', bgColor: '' },
  { title: 'Bảng Thông Tin Tổng Hợp', status: '', color: '', bgColor: '' },
];

function CustomCard() {
  return (
    <Box sx={{ padding: '16px' }}>
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Link href="" style={{ textDecoration: 'none' }}>
              <Card
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between', // Đặt tiêu đề và trạng thái cách nhau
                  alignItems: 'center', // Căn giữa theo trục dọc
                  padding: '8px 16px',
                  borderRadius: '12px',
                  boxShadow: 'none',
                  border: '1px solid #E0E0E0',
                  fontSize: '10px',
                  height: '100%',
                  '&:hover': {
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                    transform: 'scale(1.02)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                  <Typography variant="h6" component="div" sx={{ fontSize: '14px', fontWeight: 'bold'}}>
                    {item.title}
                  </Typography>
                </Box>
                {item.status && (
                  <Chip
                    label={item.status}
                    sx={{
                      backgroundColor: item.bgColor,
                      color: item.color,
                      fontSize: '10px',
                      marginLeft: '8px', // Thêm khoảng cách giữa title và status
                    }}
                    icon={<span style={{ color: item.color, fontSize: '6px' }}>●</span>}
                  />
                )}
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CustomCard;
