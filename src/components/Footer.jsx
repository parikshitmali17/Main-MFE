// "use client"

// import {
//   Box,
//   Container,
//   Grid,
//   Typography,
//   Link,
//   IconButton,
//   TextField,
//   Button,
//   Divider,
//   useTheme,
//   useMediaQuery,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material"
// import {
//   MusicNote,
//   Facebook,
//   Twitter,
//   Instagram,
//   YouTube,
//   Email,
//   Phone,
//   LocationOn,
//   Send,
//   PlaylistPlay,
//   Album,
//   MicExternalOn,
//   LibraryMusic,
//   Headset,
//   Favorite,
//   Share,
//   Download,
// } from "@mui/icons-material"
// import { useState } from "react"

// export default function MusicFooter() {
//   const [email, setEmail] = useState("")
//   const theme = useTheme()
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"))

//   const handleNewsletterSubmit = (e) => {
//     e.preventDefault()
//     console.log("Newsletter signup:", email)
//     setEmail("")
//   }

//   const quickLinks = [
//     { text: "Browse Music", icon: <LibraryMusic fontSize="small" /> },
//     { text: "Top Charts", icon: <PlaylistPlay fontSize="small" /> },
//     { text: "New Releases", icon: <Album fontSize="small" /> },
//     { text: "Artists", icon: <MicExternalOn fontSize="small" /> },
//     { text: "Podcasts", icon: <Headset fontSize="small" /> },
//   ]

//   const supportLinks = [
//     { text: "Help Center", icon: <Headset fontSize="small" /> },
//     { text: "Contact Us", icon: <Email fontSize="small" /> },
//     { text: "Privacy Policy", icon: <Share fontSize="small" /> },
//     { text: "Terms of Service", icon: <Download fontSize="small" /> },
//     { text: "Community", icon: <Favorite fontSize="small" /> },
//   ]

//   const socialLinks = [
//     { icon: <Facebook />, color: "#1877F2", label: "Facebook" },
//     { icon: <Twitter />, color: "#1DA1F2", label: "Twitter" },
//     { icon: <Instagram />, color: "#E4405F", label: "Instagram" },
//     { icon: <YouTube />, color: "#FF0000", label: "YouTube" },
//   ]

//   return (
//     <Box
//       component="footer"
//       sx={{
//         background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
//         color: "white",
//         mt: "auto",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Animated Background Elements */}
//       <Box
//         sx={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           opacity: 0.1,
//           background: `
//             radial-gradient(circle at 20% 20%, #ff6b6b 0%, transparent 50%),
//             radial-gradient(circle at 80% 80%, #feca57 0%, transparent 50%),
//             radial-gradient(circle at 40% 60%, #4ecdc4 0%, transparent 50%)
//           `,
//           animation: "float 6s ease-in-out infinite",
//           "@keyframes float": {
//             "0%, 100%": { transform: "translateY(0px)" },
//             "50%": { transform: "translateY(-10px)" },
//           },
//         }}
//       />

//       <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
//         {/* Main Footer Content */}
//         <Box sx={{ py: 6 }}>
//           <Grid container spacing={4}>
//             {/* Brand Section */}
//             <Grid item xs={12} md={4}>
//               <Box sx={{ mb: 3 }}>
//                 <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       width: 50,
//                       height: 50,
//                       borderRadius: "50%",
//                       background: "linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)",
//                       boxShadow: "0 4px 20px rgba(255, 107, 107, 0.4)",
//                       position: "relative",
//                     }}
//                   >
//                     <MusicNote sx={{ color: "white", fontSize: 28 }} />

//                     {/* Animated pulse effect */}
//                     <Box
//                       sx={{
//                         position: "absolute",
//                         width: "100%",
//                         height: "100%",
//                         borderRadius: "50%",
//                         background: "linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)",
//                         animation: "pulse 3s ease-in-out infinite",
//                         "@keyframes pulse": {
//                           "0%": { transform: "scale(1)", opacity: 0.7 },
//                           "50%": { transform: "scale(1.1)", opacity: 0.3 },
//                           "100%": { transform: "scale(1)", opacity: 0.7 },
//                         },
//                       }}
//                     />
//                   </Box>

