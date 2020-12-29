import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BasicContainer from './components/BasicContainer';
import BasicGrid from './components/BasicGrid';
import Container from '@material-ui/core/Container';
import BasicButtons from './components/BasicButtons';
import BasicCheckbox from './components/BasicCheckBox';
import DateTime from './components/DateTime';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const containerStyle={
    border:"1px solid gray",
    padding: "10px",
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Layout" {...a11yProps(0)} />
          <Tab label="Input" {...a11yProps(1)} />
          <Tab label="Navigation" {...a11yProps(2)} />
          <Tab label="ETC" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Container maxwidth="md">
          <h1>Container</h1>
          <p>중앙으로 정렬된 기본적인 레이아웃</p>
          <Container style={containerStyle} maxWidth="md"><BasicContainer /></Container>
          <h1>Grid</h1>
          <p>구역을 수평분할하는 레이아웃</p>
          <Container style={containerStyle} maxWidth="md"><BasicGrid /></Container>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h1>Button</h1>
        <Container style={containerStyle} maxWidth="md">
          <BasicButtons/>
        </Container>
        <h1>Checkbox</h1>
        <Container style={containerStyle} maxWidth="md">
          <BasicCheckbox/>
        </Container>
        <h1>Date / Time</h1>
        <Container style={containerStyle} maxWidth="md">
          <DateTime/>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </div>
  );
}