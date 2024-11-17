import React, { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  TablePagination,
  TextField,
  Switch,
  CardContent,
  Box,
  Button,
} from "@mui/material";

import Edit from "../../assets/icon/edit.svg";
import Delete from "../../assets/icon/delete.svg";
import { CustomButton, TableCard, Title } from "./style";
import { Link } from "react-router-dom";

const rows = [
  {
    id: 1,
    name: "John Doe",
    Email: "abc@gmail.com",
    Phone: "91-4567892",
    Role: "Manager",
    Permission: "non",
    Status: true,
    Action: "",
  },
  {
    id: 1,
    name: "John Doe",
    Email: "abc@gmail.com",
    Phone: "91-4567892",
    Role: "Manager",
    Permission: "non",
    Status: true,
    Action: "",
  },
  {
    id: 1,
    name: "John Doe",
    Email: "abc@gmail.com",
    Phone: "91-4567892",
    Role: "Manager",
    Permission: "non",
    Status: true,
    Action: "",
  },
  {
    id: 1,
    name: "John Doe",
    Email: "abc@gmail.com",
    Phone: "91-4567892",
    Role: "Manager",
    Permission: "non",
    Status: true,
    Action: "",
  },
  {
    id: 1,
    name: "John Doe",
    Email: "abc@gmail.com",
    Phone: "91-4567892",
    Role: "Manager",
    Permission: "non",
    Status: true,
    Action: "",
  },
  {
    id: 1,
    name: "John Doe",
    Email: "abc@gmail.com",
    Phone: "91-4567892",
    Role: "Manager",
    Permission: "non",
    Status: true,
    Action: "",
  },
  {
    id: 1,
    name: "John Doe",
    Email: "abc@gmail.com",
    Phone: "91-4567892",
    Role: "Manager",
    Permission: "non",
    Status: false,
    Action: "",
  },
  {
    id: 1,
    name: "John Doe",
    Email: "abc@gmail.com",
    Phone: "91-4567892",
    Role: "Manager",
    Permission: "non",
    Status: true,
    Action: "",
  },
  {
    id: 1,
    name: "John Doe",
    Email: "abc@gmail.com",
    Phone: "91-4567892",
    Role: "Manager",
    Permission: "non",
    Status: false,
    Action: "",
  },
];

const columns = [
  { id: "name", label: "Name", isSearch: true },
  { id: "Email", label: "Email", isSearch: true },
  { id: "Phone", label: "Phone", isSearch: true },
  { id: "Role", label: "Role", isSearch: true },
  { id: "Permission", label: "Permission", isSearch: true },
  { id: "Status", label: "Status", isSearch: false },
  { id: "Action", label: "Action", isSearch: false },
];

function DataTable() {
  const [order, setOrder] = useState("asc"); // Sorting direction
  const [orderBy, setOrderBy] = useState("name"); // Column to sort by
  const [search, setSearch] = useState({
    name: "",
    Email: "",
    Phone: "",
    Role: "",
    Permission: "",
  }); // Search query for each column
  const [page, setPage] = useState(0); // Pagination page
  const [rowsPerPage, setRowsPerPage] = useState(5); // Rows per page

  // Handle sorting logic
  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // Handle search for individual columns
  const handleSearchChange = (event, columnId) => {
    setSearch((prev) => ({
      ...prev,
      [columnId]: event.target.value,
    }));
  };

  // Filter rows based on search input for each column
  const filteredRows = useMemo(() => {
    return rows.filter((row) => {
      return Object.keys(search).every((columnId) => {
        if (search[columnId]) {
          const value = row[columnId]?.toString().toLowerCase();
          return value && value.includes(search[columnId].toLowerCase());
        }
        return true; // No filter for empty search input
      });
    });
  }, [search]);

  // Sort rows based on the selected column and order
  const sortedRows = useMemo(() => {
    return filteredRows.sort((a, b) => {
      if (orderBy === "name") {
        return order === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
      if (orderBy === "Email") {
        return order === "asc" ? a.Email - b.Email : b.Email - a.Email;
      }
      if (orderBy === "Phone") {
        return order === "asc"
          ? a.country.localeCompare(b.Phone)
          : b.Phone.localeCompare(a.Phone);
      }
      if (orderBy === "Role") {
        return order === "asc" ? a.Role - b.Role : b.Role - a.Role;
      }

      return 0;
    });
  }, [filteredRows, orderBy, order]);

  // Handle pagination change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <Title>Company Management</Title>
        <Link to="/add-node">
        <CustomButton variant="contained">Add Node +</CustomButton>
        </Link>
      </Box>
      <TableCard sx={{ borderRadius: "14px", boxShadow: "none" }}>
        <CardContent>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-labelledby="tableTitle">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      sortDirection={orderBy === column.id ? order : false}
                    >
                      <TableSortLabel
                        active={orderBy === column.id}
                        direction={orderBy === column.id ? order : "asc"}
                        onClick={() => handleRequestSort(column.id)}
                        sx={{ paddingBottom: "16px" }}
                      >
                        {column.label}
                      </TableSortLabel>
                      {column.isSearch && (
                        <TextField
                          key={column.id}
                          placeholder="Search"
                          value={search[column.id]}
                          onChange={(e) => handleSearchChange(e, column.id)}
                          variant="filled"
                          size="small"
                          sx={{
                            "& input::placeholder": {
                              fontSize: "10px", // Change the font size of the placeholder
                              color: "#878787", // Change placeholder color (optional)
                            },
                          }}
                        />
                      )}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow></TableRow>
              </TableHead>

              <TableBody>
                {sortedRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow hover tabIndex={-1} key={row.id}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.Email}</TableCell>
                      <TableCell>{row.Phone}</TableCell>
                      <TableCell>{row.Role}</TableCell>
                      <TableCell>{row.Permission}</TableCell>
                      <TableCell>
                        {row.Status ? (
                          <Switch defaultChecked size="small" />
                        ) : (
                          <Switch size="small" />
                        )}
                      </TableCell>
                      <TableCell>
                        <img src={Edit} /> / <img src={Delete} />
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination */}
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={sortedRows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </CardContent>
      </TableCard>
    </>
  );
}

export default DataTable;
