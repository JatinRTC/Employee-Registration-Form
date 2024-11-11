import { createTheme } from "@mui/material";

const theme = createTheme(
    {
        palette:{
            primary:{
                main:'#349495',
            },
            secondary:{
                main:'#bfb9b6',
            },
            background:{
                default:'#f5f5f5',
            },
            text: {
                primary: '#333',
                secondary: '#777',
              },
        },

        typography:{
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            h1:{
                fontSize: '2.5rem',
            },
            h2:{
                fontSize:'2rem',
            },
            h3:{
                fontSize:'1.5rem'
            }
        },
        spacing: 8,
        
    }
)

export default theme;