import {Box} from "@mui/material";
import Games from "../Games";

const Shop = () => {
    return (
        <Box sx={{
            mt: 3,
            px: "10%",
            backgroundColor: "primary.contrastText",
            width: "100%",
            minHeight: "calc(100vh - 100px)",
            height: "calc(100%)"
        }}>
            <Games/>
        </Box>
    )
}
export default Shop
