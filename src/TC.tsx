import {
  Button,
  FormControlLabel,
  Grid,
  Switch,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  activityHeaderLabel: {
    marginTop: "7px",
    marginLeft: "10px",
    width: "250px"
    // whiteSpace: 'nowrap',
  },
  searchTableOutter: {
    border: "2px",
    overflowX: "scroll"
  },
  searchTable: {
    tableLayout: "fixed",
    margin: "40px auto 0px auto"
  },
  cellStyle: {
    minWidth: "200px"
  }
}));

//const classes = useStyles()

export interface TCProps {
  headerArray: string[];
  bodyArray: string[];
}

const TC = (props: TCProps) => {
  const { headerArray, bodyArray } = props;
  const classes = useStyles();

  return (
    <TableContainer className={classes.searchTableOutter} component={Paper}>
      <Table stickyHeader aria-label="Treatments">
        <TableHead>
          <TableRow>
            {headerArray?.length
              ? headerArray.map((foo, index) => (
                  <TableCell className={classes.cellStyle} key={index}>
                    {foo}
                  </TableCell>
                ))
              : null}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {bodyArray?.length
              ? bodyArray.map((foo, index) => (
                  <TableCell className={classes.cellStyle} key={index}>
                    {foo}
                  </TableCell>
                ))
              : null}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TC;
