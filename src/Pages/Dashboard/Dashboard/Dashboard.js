import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import PaymentsIcon from '@mui/icons-material/Payments';
import ReviewsIcon from '@mui/icons-material/Reviews';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import logo1 from '../../../Images/logo-1.png';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { HashLink } from 'react-router-hash-link';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MadeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import useAuth from '../../../Hooks/useAuth/useAuth';
import ManageProducts from '../ManageProducts/ManageProducts';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import Review from '../Review/Review';
import Pay from '../Pay/Pay';
import MyOrders from '../MyOrders/MyOrders';
import AdminRoute from '../../../AdminRoute/AdminRoute';
import Footer from '../../Footer/Footer';
import DashNotFound from '../DashNotFound/DashNotFound';

const drawerWidth = 230;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { allContext } = useAuth();
    const { admin, logout, ColorButton, user } = allContext;

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar>
                <HashLink className="navbar-brand ms-4" to="/#">
                    <img src={logo1} alt="" />
                </HashLink>
            </Toolbar>
            <Divider />
            <Toolbar />
            <List>
                <Link style={{ textDecoration: 'none', color:'#EC9C31' }} to="/">
                    <ListItem button>
                        <ListItemIcon sx={{ color: 'black' }}>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <h6 className="my-0">Home</h6>
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link style={{ textDecoration: 'none', color: '#EC9C31' }} to={`${url}`}>
                    <ListItem button>
                        <ListItemIcon sx={{ color: 'black' }}>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <h6 className="my-0">Dashboard</h6>
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link style={{ textDecoration: 'none', color: '#EC9C31' }} to="/products">
                    <ListItem button>
                        <ListItemIcon sx={{ color: 'black' }}>
                            <AddShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText >
                            <h6 className="my-0">Products</h6>
                        </ListItemText>
                    </ListItem>
                </Link>
                {!admin ? <Box>
                    <Link style={{ textDecoration: 'none', color: '#EC9C31' }} to={`${url}/myOrders`}>
                        <ListItem button>
                            <ListItemIcon sx={{ color: 'black' }}>
                                <ShoppingCartIcon />
                            </ListItemIcon>
                            <ListItemText >
                                <h6 className="my-0">My Orders</h6>
                            </ListItemText>
                        </ListItem>
                    </Link>
                    {/* <Link style={{ textDecoration: 'none', color: '#EC9C31' }} to={`${url}/pay`}>
                        <ListItem button>
                            <ListItemIcon sx={{ color: 'black' }}>
                                <PaymentsIcon />
                            </ListItemIcon>
                            <ListItemText >
                                Pay
                            </ListItemText>
                        </ListItem>
                    </Link> */}
                    <Link style={{ textDecoration: 'none', color: '#EC9C31' }} to={`${url}/review`}>
                        <ListItem button>
                            <ListItemIcon sx={{ color: 'black' }}>
                                <ReviewsIcon />
                            </ListItemIcon>
                            <ListItemText >
                                <h6 className="my-0">Review</h6>
                            </ListItemText>
                        </ListItem>
                    </Link>
                </Box>
                    :
                    <Box>
                        <Link style={{ textDecoration: 'none', color: '#EC9C31' }} to={`${url}/manageAllOrders`}>
                            <ListItem button>
                                <ListItemIcon sx={{ color: 'black' }}>
                                    <SettingsApplicationsIcon />
                                </ListItemIcon>
                                <ListItemText >
                                    <h6 className="my-0">Manage All Orders</h6>
                                </ListItemText>
                            </ListItem>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: '#EC9C31' }} to={`${url}/manageProducts`}>
                            <ListItem button>
                                <ListItemIcon sx={{ color: 'black' }}>
                                    <SettingsIcon />
                                </ListItemIcon>
                                <ListItemText >
                                    <h6 className="my-0">Manage Products</h6>
                                </ListItemText>
                            </ListItem>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: '#EC9C31' }} to={`${url}/addProduct`}>
                            <ListItem button>
                                <ListItemIcon sx={{ color: 'black' }}>
                                    <AddCircleIcon />
                                </ListItemIcon>
                                <ListItemText >
                                    <h6 className="my-0">Add Product</h6>
                                </ListItemText>
                            </ListItem>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: '#EC9C31' }} to={`${url}/makeAdmin`}>
                            <ListItem button>
                                <ListItemIcon sx={{ color: 'black'}}>
                                    <AdminPanelSettingsIcon />
                                </ListItemIcon>
                                <ListItemText >
                                    <h6 className="my-0">Make Admin</h6>
                                </ListItemText>
                            </ListItem>
                        </Link>
                    </Box>}
                <Toolbar />
                <Toolbar />
                <Toolbar />
                <Toolbar />
                <Box sx={{ textAlign: 'center' }}>
                    <ListItem>
                        <ListItemIcon sx={{ color: 'black' }}>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <h5 className="my-4 text-color">
                                {user.displayName}</h5>
                        </ListItemText>
                    </ListItem>
                    <ColorButton
                        sx={{ width: '90%' }}
                        onClick={logout} variant="contained">Logout</ColorButton>
                </Box>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` }, backgroundColor: '#FBEBD6', color: 'black'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        DASHBOARD
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 0, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/pay/:orderId`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <AdminRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <Route path={`${path}/*`}>
                        <DashNotFound></DashNotFound>
                    </Route>
                </Switch>
                <Footer></Footer>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
