import {AppBar, Container, Box} from "@mui/material";
import ResponsiveAppBar from "./ResponsiveAppBar";

const Layout = (props) => {
    return (
        <Box >
            <ResponsiveAppBar/>
            <Box display={"flex"} py={1} justifyContent={"center"}>
                {props.children}
            </Box>
        </Box>
    )
}

export default Layout