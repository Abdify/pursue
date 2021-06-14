import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
    media: {
        height: 0,
        paddingTop: "56.25%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "darken",
    },
    card: {
        display: "flex",
        flexDirection: "column",
        borderRadius: "15px",
        height: "100%",
        position: "relative",
    },
    overlay: {
        position: "absolute",
        top: "20px",
        left: "20px",
        color: "white",

        display: "flex",
        justifyContent: "space-between",
    },
    overlay2: {
        position: "absolute",
        top: "20px",
        right: "20px",
        color: "white",
    },
    title: {
        padding: "0 16px",
        margin: "20px 0",
        color: "black",
    },
    cardActions: {
        padding: "0 16px 8px 16px",
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
        alignItems: "end",
    },
    description: {
        whiteSpace: "pre-wrap",
    },
});