//                   {/* Animated Music Bars */}
//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "3px",
//                       height: "20px",
//                     }}
//                   >
//                     {[1, 2, 3, 4].map((bar) => (
//                       <Box
//                         key={bar}
//                         sx={{
//                           width: "3px",
//                           backgroundColor: "#feca57",
//                           borderRadius: "2px",
//                           boxShadow: "0 0 6px rgba(254, 202, 87, 0.5)",
//                           animation: `footerBar${bar} 1.5s ease-in-out infinite`,
//                           [`@keyframes footerBar${bar}`]: {
//                             "0%, 100%": {
//                               height: "4px",
//                               backgroundColor: "#feca57",
//                             },
//                             "25%": {
//                               height: bar % 2 === 0 ? "12px" : "8px",
//                               backgroundColor: "#ff6b6b",
//                             },
//                             "50%": {
//                               height: bar === 2 ? "16px" : "10px",
//                               backgroundColor: "#4ecdc4",
//                             },
//                             "75%": {
//                               height: bar === 3 ? "18px" : "6px",
//                               backgroundColor: "#45b7d1",
//                             },
//                           },
//                           animationDelay: `${bar * 0.2}s`,
//                         }}
//                       />
//                     ))}
//                   </Box>

//                   <Typography
//                     variant="h5"
//                     sx={{
//                       fontWeight: "bold",
//                       background: "linear-gradient(135deg, #feca57 0%, #ff6b6b 100%)",
//                       backgroundClip: "text",
//                       WebkitBackgroundClip: "text",
//                       WebkitTextFillColor: "transparent",
//                     }}
//                   >
//                     SoundWave
//                   </Typography>
//                 </Box>

//                 <Typography variant="body2" sx={{ mb: 3, opacity: 0.9, lineHeight: 1.6 }}>
//                   Discover, stream, and share the music you love. Join millions of music lovers on SoundWave and
//                   experience your favorite tracks like never before.
//                 </Typography>

//                 {/* Social Media Links */}
//                 <Box sx={{ display: "flex", gap: 1 }}>
//                   {socialLinks.map((social, index) => (
//                     <IconButton
//                       key={index}
//                       sx={{
//                         color: "white",
//                         bgcolor: "rgba(255, 255, 255, 0.1)",
//                         "&:hover": {
//                           bgcolor: social.color,
//                           transform: "translateY(-2px)",
//                           boxShadow: `0 4px 12px ${social.color}40`,
//                         },
//                         transition: "all 0.3s ease",
//                       }}
//                       aria-label={social.label}
//                     >
//                       {social.icon}
//                     </IconButton>
//                   ))}
//                 </Box>
//               </Box>
//             </Grid>

//             {/* Quick Links */}
//             <Grid item xs={12} sm={6} md={2}>
//               <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
//                 Quick Links
//               </Typography>
//               <List dense sx={{ p: 0 }}>
//                 {quickLinks.map((link, index) => (
//                   <ListItem
//                     key={index}
//                     sx={{
//                       p: 0,
//                       mb: 1,
//                       "&:hover": {
//                         "& .MuiListItemText-primary": {
//                           color: "#feca57",
//                         },
//                         "& .MuiListItemIcon-root": {
//                           color: "#feca57",
//                         },
//                       },
//                       cursor: "pointer",
//                       transition: "all 0.2s ease",
//                     }}
//                   >
//                     <ListItemIcon sx={{ minWidth: 32, color: "rgba(255, 255, 255, 0.7)" }}>{link.icon}</ListItemIcon>
//                     <ListItemText
//                       primary={link.text}
//                       primaryTypographyProps={{
//                         variant: "body2",
//                         sx: { color: "rgba(255, 255, 255, 0.9)" },
//                       }}
//                     />
//                   </ListItem>
//                 ))}
//               </List>
//             </Grid>

