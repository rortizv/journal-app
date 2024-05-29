import { List, ListItem, ListItemIcon, ListItemButton, Box, Divider, Drawer, Toolbar, Typography, ListItemText, Grid } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material'


export const SideBar = ({drawerWidth = 240}) => {
  return (
    <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
        <Drawer
            variant='permanent'
            open={true}
            sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>Raph Engineer</Typography>
            </Toolbar>
            <Divider />
            <List>
                {['January', 'February', 'March', 'April', 'May', 'June'].map((text) => (
                    <ListItem  key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TurnedInNot />
                            </ListItemIcon>
                            <Grid container>
                                <ListItemText primary={text} />
                                <ListItemText secondary='Lorem ipsum lorem ipsum lorem ipsum' />
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

        </Drawer>

    </Box>
  )
}
