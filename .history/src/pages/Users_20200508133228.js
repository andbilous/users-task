import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TableComponent from '../components/Table';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import {fetchUsers,getUserData} from '../redux/users/user.actions';
import {Row,Col} from 'reactstrap'
import ModalComponent from '../components/Modal'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

const Users = (props)=> {
    useEffect(async ()=>{
    props.fetchUsers();
  },[])
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [isModal, setIsModal] = useState(false)
  const [userDetails,setUserDetails] =useState({});


  const toggle = () => setOpen(!open);

  const handleClickOnOrderBtn=(id)=>{
     
    // setUserDetails(props.users.filter((user)=>user.id===id)[0])
    props.getUserData(id)
    
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header
      classes={classes}
      open={open}
      handleDrawerOpen={handleDrawerOpen}
      />
      <Sidebar
      classes={classes}
      open={open}
      handleDrawerClose={handleDrawerClose}
      />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
       <ModalComponent userDetails={props.userData} open={isModal} toggle={toggle}/>
              <Paper className={classes.paper}>
                <TableComponent
                users={props.users}
                setUserId={handleClickOnOrderBtn}
                />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
          </Box>
        </Container>
      </main>
    </div>
  );
}
const UsersContainer = connect(
  (state) => ({
      users: state.usersReducer.users,
      userData: state.usersReducer.userData
  }), (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    getUserData: (id)=>dispatch(getUserData(id)) 
  })
)(Users);

export {UsersContainer as Users} ;






