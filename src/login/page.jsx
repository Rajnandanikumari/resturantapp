// "use client";
// import React, { useState } from "react";
// import {
//     Button,
//     Modal,
//     Box,
//     Typography,
//     TextField,
//     Checkbox,
//     FormControlLabel,
//     Link,
//     CircularProgress,
//     Alert
// } from "@mui/material";

// const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: 400,
//     maxWidth: '90vw',
//     bgcolor: "background.paper",
//     borderRadius: 2,
//     boxShadow: 24,
//     p: 4,
// };

// export default function LoginModal() {
//     const [open, setOpen] = useState(false);
//     const [formData, setFormData] = useState({
//         email: "",
//         password: "",
//         rememberMe: false
//     });
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState("");
//     const [success, setSuccess] = useState(false);

//     const handleOpen = () => setOpen(true);
//     const handleClose = () => {
//         setOpen(false);
//         setFormData({ email: "", password: "", rememberMe: false });
//         setError("");
//         setSuccess(false);
//     };

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: type === 'checkbox' ? checked : value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError("");
//         setSuccess(false);

//         // Basic validation
//         if (!formData.email || !formData.password) {
//             setError("Please fill in all fields");
//             return;
//         }

//         setIsLoading(true);

//         try {
//             // Simulate API call - replace with your actual authentication logic
//             await new Promise(resolve => setTimeout(resolve, 1500));

//             // Here you would typically:
//             // 1. Call your authentication API (e.g., NextAuth, custom API route)
//             // 2. Handle the response
//             // Example:
//             // const response = await fetch('/api/auth/login', {
//             //   method: 'POST',
//             //   headers: { 'Content-Type': 'application/json' },
//             //   body: JSON.stringify(formData)
//             // });
//             // const data = await response.json();
//             // if (!response.ok) throw new Error(data.message);

//             setSuccess(true);
//             // Optionally: close modal after successful login
//             // handleClose();

//             // In real app: redirect or update auth state
//             console.log("Login successful", formData);
//         } catch (err) {
//             setError(err.message || "Login failed. Please check your credentials.");
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <>
//             <Button
//                 variant="contained"
//                 onClick={handleOpen}
//                 sx={{
//                     bgcolor: "primary.main",
//                     "&:hover": { bgcolor: "primary.dark" },
//                 }}
//             >
//                 Login
//             </Button>

//             <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="login-modal-title"
//                 aria-describedby="login-modal-description"
//             >
//                 <Box sx={style} component="form" onSubmit={handleSubmit} noValidate>
//                     <Typography
//                         id="login-modal-title"
//                         variant="h6"
//                         component="h2"
//                         gutterBottom
//                         sx={{ mb: 3 }}
//                     >
//                         Sign in to our platform
//                     </Typography>

//                     {error && (
//                         <Alert severity="error" sx={{ mb: 2 }}>
//                             {error}
//                         </Alert>
//                     )}

//                     {success && (
//                         <Alert severity="success" sx={{ mb: 2 }}>
//                             Login successful! Redirecting...
//                         </Alert>
//                     )}

//                     <TextField
//                         fullWidth
//                         required
//                         margin="normal"
//                         label="Email Address"
//                         name="email"
//                         type="email"
//                         autoComplete="email"
//                         placeholder="name@company.com"
//                         value={formData.email}
//                         onChange={handleChange}
//                         disabled={isLoading}
//                     />

//                     <TextField
//                         fullWidth
//                         required
//                         margin="normal"
//                         label="Password"
//                         name="password"
//                         type="password"
//                         autoComplete="current-password"
//                         placeholder="••••••••"
//                         value={formData.password}
//                         onChange={handleChange}
//                         disabled={isLoading}
//                     />

//                     <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
//                         <FormControlLabel
//                             control={
//                                 <Checkbox
//                                     name="rememberMe"
//                                     checked={formData.rememberMe}
//                                     onChange={handleChange}
//                                     color="primary"
//                                 />
//                             }
//                             label="Remember me"
//                         />
//                         <Link href="#" variant="body2" underline="hover">
//                             Forgot password?
//                         </Link>
//                     </Box>

//                     <Button
//                         type="submit"
//                         fullWidth
//                         variant="contained"
//                         sx={{ mt: 3, mb: 2 }}
//                         disabled={isLoading}
//                     >
//                         {isLoading ? (
//                             <CircularProgress size={24} color="inherit" />
//                         ) : (
//                             "Login to your account"
//                         )}
//                     </Button>

//                     <Typography variant="body2" color="text.secondary" align="center">
//                         Not registered?{" "}
//                         <Link href="#" underline="hover" fontWeight="bold">
//                             Create account
//                         </Link>
//                     </Typography>
//                 </Box>
//             </Modal>
//         </>
//     );
// }