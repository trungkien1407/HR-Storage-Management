import React from 'react';
import { Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link từ react-router-dom
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

function InventoryReport() {
  // Dữ liệu của các menu với đường dẫn tương ứng
  const data = [
    {
      title: 'Hàng hóa và giá cả',
      titleIcon: <TextSnippetIcon/>,
      items: [
        { text: 'Sản phẩm', url: '/products' },
        { text: 'Nhóm hàng', url: '/categories' },
        { text: 'Sản phẩm lô', url: '/batch-products' },
        { text: 'Bảng giá', url: '/price-list' },
        {text:'Giá sản phẩm',url:''},
        {text:'Quy tắc giao hàng',url:''},
        {text:'Quy tắc định giá',url:''},
        {text:'Mục Thay Thế',url:''},
        {text:'Mục Nhà sản xuất',url:''},
        {text:'Số thuế hải quan',url:''},
      ],
      iconBackgrounds: ['#FFF3E0'],
    },
    {
      title: 'Giao dịch hàng tồn kho',
      titleIcon: <TextSnippetIcon/>,
      items: [
       {text:'yêu cầu nguyên liệu',url:''},
       {text:'chứng từ kho',url:''},
       {text:'Phiếu Giao hàng',url:''},
       {text:'Biên Lai Nhận Hàng',url:''},
       {text:'Danh sách lựa chọn',url:''},
       {text:'Giao Hàng tận nơi',url:''},
      ],
      iconBackgrounds: ['#FFF3E0'],
    },
    {
      title: 'Báo cáo Hàng tồn kho',
      titleIcon: <TextSnippetIcon/>,
      items: [
        {text:'Sổ cái hàng tồn kho',url:'inventoryLadger'},
        {text:'Số tồn kho',url:''},
        {text:'Dự kiến số lượng tồn kho',url:''},
        {text:'Tóm tắt cổ phiếu',url:''},
        {text:'Hàng tồn kho cũ dần',url:''},
        {text:'Giá cổ phiếu',url:''},
       
      ],
      iconBackgrounds: ['#FFF3E0'],
    },
    {
      title: 'Cài đặt',
      titleIcon:<TextSnippetIcon/>,
      items: [
       {text:'Thiết lập thông số hàng tồn kho',url:''},
       {text:'Kho Hàng',url:''},
       {text:'Unit of Measure (UOM)',url:''},
       {text:'Cài đặt biến thể mục',url:''},
       {text:'Nhãn',url:''},
       {text:'Giá trị thuộc tính',url:''},
       {text:'Hệ số chuyển đổi ĐVT',url:''},
        
      ],
      iconBackgrounds: ['#FFF3E0'],
    },
   
    {
      title: 'Số Thứ tự và hàng loạt',
      titleIcon: <TextSnippetIcon/>,
      items: [
        { text: 'Số seri', url: '/warehouse' },
        { text: 'Lô hàng', url: '/import' },
        { text: 'Lưu ý cài đặt', url: '/export' },
        { text: 'Không nối tiếp hợp đồng dịch vụ hết hạn', url: '/inventory' },
       {text:'Serial No tình trạng',url:''},
       {text:'Nối tiếp không có bảo hành hết hạn',url:''},

      ],
      iconBackgrounds: ['#FFF3E0'],
    },
    {
      title: 'Công cụ',
      titleIcon:<TextSnippetIcon/>,
      items: [
        { text: 'Kiểm kê, chốt kho', url: '/orders' },
        { text: 'Chứng thư phí hạ cánh', url: '/customers' },
        { text: 'Bảng đóng gói', url: '/quotes' },
        { text: 'Kiểm tra chất lượng', url: '/invoices' },
        { text: 'Kiểm tra chất lượng', url: '/invoices' },
        { text: 'Cân bằng chứng khoán nhanh', url: '/invoices' },
      ],
      iconBackgrounds: ['#FFF3E0'],
    },
    
    
    {
      title: 'Báo Cáo chính',
      titleIcon:<TextSnippetIcon/>,
      items: [
        { text: 'Mẫu hàng- danh sách tỷ giá thông minh', url: '/orders' },
        { text: 'Phân tích hàng tồn kho', url: '/customers' },
        { text: 'Số lượng cổ phiếu so với số lượng hàng loạt', url: '/quotes' },
        { text: 'xu hương phiếu giao hàng', url: '/invoices' },
        { text: 'xu hướng của biên lai nhận hàng', url: '/invoices' },
        { text: 'Phân tích đơn hàng bán hàng', url: '/invoices' },
        { text: 'Phân tích đơn đặt hàng', url: '/invoices' },
        { text: 'Thiết mục báo cáo', url: '/invoices' },
        { text: 'Lịch sử số dư theo từng đợt', url: '/invoices' },
      ],
      iconBackgrounds: ['#FFF3E0'],
    },
    {
      title: 'Báo Cáo Khác',
      titleIcon:<TextSnippetIcon/>,
      items: [
        { text: 'Mục yêu cầu được chuyển giao', url: '/orders' },
        { text: 'Tình trạng hết lô hàng', url: '/customers' },
        { text: 'Giá mục', url: '/quotes' },
        { text: 'Mẫu hàng thông minh được gợi ý sắp xếp lại theo cấp độ' },
        { text: 'chi tiết biến thể của chi tiết' },
        { text: 'Nguyên liệu thầu phụ được chuyển nhượng', url: '/invoices' },
        { text: 'Mục hợp đồng được nhận', url: '/invoices' },
        { text: 'So sánh giá trị cổ phiếu và tài khoản', url: '/invoices' },
        
      ],
      iconBackgrounds: ['#FFF3E0'],
    },
    {
      title: 'Incorrect data report',
      titleIcon:<TextSnippetIcon/>,
      items: [
        { text: 'Incorrect Serial no Qty and Valuation', url: '/orders' },
        { text: 'Incorrect balance qty after transaction', url: '/customers' },
        { text: 'So sánh giá trị cổ phiếu và tài khoản', url: '/quotes' },
       
      ],
      iconBackgrounds: ['#FFF3E0'],
    },
  ];

  return (
    <Grid container spacing={3}>
      {data.map((column, columnIndex) => (
        <Grid item xs={4} key={columnIndex}>
          <div
            style={{
              border: '2px solid #ddd',
              borderRadius: '8px',
              padding: '16px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#fff',
              display: 'flex',
              flexDirection: 'column', // Căn chỉnh cột theo chiều dọc
              height: '100%', // Đảm bảo chiều cao bằng 100%
            }}
          >
            <h2 style={{ fontSize: '18px', display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '8px' }}>{column.titleIcon}</span>
              {column.title}
            </h2>
            <List style={{ flexGrow: 1 }}>
              {column.items.map((item, itemIndex) => (
                <ListItem
                  key={item.text}
                  style={{
                    border: '0px solid #ddd',
                    borderRadius: '8px',
                    marginBottom: '3px',
                    padding: '10px',
                    transition: 'background-color 0.3s', // Thêm hiệu ứng chuyển tiếp
                    cursor: 'pointer', // Thay đổi con trỏ chuột
                    
                    
                  }}
                  // Thêm sự kiện hover
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f5f5f5'; // Màu nền khi hover
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white'; // Màu nền mặc định
                  }}
                >
                  <Link
                    to={item.url}
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'flex',
                      width: '100%',
                    }}
                  >
                    <ListItemIcon
                      style={{
                        minWidth: '30px',
                      }}
                    >
                      <div
                        style={{
                          width: '24px',
                          height: '24px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: column.iconBackgrounds?.[itemIndex] || '#f4f5f6',
                          borderRadius: '4px',
                        }}
                      >
                        <span
                          style={{
                            width: '4px',
                            height: '4px',
                            backgroundColor: 'black',
                            borderRadius: '50%',
                          }}
                        ></span>
                      </div>
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      style={{
                        marginLeft: '-5px',
                        fontSize: '10px',
                      }}
                    />
                  </Link>
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

export default InventoryReport;
