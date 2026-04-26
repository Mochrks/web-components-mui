import { Grid, Box, Typography, Stack, useTheme } from "@mui/material";
import { MpCard } from "../components";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const data = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 2000 },
  { name: "Apr", sales: 2780 },
  { name: "May", sales: 1890 },
  { name: "Jun", sales: 2390 },
  { name: "Jul", sales: 3490 },
];

const pieData = [
  { name: "Direct", value: 400 },
  { name: "Social", value: 300 },
  { name: "Referral", value: 300 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default function ChartsShowcase() {
  const theme = useTheme();

  return (
    <Grid item xs={12}>
      <MpCard title="Analytics Dashboard (Recharts)">
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <Box sx={{ height: 300, width: "100%" }}>
              <Typography variant="subtitle2" gutterBottom>
                Monthly Sales Performance
              </Typography>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={theme.palette.primary.main} stopOpacity={0.8} />
                      <stop offset="95%" stopColor={theme.palette.primary.main} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="sales"
                    stroke={theme.palette.primary.main}
                    fillOpacity={1}
                    fill="url(#colorSales)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Box sx={{ height: 300, width: "100%", display: "flex", flexDirection: "column" }}>
              <Typography variant="subtitle2" gutterBottom>
                Traffic Sources
              </Typography>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </Grid>
        </Grid>
      </MpCard>
    </Grid>
  );
}
