import { createTheme, ThemeProvider } from "@mui/material/styles";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddNode from "./pages/AddNode";
import DataTable from "./pages/Dashboard/table";

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif', // Your custom font
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/dashbaord"
              element={
                <Dashboard>
                  <DataTable />
                </Dashboard>
              }
            />
            <Route
              path="/add-node"
              element={
                <Dashboard>
                  <AddNode />
                </Dashboard>
              }
            />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
