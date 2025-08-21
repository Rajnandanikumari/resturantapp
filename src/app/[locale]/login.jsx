"use client";
import React, { useState } from "react";
import {
    Button,
    Modal,
    Box,
    Typography,
    TextField,
    Checkbox,
    FormControlLabel,
    Link,
    CircularProgress,
    Alert
} from "@mui/material";
import { useTranslations } from "next-intl";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    maxWidth: "90vw",
    bgcolor: "white",
    borderRadius: 2,
    boxShadow: 24,
    p: 4
};

export default function LoginModal() {
    const t = useTranslations("loginPage");

    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setFormData({ email: "", password: "", rememberMe: false });
        setError("");
        setSuccess(false);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess(false);

        // Basic validation (uses localized message)
        if (!formData.email || !formData.password) {
            setError(t('fillAllFields') || "Please fill in all fields");
            return;
        }

        setIsLoading(true);

        try {
            // Simulate API call - replace with real auth
            await new Promise((resolve) => setTimeout(resolve, 1500));

            setSuccess(true);
            console.log("Login successful", formData);
        } catch (err) {
            setError(
                (typeof err?.message === "string" ? err.message : null) ||
                t('loginFailed') ||
                "Login failed. Please check your credentials."
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "6vh"
                }}
            >
                <Button
                    variant="contained"
                    onClick={handleOpen}
                    sx={{
                        bgcolor: "black",
                        "&:hover": { bgcolor: "black" }
                    }}
                >
                    {t("login")}
                </Button>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="login-modal-title"
                    aria-describedby="login-modal-description"
                >
                    <Box sx={style} component="form" onSubmit={handleSubmit} noValidate>
                        <Typography
                            id="login-modal-title"
                            variant="h6"
                            component="h2"
                            gutterBottom
                            sx={{ mb: 3 }}
                        >
                            {t("title")}
                        </Typography>

                        {error && (
                            <Alert severity="error" sx={{ mb: 2 }}>
                                {error}
                            </Alert>
                        )}

                        {success && (
                            <Alert severity="success" sx={{ mb: 2 }}>
                                {t("successMessage")}
                            </Alert>
                        )}

                        <TextField
                            fullWidth
                            required
                            margin="normal"
                            label={t("emailLabel")}
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder={t("emailPlaceholder")}
                            value={formData.email}
                            onChange={handleChange}
                            disabled={isLoading}
                        />

                        <TextField
                            fullWidth
                            required
                            margin="normal"
                            label={t("passwordLabel")}
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            placeholder={t("passwordPlaceholder")}
                            value={formData.password}
                            onChange={handleChange}
                            disabled={isLoading}
                        />

                        <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="rememberMe"
                                        checked={formData.rememberMe}
                                        onChange={handleChange}
                                        color="primary"
                                    />
                                }
                                label={t("rememberMe")}
                            />
                            <Link href="#" underline="hover">
                                {t("forgotPassword")}
                            </Link>
                        </Box>

                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} disabled={isLoading}>
                            {isLoading ? <CircularProgress size={24} /> : t("submitButton")}
                        </Button>

                        <Typography variant="body2" color="black" align="center">
                            {t("notRegistered")}
                            <Link href="#" underline="hover" fontWeight="bold">
                                {t("createAccount")}
                            </Link>
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </>
    );
}