//             {/* Support Links */}
//             <Grid item xs={12} sm={6} md={2}>
//               <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
//                 Support
//               </Typography>
//               <List dense sx={{ p: 0 }}>
//                 {supportLinks.map((link, index) => (
//                   <ListItem
//                     key={index}
//                     sx={{
//                       p: 0,
//                       mb: 1,
//                       "&:hover": {
//                         "& .MuiListItemText-primary": {
//                           color: "#feca57",
//                         },
//                         "& .MuiListItemIcon-root": {
//                           color: "#feca57",
//                         },
//                       },
//                       cursor: "pointer",
//                       transition: "all 0.2s ease",
//                     }}
//                   >
//                     <ListItemIcon sx={{ minWidth: 32, color: "rgba(255, 255, 255, 0.7)" }}>{link.icon}</ListItemIcon>
//                     <ListItemText
//                       primary={link.text}
//                       primaryTypographyProps={{
//                         variant: "body2",
//                         sx: { color: "rgba(255, 255, 255, 0.9)" },
//                       }}
//                     />
//                   </ListItem>
//                 ))}
//               </List>
//             </Grid>

//             {/* Contact & Newsletter */}
//             <Grid item xs={12} md={4}>
//               <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
//                 Stay Connected
//               </Typography>

//               {/* Contact Info */}
//               <Box sx={{ mb: 3 }}>
//                 <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
//                   <Email fontSize="small" sx={{ color: "#feca57" }} />
//                   <Typography variant="body2" sx={{ opacity: 0.9 }}>
//                     hello@soundwave.com
//                   </Typography>
//                 </Box>
//                 <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
//                   <Phone fontSize="small" sx={{ color: "#feca57" }} />
//                   <Typography variant="body2" sx={{ opacity: 0.9 }}>
//                     +1 (555) 123-4567
//                   </Typography>
//                 </Box>
//                 <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
//                   <LocationOn fontSize="small" sx={{ color: "#feca57" }} />
//                   <Typography variant="body2" sx={{ opacity: 0.9 }}>
//                     San Francisco, CA
//                   </Typography>
//                 </Box>
//               </Box>

//               {/* Newsletter Signup */}
//               <Box>
//                 <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: "medium" }}>
//                   Subscribe to our newsletter
//                 </Typography>
//                 <Box component="form" onSubmit={handleNewsletterSubmit} sx={{ display: "flex", gap: 1 }}>
//                   <TextField
//                     size="small"
//                     placeholder="Enter your email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     sx={{
//                       flex: 1,
//                       "& .MuiOutlinedInput-root": {
//                         bgcolor: "rgba(255, 255, 255, 0.1)",
//                         color: "white",
//                         "& fieldset": {
//                           borderColor: "rgba(255, 255, 255, 0.3)",
//                         },
//                         "&:hover fieldset": {
//                           borderColor: "rgba(255, 255, 255, 0.5)",
//                         },
//                         "&.Mui-focused fieldset": {
//                           borderColor: "#feca57",
//                         },
//                       },
//                       "& .MuiInputBase-input::placeholder": {
//                         color: "rgba(255, 255, 255, 0.7)",
//                         opacity: 1,
//                       },
//                     }}
//                   />
//                   <Button
//                     type="submit"
//                     variant="contained"
//                     sx={{
//                       background: "linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)",
//                       "&:hover": {
//                         background: "linear-gradient(135deg, #ff5252 0%, #ffb74d 100%)",
//                         transform: "translateY(-1px)",
//                         boxShadow: "0 4px 12px rgba(255, 107, 107, 0.4)",
//                       },
//                       transition: "all 0.2s ease",
//                     }}
//                   >
//                     <Send fontSize="small" />
//                   </Button>
//                 </Box>
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>

//         <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.2)" }} />

//         {/* Bottom Footer */}
//         <Box
//           sx={{
//             py: 3,
//             display: "flex",
//             flexDirection: isMobile ? "column" : "row",
//             justifyContent: "space-between",
//             alignItems: "center",
//             gap: 2,
//           }}
//         >
//           <Typography variant="body2" sx={{ opacity: 0.8 }}>
//             © 2024 SoundWave. All rights reserved. Made with ❤️ for music lovers.
//           </Typography>

