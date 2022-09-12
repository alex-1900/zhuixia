import React from "react"
import {AppBar, Box, Button, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {useSiteMetadata} from "../../hooks/use-site-metadata";
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export const Header = ({ subtitle, tag }) => {
  const classes = useStyles();
  const { title } = useSiteMetadata()
  return (
    <Box component="header">
      <AppBar color={"default"} m={0}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
