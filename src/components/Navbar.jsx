"use client"

import { useState } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  useTheme,
  useMediaQuery,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  Badge,
} from "@mui/material"
import {
  Menu as MenuIcon,
  MusicNote,
  Home,
  LibraryMusic,
  QueueMusic,
  Person,
  Search,
  Notifications,
  AccountCircle,
  Close,
  PlaylistPlay,
  Album,
  MicExternalOn,
} from "@mui/icons-material"

const navigationItems = [
  { text: "Home", icon: <Home />, href: "/" },
  { text: "Browse", icon: <LibraryMusic />, href: "/browse" },
  { text: "Playlists", icon: <PlaylistPlay />, href: "/playlists" },
  { text: "Albums", icon: <Album />, href: "/albums" },
  { text: "Artists", icon: <MicExternalOn />, href: "/artists" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleProfileMenuClose = () => {
    setAnchorEl(null)
  }

  const drawer = (
    <Box sx={{ width: 280, height: "100%", bgcolor: "background.paper" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
          borderBottom: 1,
          borderColor: "divider",
          background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)",
              boxShadow: "0 4px 15px rgba(255, 107, 107, 0.4)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <MusicNote sx={{ color: "white", fontSize: 20, zIndex: 2 }} />

            {/* Animated pulse effect for mobile */}
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)",
                animation: "pulse 2s ease-in-out infinite",
                "@keyframes pulse": {
                  "0%": {
                    transform: "scale(1)",
                    opacity: 0.7,
                  },
                  "50%": {
                    transform: "scale(1.1)",
                    opacity: 0.3,
                  },
                  "100%": {
                    transform: "scale(1)",
                    opacity: 0.7,
                  },
                },
              }}
            />
          </Box>

          {/* Animated Music Bars for mobile - Enhanced */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "3px",
              height: "20px",
              mr: 2,
            }}
          >
            {[1, 2, 3, 4].map((bar) => (
              <Box
                key={bar}
                sx={{
                  width: "3px",
                  backgroundColor: "#feca57",
                  borderRadius: "2px",
                  boxShadow: "0 0 6px rgba(254, 202, 87, 0.5)",
                  animation: `musicBarMobile${bar} 1.2s ease-in-out infinite`,
                  [`@keyframes musicBarMobile${bar}`]: {
                    "0%, 100%": {
                      height: "4px",
                      backgroundColor: "#feca57",
                    },
                    "25%": {
                      height: bar % 2 === 0 ? "12px" : "8px",
                      backgroundColor: "#ff6b6b",
                    },
                    "50%": {
                      height: bar === 2 ? "16px" : "10px",
                      backgroundColor: "#4ecdc4",
                    },
                    "75%": {
                      height: bar === 3 ? "18px" : "6px",
                      backgroundColor: "#45b7d1",
                    },
                  },
                  animationDelay: `${bar * 0.15}s`,
                }}
              />
            ))}
          </Box>

          <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
            SoundWave
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}>
          <Close />
        </IconButton>
      </Box>

      <List sx={{ pt: 2 }}>
        {navigationItems.map((item) => (
          <ListItem
            key={item.text}
            sx={{
              mx: 1,
              mb: 0.5,
              borderRadius: 2,
              "&:hover": {
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                "& .MuiListItemIcon-root": {
                  color: "white",
                },
                "& .MuiListItemText-primary": {
                  color: "white",
                  fontWeight: "medium",
                },
              },
              cursor: "pointer",
            }}
          >
            <ListItemIcon sx={{ color: "#1e3c72", minWidth: 40 }}>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                fontWeight: "medium",
              }}
            />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ px: 2 }}>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Recently Played
        </Typography>
        <List dense>
          {["Chill Vibes", "Rock Classics", "Jazz Essentials"].map((playlist) => (
            <ListItem key={playlist} sx={{ py: 0.5, px: 1, borderRadius: 1 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <QueueMusic fontSize="small" color="action" />
              </ListItemIcon>
              <ListItemText primary={playlist} primaryTypographyProps={{ fontSize: "0.875rem" }} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  )

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
          borderBottom: 1,
          borderColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 4px 20px rgba(30, 60, 114, 0.3)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, sm: 3 } }}>
          {/* Left Section - Logo and Navigation */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            {isMobile && (
              <IconButton sx={{ color: "white" }} aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            )}

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)",
                  boxShadow: "0 4px 15px rgba(255, 107, 107, 0.4)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <MusicNote sx={{ color: "white", fontSize: 24, zIndex: 2 }} />

                {/* Animated pulse effect */}
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)",
                    animation: "pulse 2s ease-in-out infinite",
                    "@keyframes pulse": {
                      "0%": {
                        transform: "scale(1)",
                        opacity: 0.7,
                      },
                      "50%": {
                        transform: "scale(1.1)",
                        opacity: 0.3,
                      },
                      "100%": {
                        transform: "scale(1)",
                        opacity: 0.7,
                      },
                    },
                  }}
                />
              </Box>

              {/* Animated Music Bars - Enhanced Visibility */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  height: "24px",
                  mr: 2,
                  padding: "2px",
                }}
              >
                {[1, 2, 3, 4, 5].map((bar) => (
                  <Box
                    key={bar}
                    sx={{
                      width: "4px",
                      backgroundColor: "#feca57",
                      borderRadius: "2px",
                      boxShadow: "0 0 8px rgba(254, 202, 87, 0.6)",
                      animation: `musicBar${bar} 1.2s ease-in-out infinite`,
                      [`@keyframes musicBar${bar}`]: {
                        "0%, 100%": {
                          height: "6px",
                          backgroundColor: "#feca57",
                        },
                        "25%": {
                          height: bar === 1 || bar === 5 ? "14px" : "10px",
                          backgroundColor: "#ff6b6b",
                        },
                        "50%": {
                          height: bar === 2 || bar === 4 ? "20px" : "16px",
                          backgroundColor: "#4ecdc4",
                        },
                        "75%": {
                          height: bar === 3 ? "22px" : "12px",
                          backgroundColor: "#45b7d1",
                        },
                      },
                      animationDelay: `${bar * 0.1}s`,
                    }}
                  />
                ))}
              </Box>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                  display: { xs: "none", sm: "block" },
                }}
              >
                SoundWave
              </Typography>
            </Box>

            {!isMobile && (
              <Box sx={{ display: "flex", gap: 1, ml: 4 }}>
                {navigationItems.slice(0, 4).map((item) => (
                  <Button
                    key={item.text}
                    startIcon={item.icon}
                    sx={{
                      color: "rgba(255, 255, 255, 0.9)",
                      textTransform: "none",
                      fontWeight: "medium",
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      "&:hover": {
                        bgcolor: "rgba(255, 255, 255, 0.1)",
                        color: "white",
                        transform: "translateY(-1px)",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                      },
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>
            )}
          </Box>

          {/* Right Section - Search and Profile */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton
              sx={{
                color: "rgba(255, 255, 255, 0.9)",
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                  transform: "scale(1.05)",
                },
                transition: "all 0.2s ease-in-out",
              }}
            >
              <Search />
            </IconButton>

            <Badge badgeContent={3} color="error">
              <IconButton
                sx={{
                  color: "rgba(255, 255, 255, 0.9)",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    color: "white",
                    transform: "scale(1.05)",
                  },
                  transition: "all 0.2s ease-in-out",
                }}
              >
                <Notifications />
              </IconButton>
            </Badge>

            <IconButton onClick={handleProfileMenuOpen} sx={{ ml: 1 }}>
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                  border: "2px solid rgba(255, 255, 255, 0.3)",
                  "&:hover": {
                    transform: "scale(1.1)",
                    boxShadow: "0 4px 12px rgba(240, 147, 251, 0.4)",
                  },
                  transition: "all 0.2s ease-in-out",
                }}
              >
                <AccountCircle />
              </Avatar>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Profile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleProfileMenuClose}
        onClick={handleProfileMenuClose}
        PaperProps={{
          elevation: 3,
          sx: {
            mt: 1.5,
            minWidth: 200,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            "& .MuiMenuItem-root": {
              px: 2,
              py: 1,
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.1)",
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <ListItemIcon sx={{ color: "white" }}>
            <Person fontSize="small" />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem>
          <ListItemIcon sx={{ color: "white" }}>
            <QueueMusic fontSize="small" />
          </ListItemIcon>
          My Playlists
        </MenuItem>
        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.2)" }} />
        <MenuItem>Settings</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </>
  )
}
