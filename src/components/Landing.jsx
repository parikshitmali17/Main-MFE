




"use client"

import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  Grid,
  Card,
  CardContent,
  IconButton,
  Chip,
  useTheme,
  useMediaQuery,
  Alert,
} from "@mui/material"
import {
  MusicNote,
  PlayArrow,
  Headset,
  LibraryMusic,
  People,
  AdminPanelSettings,
  Person,
  TrendingUp,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material"
import { useState } from "react"

export default function LandingPage({ login }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginType, setLoginType] = useState("user")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

 console.log(login)
  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Updated credentials with @123 passwords
    const validCredentials = {
      admin: { email: "admin@music.com", password: "admin@123" },
      user: { email: "user@music.com", password: "user@123" },
    }

    const expectedCredentials = validCredentials[loginType]

    if (email === expectedCredentials.email && password === expectedCredentials.password) {
      // Successful login
      setTimeout(() => {
        login(email, loginType)
        setIsLoading(false)
      }, 500) // Small delay for better UX
    } else {
      // Failed login
      setTimeout(() => {
        setError(`Invalid ${loginType} credentials. Please check your email and password.`)
        setIsLoading(false)
      }, 500)
    }
  }

  const handleQuickLogin = () => {
    if (loginType === "admin") {
      setEmail("admin@music.com")
      setPassword("admin@123")
    } else {
      setEmail("user@music.com")
      setPassword("user@123")
    }
    setError("")
  }

  const features = [
    {
      icon: <LibraryMusic sx={{ fontSize: 40, color: "#ff6b6b" }} />,
      title: "Vast Music Library",
      description: "Access millions of songs from every genre and era",
    },
    {
      icon: <Headset sx={{ fontSize: 40, color: "#4ecdc4" }} />,
      title: "High Quality Audio",
      description: "Crystal clear sound with lossless audio streaming",
    },
    {
      icon: <People sx={{ fontSize: 40, color: "#45b7d1" }} />,
      title: "Social Features",
      description: "Share playlists and discover music with friends",
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40, color: "#feca57" }} />,
      title: "Personalized",
      description: "AI-powered recommendations just for you",
    },
  ]

  const stats = [
    { number: "50M+", label: "Songs" },
    { number: "10M+", label: "Users" },
    { number: "500K+", label: "Artists" },
    { number: "99.9%", label: "Uptime" },
  ]

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
          color: "white",
          position: "relative",
          overflow: "hidden",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
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
            animation: "float 8s ease-in-out infinite",
            "@keyframes float": {
              "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
              "50%": { transform: "translateY(-20px) rotate(5deg)" },
            },
          }}
        />

        {/* Floating Music Notes */}
        {[1, 2, 3, 4, 5].map((note) => (
          <Box
            key={note}
            sx={{
              position: "absolute",
              animation: `musicFloat${note} ${4 + note}s ease-in-out infinite`,
              [`@keyframes musicFloat${note}`]: {
                "0%, 100%": {
                  transform: `translateY(0px) translateX(0px) rotate(0deg)`,
                  opacity: 0.3,
                },
                "50%": {
                  transform: `translateY(-${20 + note * 10}px) translateX(${10 + note * 5}px) rotate(${note * 45}deg)`,
                  opacity: 0.6,
                },
              },
              left: `${10 + note * 15}%`,
              top: `${20 + note * 10}%`,
            }}
          >
            <MusicNote sx={{ fontSize: 24 + note * 4, color: "#feca57", opacity: 0.4 }} />
          </Box>
        ))}

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)",
                      boxShadow: "0 8px 25px rgba(255, 107, 107, 0.4)",
                      position: "relative",
                    }}
                  >
                    <MusicNote sx={{ color: "white", fontSize: 32 }} />

                    {/* Animated pulse effect */}
                    <Box
                      sx={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)",
                        animation: "heroPulse 2s ease-in-out infinite",
                        "@keyframes heroPulse": {
                          "0%": { transform: "scale(1)", opacity: 0.7 },
                          "50%": { transform: "scale(1.2)", opacity: 0.3 },
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
                      gap: "4px",
                      height: "30px",
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
                          animation: `heroBar${bar} 1.2s ease-in-out infinite`,
                          [`@keyframes heroBar${bar}`]: {
                            "0%, 100%": {
                              height: "8px",
                              backgroundColor: "#feca57",
                            },
                            "25%": {
                              height: bar === 1 || bar === 5 ? "18px" : "14px",
                              backgroundColor: "#ff6b6b",
                            },
                            "50%": {
                              height: bar === 2 || bar === 4 ? "24px" : "20px",
                              backgroundColor: "#4ecdc4",
                            },
                            "75%": {
                              height: bar === 3 ? "28px" : "16px",
                              backgroundColor: "#45b7d1",
                            },
                          },
                          animationDelay: `${bar * 0.1}s`,
                        }}
                      />
                    ))}
                  </Box>

                  <Typography
                    variant="h4"
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

                <Typography
                  variant={isMobile ? "h3" : "h2"}
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    background: "linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Your Music, Your World
                </Typography>

                <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, lineHeight: 1.6 }}>
                  Discover millions of songs, create personalized playlists, and connect with artists worldwide.
                  Experience music like never before with crystal-clear audio and AI-powered recommendations.
                </Typography>

                {/* Login Form */}
                <Box
                  sx={{
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: 3,
                    p: 4,
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    mb: 4,
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold" }}>
                    Login to SoundWave
                  </Typography>

                  {/* Login Type Toggle */}
                  <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
                    <Chip
                      icon={<Person />}
                      label="User Login"
                      onClick={() => {
                        setLoginType("user")
                        setError("")
                      }}
                      sx={{
                        bgcolor: loginType === "user" ? "#4ecdc4" : "rgba(255, 255, 255, 0.2)",
                        color: "white",
                        "&:hover": {
                          bgcolor: loginType === "user" ? "#45b7d1" : "rgba(255, 255, 255, 0.3)",
                        },
                        transition: "all 0.2s ease",
                      }}
                    />
                    <Chip
                      icon={<AdminPanelSettings />}
                      label="Admin Login"
                      onClick={() => {
                        setLoginType("admin")
                        setError("")
                      }}
                      sx={{
                        bgcolor: loginType === "admin" ? "#4ecdc4" : "rgba(255, 255, 255, 0.2)",
                        color: "white",
                        "&:hover": {
                          bgcolor: loginType === "admin" ? "#45b7d1" : "rgba(255, 255, 255, 0.3)",
                        },
                        transition: "all 0.2s ease",
                      }}
                    />
                  </Box>

                  {/* Error Message */}
                  {error && (
                    <Alert
                      severity="error"
                      sx={{
                        mb: 3,
                        bgcolor: "rgba(244, 67, 54, 0.1)",
                        color: "white",
                        "& .MuiAlert-icon": {
                          color: "#ff6b6b",
                        },
                        border: "1px solid rgba(244, 67, 54, 0.3)",
                      }}
                    >
                      {error}
                    </Alert>
                  )}

                  {/* Login Form */}
                  <Box
                    component="form"
                    onSubmit={handleLoginSubmit}
                    sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                  >
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        setError("")
                      }}
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          bgcolor: "rgba(255, 255, 255, 0.9)",
                          borderRadius: 2,
                          "& fieldset": {
                            borderColor: "transparent",
                          },
                          "&:hover fieldset": {
                            borderColor: "#feca57",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#ff6b6b",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: "rgba(0, 0, 0, 0.6)",
                        },
                      }}
                    />

                    <TextField
                      fullWidth
                      label="Password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value)
                        setError("")
                      }}
                      required
                      InputProps={{
                        endAdornment: (
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                            sx={{ color: "rgba(0, 0, 0, 0.6)" }}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        ),
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          bgcolor: "rgba(255, 255, 255, 0.9)",
                          borderRadius: 2,
                          "& fieldset": {
                            borderColor: "transparent",
                          },
                          "&:hover fieldset": {
                            borderColor: "#feca57",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#ff6b6b",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: "rgba(0, 0, 0, 0.6)",
                        },
                      }}
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={isLoading}
                      startIcon={loginType === "admin" ? <AdminPanelSettings /> : <Person />}
                      sx={{
                        background: "linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)",
                        borderRadius: 2,
                        py: 1.5,
                        "&:hover": {
                          background: "linear-gradient(135deg, #ff5252 0%, #ffb74d 100%)",
                          transform: "translateY(-2px)",
                          boxShadow: "0 8px 25px rgba(255, 107, 107, 0.4)",
                        },
                        "&:disabled": {
                          background: "rgba(255, 255, 255, 0.3)",
                          color: "rgba(255, 255, 255, 0.7)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      {isLoading ? "Logging in..." : `Login as ${loginType === "admin" ? "Admin" : "User"}`}
                    </Button>

                    {/* Quick Login Helper */}
                    <Button
                      variant="text"
                      onClick={handleQuickLogin}
                      sx={{
                        color: "rgba(255, 255, 255, 0.8)",
                        textTransform: "none",
                        "&:hover": {
                          color: "#feca57",
                          bgcolor: "rgba(255, 255, 255, 0.1)",
                        },
                      }}
                    >
                      Fill {loginType} credentials
                    </Button>
                  </Box>

                  {/* Demo Credentials Info */}
                  <Box sx={{ mt: 3, p: 2, bgcolor: "rgba(255, 255, 255, 0.1)", borderRadius: 2 }}>
                    <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
                      Demo Credentials:
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.7, fontSize: "0.875rem" }}>
                      <strong>User:</strong> user@music.com / user@123
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.7, fontSize: "0.875rem" }}>
                      <strong>Admin:</strong> admin@music.com / admin@123
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* Main Hero Image */}
                {/* <Box
                  component="img"
                  src="/placeholder.svg?height=400&width=400"
                  alt="Music streaming experience"
                  sx={{
                    width: "100%",
                    maxWidth: 400,
                    height: "auto",
                    borderRadius: 4,
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
                    transform: "perspective(1000px) rotateY(-5deg)",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "perspective(1000px) rotateY(0deg) scale(1.02)",
                    },
                  }}
                /> */}

                {/* Floating Play Button */}
                <IconButton
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 80,
                    height: 80,
                    bgcolor: "rgba(255, 107, 107, 0.9)",
                    color: "white",
                    "&:hover": {
                      bgcolor: "#ff6b6b",
                      transform: "translate(-50%, -50%) scale(1.1)",
                    },
                    transition: "all 0.3s ease",
                    boxShadow: "0 8px 25px rgba(255, 107, 107, 0.4)",
                  }}
                >
                  <PlayArrow sx={{ fontSize: 40 }} />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 8, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "bold",
                      background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      mb: 1,
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      {/* <Box sx={{ py: 8, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                mb: 2,
                background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Why Choose SoundWave?
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Experience music streaming like never before
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    textAlign: "center",
                    p: 3,
                    border: "1px solid",
                    borderColor: "divider",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 40px rgba(0, 0, 0, 0.1)",
                      borderColor: "primary.main",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <CardContent>
                    <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box> */}

      <Box
  sx={{
    py: 8,
    bgcolor: "background.default",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <Container maxWidth="lg">
    <Box sx={{ textAlign: "center", mb: 6 }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          mb: 2,
          background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Why Choose SoundWave?
      </Typography>
      <Typography variant="h6" color="text.secondary">
        Experience music streaming like never before
      </Typography>
    </Box>

    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 4,
      }}
    >
      {features.map((feature, index) => (
        <Card
          key={index}
          sx={{
            width: { xs: "100%", sm: "45%", md: "22%" },
            textAlign: "center",
            p: 3,
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 2,
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: "0 12px 40px rgba(0, 0, 0, 0.1)",
              borderColor: "primary.main",
            },
          }}
        >
          <CardContent>
            <Box sx={{ mb: 2 }}>{feature.icon}</Box>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              {feature.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {feature.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  </Container>
</Box>


      {/* CTA Section */}
      <Box
        sx={{
          py: 8,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
            Ready to Start Your Musical Journey?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Join millions of music lovers and discover your next favorite song today.
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.8 }}>
            Login above to access your personalized music experience.
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}
