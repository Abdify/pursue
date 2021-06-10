import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: "30px 0",
        padding: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        color: "#303f9f",
    },
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            flexDirection: "column-reverse",
        }
    }
}));
