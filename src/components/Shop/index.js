import {Box} from "@mui/material";
import Games from "../Games";

const Shop = () => {
    return (
        <Box sx={{
            width: "100%",
            height: "calc(100vh - 84px)"
        }}>
            <Games/>
        </Box>
    )
}
export default Shop
