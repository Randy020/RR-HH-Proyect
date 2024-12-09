"use client"
import React, { useState } from "react";
import { Typography, Grid, Card, CardContent, CardMedia, Button, Box, useTheme, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Conocenos = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#90caf9" : "#1976d2",
      },
      background: {
        default: darkMode ? "#121212" : "#ffffff",
        paper: darkMode ? "#1d1d1d" : "#ffffff",
      },
      text: {
        primary: darkMode ? "#ffffff" : "#000000",
        secondary: darkMode ? "#b0bec5" : "#757575",
      },
    },
  });

  const sections = [
    {
      title: "Evaluación de talento",
      description:
        "En OFP Consulting, nos especializamos en la evaluación de candidatos a través de procesos rigurosos. Utilizamos herramientas avanzadas para garantizar que cada evaluación refleje con precisión las habilidades y competencias necesarias para el puesto. Nuestro objetivo es entregar resultados claros y útiles para nuestros clientes.",
      imageUrl: "https://i.pinimg.com/736x/2a/75/1e/2a751e0a0e48957b3222b68fe5bc0b0e.jpg",
      link: "#",
    },
    {
      title: "Capacitación continua",
      description:
        "Creemos en la importancia de la formación continua para el desarrollo profesional. Ofrecemos programas de capacitación adaptados a las necesidades de cada empresa, con el fin de potenciar las habilidades de los colaboradores y mejorar el desempeño organizacional. Nuestro enfoque práctico asegura que los participantes apliquen lo aprendido en su entorno laboral.",
      imageUrl: "https://i.pinimg.com/736x/0c/a5/6c/0ca56c047f3ef2a1c33a7e418e0f8771.jpg",
      link: "#",
    },
    {
      title: "Reclutamiento efectivo",
      description:
        "Nuestro proceso de reclutamiento se basa en un análisis exhaustivo de las necesidades de cada cliente. Trabajamos para encontrar no solo candidatos calificados, sino también aquellos que se alineen con la cultura organizacional. A través de un enfoque personalizado, garantizamos una selección de personal efectiva y de alta calidad.",
      imageUrl: "https://i.pinimg.com/736x/d9/66/0e/d9660eb4973c119d6836e9943aa5ce55.jpg",
      link: "#",
    },
   
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ padding: "40px", backgroundColor: "transparent" }}>
        <Typography variant="h3" color="primary" gutterBottom align="center">
          Conócenos
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph align="center">
          Expertos en Recursos Humanos
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph align="center">
          Contacto: 809-788-2434
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph align="center">
          Compromiso con la excelencia - Transformando el capital humano
        </Typography>

        <Grid container spacing={4} justifyContent="center" sx={{ marginTop: "30px" }}>
          {sections.map((section, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  boxShadow: 3,
                  borderRadius: 2,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                  backgroundColor: theme.palette.background.paper,
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={section.imageUrl}
                  alt={section.title}
                  sx={{
                    borderTopLeftRadius: 2,
                    borderTopRightRadius: 2,
                    objectFit: "cover",
                  }}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h6" gutterBottom color="text.primary">
                    {section.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {section.description}
                  </Typography>
                </CardContent>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  href={section.link}
                  sx={{
                    marginBottom: "15px",
                    marginLeft: "15px",
                    marginRight: "15px",
                    borderRadius: 20,
                  }}
                >
                  Leer Más
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ marginTop: "60px", textAlign: "center" }}>
          <Typography variant="h5" color="primary" gutterBottom>
            Expertos a tu servicio
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            La fuerza detrás de tu éxito
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            Compromiso y dedicación en cada proyecto, trabajando en estrecha colaboración para entender las necesidades de nuestros clientes.
          </Typography>
        </Box>

       
      </Box>
    </ThemeProvider>
  );
};

export default Conocenos;
