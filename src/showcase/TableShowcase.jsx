import { Grid } from "@mui/material";
import { MpCard, MpTable, MpBadge } from "../components";

const tableRows = [
  { id: 1, name: "Alice Johnson", role: "Admin", status: "Active" },
  { id: 2, name: "Bob Smith", role: "User", status: "Active" },
  { id: 3, name: "Charlie Brown", role: "Editor", status: "Inactive" },
  { id: 4, name: "Diana Prince", role: "User", status: "Active" },
];

const tableColumns = [
  { field: "id", headerName: "ID", width: 80 },
  { field: "name", headerName: "Name", flex: 1 },
  { field: "role", headerName: "Role", flex: 1 },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    renderCell: (row) => (
      <MpBadge color={row.status === "Active" ? "success" : "default"}>{row.status}</MpBadge>
    ),
  },
];

export default function TableShowcase() {
  return (
    <Grid item xs={12}>
      <MpCard title="Data Table">
        <MpTable rows={tableRows} columns={tableColumns} pagination />
      </MpCard>
    </Grid>
  );
}
