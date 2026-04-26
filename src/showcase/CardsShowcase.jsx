import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  Avatar,
  IconButton,
  Chip,
  Stack,
} from "@mui/material";
import { MpCard, MpButton } from "../components";
import { Heart, Share2, ShoppingCart, Clock } from "lucide-react";

export default function CardsShowcase() {
  return (
    <Grid item xs={12}>
      <MpCard title="Premium Card Layouts">
        <Grid container spacing={3}>
          {/* Blog/Article Card */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                transition: "transform 0.3s",
                "&:hover": { transform: "translateY(-8px)" },
              }}
            >
              <CardMedia
                component="img"
                height="240"
                image="/product-watch.png"
                alt="Blog"
                sx={{
                  backgroundColor: "#f5f5f5",
                }}
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80";
                }}
              />
              <CardContent>
                <Stack direction="row" justifyContent="space-between" mb={2}>
                  <Chip label="Technology" color="primary" size="small" variant="soft" />
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Clock size={14} color="gray" />
                    <Typography variant="caption" color="text.secondary">
                      5 min read
                    </Typography>
                  </Stack>
                </Stack>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  The Future of Modern Web Development
                </Typography>
                <Typography variant="body2" color="text.secondary" noOfLines={2}>
                  Exploring how AI and edge computing are reshaping the landscape of building web
                  applications in 2026.
                </Typography>
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2 }}>
                <Button size="small" color="primary">
                  Read more →
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Product Card */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                position: "relative",
              }}
            >
              <IconButton
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  backgroundColor: "rgba(255,255,255,0.8)",
                  "&:hover": { backgroundColor: "#fff" },
                }}
              >
                <Heart size={20} />
              </IconButton>
              <CardMedia
                component="img"
                height="240"
                image="/product-watch.png"
                alt="Product"
                sx={{ backgroundColor: "#f0f4f8" }}
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80";
                }}
              />
              <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="start">
                  <Box>
                    <Typography variant="h6" fontWeight="bold">
                      Nexus Smartwatch Pro
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Next-gen health tracking
                    </Typography>
                  </Box>
                  <Typography variant="h5" fontWeight="bold" color="primary.main">
                    $349
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} mt={2}>
                  <Chip label="New" color="success" size="small" />
                  <Chip label="Best Seller" color="secondary" size="small" />
                </Stack>
              </CardContent>
              <CardActions sx={{ p: 2, gap: 1 }}>
                <MpButton fullWidth startIcon={<ShoppingCart size={18} />}>
                  Add to Cart
                </MpButton>
                <IconButton
                  variant="outlined"
                  sx={{ borderRadius: 2, border: "1px solid #e0e0e0" }}
                >
                  <Share2 size={18} />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </MpCard>
    </Grid>
  );
}
