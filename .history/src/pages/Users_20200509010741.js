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
import useStyles from '../hooks/us'




const Users = (props)=> {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
    useEffect( ()=>{
    props.fetchUsers();
  },[])

 

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [isModal, setIsModal] = useState(false)


  const toggle = () => setOpen(!open);

  const closeModal= ()=>setIsModal(false);

  const handleClickOnOrderBtn=(id)=>{
    props.getUserData(id)
    setIsModal(true)
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
       <ModalComponent closeModal={closeModal} userDetails={props.userData} open={isModal} toggle={toggle}/>
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