//           <Box sx={{ display: "flex", gap: 3 }}>
//             <Link
//               href="#"
//               sx={{
//                 color: "rgba(255, 255, 255, 0.8)",
//                 textDecoration: "none",
//                 fontSize: "0.875rem",
//                 "&:hover": {
//                   color: "#feca57",
//                 },
//                 transition: "color 0.2s ease",
//               }}
//             >
//               Privacy
//             </Link>
//             <Link
//               href="#"
//               sx={{
//                 color: "rgba(255, 255, 255, 0.8)",
//                 textDecoration: "none",
//                 fontSize: "0.875rem",
//                 "&:hover": {
//                   color: "#feca57",
//                 },
//                 transition: "color 0.2s ease",
//               }}
//             >
//               Terms
//             </Link>
//             <Link
//               href="#"
//               sx={{
//                 color: "rgba(255, 255, 255, 0.8)",
//                 textDecoration: "none",
//                 fontSize: "0.875rem",
//                 "&:hover": {
//                   color: "#feca57",
//                 },
//                 transition: "color 0.2s ease",
//               }}
//             >
//               Cookies
//             </Link>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   )
// }

"use client"

import { Box, Container, Grid, Typography, Link, IconButton, Divider, useTheme, useMediaQuery } from "@mui/material"
import {
  MusicNote,
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  Email,
  LocationOn,
  PlaylistPlay,
  Album,
  MicExternalOn,
  LibraryMusic,
  Headset,
  Favorite,
  Share,
  Download,
} from "@mui/icons-material"
import { useState } from "react"

