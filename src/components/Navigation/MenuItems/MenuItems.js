import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Dashboard from '@material-ui/icons/Dashboard';
import MailIcon from '@material-ui/icons/Mail';
import BarChart from '@material-ui/icons/BarChart';
import Settings from '@material-ui/icons/Settings';
import Message from '@material-ui/icons/Message';
import List from '@material-ui/core/List';


const menuItems = [
    {
        title: "Dashboard",
        icon: <Dashboard />
    },
    {
        title: "Charts",
        icon: <BarChart />
    },
    {
        title: "Forms",
        icon: <Message />
    },
    {
        title: "Emails",
        icon: <MailIcon />
    },
    {
        title: "Settings",
        icon: <Settings />
    }
]

const MenuItems = () => {
    return (
        <div>
            <List>
                {menuItems.map((menu) => (
                    <ListItem button key={menu.title}>
                        <ListItemIcon>{menu.icon}</ListItemIcon>
                        <ListItemText primary={menu.title} />
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

export default MenuItems;