import './App.css';
import {createTheme, ThemeProvider} from "@mui/material";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
    const theme = createTheme({
        components: {
          MuiTextField: {
              defaultProps: {
                  sx: {
                      width: 200
                  }
              }
          }
        },
        palette: {
            primary: {
                main: '#2a2ec1',
            },
            secondary: {
                main: '#28d8ff',
            },
            error: {
                main: '#000000',
            },
            info: {
                main: '#f7ff60',
            },
            white: {
                main: "#ffffff"
            }
        },
        typography: {
            fontFamily: 'Lato',
            fontSize: 12,
            fontWeightLight: 400,
            fontWeightRegular: 500,
            fontWeightBold: 800,
            fontWeightMedium: 600,
        },
        props: {
            MuiList: {
                dense: true,
            },
            MuiMenuItem: {
                dense: true,
            },
            MuiTable: {
                size: 'small',
            },
        },
        spacing: 4
    })

    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Router>
                    <Routes>
                        <Route element={<Signup />} path="/signup" />
                        <Route element={<Login />} path="/login" />
                        <Route path="/" element={<Home />}/>
                    </Routes>
                </Router>
            </Layout>
        </ThemeProvider>
    );
}

export default App;
