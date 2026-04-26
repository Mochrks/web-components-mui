import { useState } from "react";
import { Grid, Box, Typography, IconButton, Stack } from "@mui/material";
import { MpCard } from "../components";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Mountain View",
    description: "Breathtaking peaks and valleys.",
    image: "/carousel-mountain.png",
  },
  {
    title: "Ocean Sunset",
    description: "Golden hour at the horizon.",
    image: "/carousel-ocean.png",
  },
  {
    title: "City Lights",
    description: "The vibrant pulse of the urban night.",
    image: "/carousel-city.png",
  },
];

export default function CarouselShowcase() {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = slides.length;

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prev) => (prev - 1 + maxSteps) % maxSteps);
  };

  return (
    <Grid item xs={12}>
      <MpCard title="Premium Carousel">
        <Box sx={{ position: "relative", width: "100%", overflow: "hidden", borderRadius: 4 }}>
          <Box
            sx={{
              display: "flex",
              transform: `translateX(-${activeStep * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {slides.map((slide, index) => (
              <Box
                key={index}
                sx={{
                  flex: "0 0 100%",
                  position: "relative",
                  height: { base: 300, md: 400 },
                }}
              >
                <Box
                  component="img"
                  src={slide.image}
                  alt={slide.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  onError={(e) => {
                    e.target.src = `https://images.unsplash.com/photo-${index === 0 ? "1464822759023-fed622ff2c3b" : index === 1 ? "1507525428034-b723cf961d3e" : "1477346611705-65d1883cee1e"}?w=1200&q=80`;
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.3)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    textAlign: "center",
                    p: 4,
                  }}
                >
                  <Typography variant="h3" fontWeight="bold">
                    {slide.title}
                  </Typography>
                  <Typography variant="h6" sx={{ opacity: 0.9 }}>
                    {slide.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          <IconButton
            onClick={handleBack}
            sx={{
              position: "absolute",
              left: 16,
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(255,255,255,0.3)",
              color: "white",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.5)" },
            }}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: 16,
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(255,255,255,0.3)",
              color: "white",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.5)" },
            }}
          >
            <ChevronRight />
          </IconButton>

          <Stack
            direction="row"
            spacing={1}
            sx={{
              position: "absolute",
              bottom: 16,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {slides.map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: activeStep === index ? "white" : "rgba(255,255,255,0.5)",
                  transition: "background-color 0.3s",
                }}
              />
            ))}
          </Stack>
        </Box>
      </MpCard>
    </Grid>
  );
}
