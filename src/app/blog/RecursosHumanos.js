"use client"
import React, { useState, useEffect } from 'react';
import { Typography, Box, Button, Card, CardContent, CardMedia, Grid, useTheme, ThemeProvider, createTheme } from '@mui/material';

const RecursosHumanos = () => {
  const [mode, setMode] = useState('light'); // Estado para cambiar entre modo claro y oscuro
  const theme = useTheme();

  useEffect(() => {
    // Se obtiene la preferencia del usuario y se aplica el modo oscuro o claro
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setMode(prefersDarkMode ? 'dark' : 'light');
  }, []);

  const customTheme = createTheme({
    palette: {
      mode,
      background: {
        default: mode === 'dark' ? '#121212' : '#f5f5f5',
        paper: mode === 'dark' ? '#1d1d1d' : '#fff',
      },
      text: {
        primary: mode === 'dark' ? '#fff' : '#000',
        secondary: mode === 'dark' ? '#b0b0b0' : '#555',
      },
      primary: {
        main: mode === 'dark' ? '#bb86fc' : '#1976d2',
      },
    },
  });

  // Datos de los artículos
  const articles = [
    {
      title: "Cómo Optimizar tu Currículum",
      description:
        "Un currículum bien estructurado es tu carta de presentación ante los reclutadores. En este artículo, te proporcionamos consejos sobre cómo destacar tus habilidades y experiencias relevantes, así como el formato adecuado para captar la atención de los empleadores.",
      imageUrl: "https://i.pinimg.com/736x/db/be/f8/dbbef80a7cf8327ec5a09032fd4fd8c0.jpg",
      link: "#", // Link para leer más
    },
    {
      title: "Preparación Efectiva para la Entrevista",
      description:
        "La entrevista es una de las etapas más cruciales en el proceso de selección. Prepararse adecuadamente puede marcar la diferencia entre conseguir el trabajo o no. En este artículo, te compartimos estrategias para anticipar las preguntas más comunes, cómo presentar tus fortalezas y debilidades de manera efectiva.",
      imageUrl: "https://i.pinimg.com/736x/47/f1/8a/47f18aa8d7ccc7f9839db13a28c2b842.jpg",
      link: "#", // Link para leer más
    },
    {
      title: "Networking: Construyendo Relaciones Profesionales",
      description:
        "El networking es una herramienta poderosa en la búsqueda de empleo. Establecer y mantener relaciones profesionales puede abrir puertas y generar oportunidades inesperadas. En este artículo, discutimos cómo construir una red de contactos efectiva.",
      imageUrl: "https://i.pinimg.com/736x/15/21/c7/1521c7781296d344caf0426669695a5d.jpg",
      link: "#", // Link para leer más
    },
  ];

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" align="center" sx={{ fontWeight: 600, marginBottom: 3 }}>
          Recursos Humanos al Día
        </Typography>
        <Typography variant="h6" align="center" paragraph>
          Tu fuente de información y tendencias en RRHH
        </Typography>
        <Typography variant="subtitle1" align="center" paragraph sx={{ color: 'text.secondary' }}>
          Tendencias Emergentes en Recursos Humanos. Mantente actualizado con las últimas innovaciones en el campo de los RRHH.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {articles.map((article, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 3, backgroundColor: 'background.paper' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={article.imageUrl}
                  alt={article.title}
                  sx={{ borderTopLeftRadius: 3, borderTopRightRadius: 3 }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 500, marginBottom: 2 }}>
                    {article.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 2 }}>
                    {article.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    href={article.link}
                    sx={{
                      textTransform: 'none',
                      padding: '10px',
                      borderRadius: 3,
                      fontWeight: 600,
                    }}
                  >
                    Leer Más
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default RecursosHumanos;
