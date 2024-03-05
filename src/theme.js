// import {createTheme} from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';
import {brown, lightBlue} from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary:{
            main: brown[500]
        },
        secondary:{
            main: lightBlue[800],
            midNightBlue: "#003366"
        }
    }
})