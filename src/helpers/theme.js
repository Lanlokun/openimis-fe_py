import { createTheme } from "@material-ui/core";
import { alpha } from "@material-ui/core/styles/colorManipulator";


const theme = createTheme({
  overrides: {
    MuiTableRow: {
      root: {
        "&$selected": {
          backgroundColor: 'rgba(0, 0, 0, 0.08)'
        },
      },
    },
  },
  palette: {
    primary: { main: "#BA8B47" },// main header background color
    secondary: { main: "#fff" },// main header text color
    error: { main: "#801a00" },
    text: {
      primary: "#000000", // text primary colors
      secondary: "#774d0e", // HACK FOR material-table hardcoded toolbar!,
      second: "#fff",
      error: "#801a00"
    },
    toggledButton: "#999999",
  },
  typography: {
    useNextVariants: true,
    fontFamily: ["Rubik", "Roboto", '"Helvetica Neue"', "sans-serif"].join(","),
    fontSize: 14,
    fontWeightRegular: 300,
    fontWeightMedium: 400,
    title: {
      fontSize: 20,
      fontWeight: 300,
    },
    label: {
      color: "grey",
    },
  },
  jrnlDrawer: {
    open: {
      width: 500,
    },
    close: {
      width: 80,
    },
    itemDetail: {
      marginLeft: 8,
    },
    iconSize: 24,
  },
  menu: {
    variant: 'AppBar',
    drawer: {
      width: 300,
      fontSize: 16,
    },
    appBar: {
      fontSize: 16,
    },
  },
  page: {
    padding: 8,
    locked: {
      background: "repeating-linear-gradient(45deg, #D3D3D3 1px, #D3D3D3 1px, #fff 10px, #fff 10px);"
    },
  },
  paper: {
    paper: {
      margin: 10,
      backgroundColor: "#fcfaf2",// page background color
    },
    header: {
      color: "#ffffff", // of the second header text color 
      backgroundColor: "#CDA862",// bckgrnd
    },
    message: {
      backgroundColor: "#CDA862",
    },
    title: {
      padding: 10,
      fontSize: 24,
      color: "#ffffff",
      backgroundColor: "#CDA862",// second background color
    },
    action: {
      padding: 5,
    },
    divider: {
      padding: 0,
      margin: 0,
    },
    body: {
      marginTop: 10,
      backgroundColor: "#fcfaf2",
    },
    item: {
      padding: 10,
    }
  },
  table: {
    title: {
      padding: 10,
      fontWeight: 500,
      color: "#ffffff",
      backgroundColor: "#CDA862",
    },
    subtitle: {
      padding: 10,
      fontWeight: 500,
      color: "#000000",
      // marginBottom: 5,
      backgroundColor:"#cda86238"
    },
    hrdivider: {
      borderWidth: 1, 
      // borderStyle: Solid,
      borderColor: "#00000073",
    },
    header: {
      color: "#BA8B47",
      fontWeight: 700,
    },
    headerAction: {
      padding: 5,
    },
    row: {
      color: "#CDA862",
      align: "center",
      '&:hover': {
        background: 'rgba(0, 0, 0, 0.12) !important'
      }
    },
    cell: {
      padding:5
    },
    lockedRow: {
      background: "repeating-linear-gradient(45deg, #D3D3D3 1px, #D3D3D3 1px, #fff 10px, #fff 10px);"
    },
    lockedCell: {
    },
    highlightedRow: {
    },
    highlightedCell: {
      fontWeight: 500,
      align: "center",
    },
    highlightedAltRow: {
    },
    highlightedAltCell: {
      fontStyle: "italic",
      align: "center",
    },
    disabledRow: {
    },
    disabledCell: {
      // textDecoration: "line-through",
      color: "grey",
      align: "center",
    },
    footer: {
      color: "#fff",
    },
    pager: {
      color: "#CDA862",
    },
  },
  form: {
    spacing: 10,
  },
  formTable: {
    table: {
      color: "#CDA862",
    },
    actions: {
      color: "#CDA862",
    },
    header: {
      color: "#CDA862",
      align: "center",
    }
  },
  dialog: {
    title: {
      fontWeight: 500,
      color: "grey",
    },
    content: {
      padding: 0,
    },
    primaryButton: {
      backgroundColor: "#CDA862",
      color: "#fff",
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: alpha("#CDA862", 0.50),
        color: "#fff",
      },
    },
    secondaryButton: {
    },    
  },
  fab: {
    position: "fixed",
    bottom: 20,
    right: 8,
    zIndex: 2000,
  },
  fakeInput: {

  },
  bigAvatar: {
    width: 160,
    height: 160,
  },
});

export default theme;

