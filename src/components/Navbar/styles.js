import { deepPurple } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    appBar: {
        margin: "30px 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 50px",
    },
    heading: {
        textDecoration: "none",
    },
    toolbar: {
        display: "flex",
        justifyContent: "flex-end",
    },
    brandContainer: {
        display: "flex",
        alignItems: "center",
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
}));