export default function MusicFooter() {
  const [email, setEmail] = useState("")
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  const quickLinks = [
    { text: "Browse Music", icon: <LibraryMusic fontSize="small" /> },
    { text: "Top Charts", icon: <PlaylistPlay fontSize="small" /> },
    { text: "New Releases", icon: <Album fontSize="small" /> },
    { text: "Artists", icon: <MicExternalOn fontSize="small" /> },
    { text: "Podcasts", icon: <Headset fontSize="small" /> },
  ]

  const supportLinks = [
    { text: "Help Center", icon: <Headset fontSize="small" /> },
    { text: "Contact Us", icon: <Email fontSize="small" /> },
    { text: "Privacy Policy", icon: <Share fontSize="small" /> },
    { text: "Terms of Service", icon: <Download fontSize="small" /> },
    { text: "Community", icon: <Favorite fontSize="small" /> },
  ]

  const socialLinks = [
    { icon: <Facebook />, color: "#1877F2", label: "Facebook" },
    { icon: <Twitter />, color: "#1DA1F2", label: "Twitter" },
    { icon: <Instagram />, color: "#E4405F", label: "Instagram" },
    { icon: <YouTube />, color: "#FF0000", label: "YouTube" },
  ]

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        color: "white",
        mt: "auto",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          background: `
            radial-gradient(circle at 20% 20%, #ff6b6b 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, #feca57 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, #4ecdc4 0%, transparent 50%)
          `,
          animation: "float 6s ease-in-out infinite",
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-10px)" },
          },
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Main Footer Content */}
        <Box sx={{ py: 4 }}>
          <Grid container spacing={3}>
            {/* Brand Section */}
            <Grid item xs={12} md={4}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
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
                  }}
                >
                  <MusicNote sx={{ color: "white", fontSize: 24 }} />

                  {/* Animated pulse effect */}
                  <Box
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)",
                      animation: "pulse 3s ease-in-out infinite",
                      "@keyframes pulse": {
                        "0%": { transform: "scale(1)", opacity: 0.7 },
                        "50%": { transform: "scale(1.1)", opacity: 0.3 },
                        "100%": { transform: "scale(1)", opacity: 0.7 },
                      },
                    }}
                  />
                </Box>

                {/* Animated Music Bars */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2px",
                    height: "16px",
                  }}
                >
                  {[1, 2, 3].map((bar) => (
                    <Box
                      key={bar}
                      sx={{
                        width: "2px",
                        backgroundColor: "#feca57",
                        borderRadius: "1px",
                        boxShadow: "0 0 4px rgba(254, 202, 87, 0.5)",
                        animation: `footerBar${bar} 1.5s ease-in-out infinite`,
                        [`@keyframes footerBar${bar}`]: {
                          "0%, 100%": {
                            height: "3px",
                            backgroundColor: "#feca57",
                          },
                          "50%": {
                            height: bar === 2 ? "12px" : "8px",
                            backgroundColor: "#ff6b6b",
                          },
                        },
                        animationDelay: `${bar * 0.2}s`,
                      }}
                    />
                  ))}
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    background: "linear-gradient(135deg, #feca57 0%, #ff6b6b 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  SoundWave
                </Typography>
              </Box>

              <Typography variant="body2" sx={{ mb: 2, opacity: 0.9, lineHeight: 1.5 }}>
                Your ultimate music streaming experience.
              </Typography>

              {/* Social Media Links */}
              <Box sx={{ display: "flex", gap: 1 }}>
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    size="small"
                    sx={{
                      color: "white",
                      bgcolor: "rgba(255, 255, 255, 0.1)",
                      "&:hover": {
                        bgcolor: social.color,
                        transform: "translateY(-1px)",
                        boxShadow: `0 2px 8px ${social.color}40`,
                      },
                      transition: "all 0.3s ease",
                    }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} sm={4} md={3}>
              <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: "bold" }}>
                Quick Links
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {["Browse Music", "Top Charts", "Artists", "Playlists"].map((link, index) => (
                  <Link
                    key={index}
                    href="#"
                    sx={{
                      color: "rgba(255, 255, 255, 0.8)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      "&:hover": {
                        color: "#feca57",
                      },
                      transition: "color 0.2s ease",
                    }}
                  >
                    {link}
                  </Link>
                ))}
              </Box>
            </Grid>

            {/* Support Links */}
            <Grid item xs={12} sm={4} md={3}>
              <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: "bold" }}>
                Support
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {["Help Center", "Contact Us", "Privacy Policy", "Terms"].map((link, index) => (
                  <Link
                    key={index}
                    href="#"
                    sx={{
                      color: "rgba(255, 255, 255, 0.8)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      "&:hover": {
                        color: "#feca57",
                      },
                      transition: "color 0.2s ease",
                    }}
                  >
                    {link}
                  </Link>
                ))}
              </Box>
            </Grid>

            {/* Contact */}
            <Grid item xs={12} sm={4} md={2}>
              <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: "bold" }}>
                Contact
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Email fontSize="small" sx={{ color: "#feca57" }} />
                  <Typography variant="body2" sx={{ opacity: 0.9, fontSize: "0.875rem" }}>
                    hello@soundwave.com
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <LocationOn fontSize="small" sx={{ color: "#feca57" }} />
                  <Typography variant="body2" sx={{ opacity: 0.9, fontSize: "0.875rem" }}>
                    San Francisco, CA
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.2)" }} />

        {/* Bottom Footer */}
        <Box
          sx={{
            py: 2,
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © 2024 SoundWave. All rights reserved. Made with ❤️ for music lovers.
          </Typography>

          <Box sx={{ display: "flex", gap: 3 }}>
            <Link
              href="#"
              sx={{
                color: "rgba(255, 255, 255, 0.8)",
                textDecoration: "none",
                fontSize: "0.875rem",
                "&:hover": {
                  color: "#feca57",
                },
                transition: "color 0.2s ease",
              }}
            >
              Privacy
            </Link>
            <Link
              href="#"
              sx={{
                color: "rgba(255, 255, 255, 0.8)",
                textDecoration: "none",
                fontSize: "0.875rem",
                "&:hover": {
                  color: "#feca57",
                },
                transition: "color 0.2s ease",
              }}
            >
              Terms
            </Link>
            <Link
              href="#"
              sx={{
                color: "rgba(255, 255, 255, 0.8)",
                textDecoration: "none",
                fontSize: "0.875rem",
                "&:hover": {
                  color: "#feca57",
                },
                transition: "color 0.2s ease",
              }}
            >
              Cookies
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
