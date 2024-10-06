import { extendTheme } from "@mui/material"

const theme = extendTheme({
    hrCustom: {
        appBarHeight: '60px',
        boardBarHeight:'68px'
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
             root:  {
                    
                }
                
            }
        }
    }
}) 

export default theme
