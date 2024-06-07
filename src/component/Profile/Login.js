import { useState } from "react";
import useLoginStorage from "../../Hooks/useLoginStorage";
import {
  SwipeableDrawer,
  Box,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Button,
  Typography,
} from "@mui/material";
import {
  AccountCircle,
  Close,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
const LoginComponent = () => {
  const [open, setOpen] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [storedUsername, setStoredUsername] = useLoginStorage("username");
  const [storedPassword, setStoredPassword] = useLoginStorage("password");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
    //Stored username and password into the LocalStorage
    setStoredUsername(username);
    setStoredPassword(password);
    setOpen(false)
  };
  const handleToggleDrawer = (open) => (event) => {
    console.log(open, event);
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
    }
    setOpen(open);
  };

  
  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={handleToggleDrawer(false)}
        onOpen={handleToggleDrawer(true)}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", width: "500px" }} >
          <div className="my-5">
            <div className="flex justify-start">
              <IconButton
                onClick={handleToggleDrawer(false)}
                size="small"
                sx={{ ml: 2 }}
              >
                <Close />
              </IconButton>
            </div>
            <div className="grid gap-y-2 mx-6 mt-4">
              <Typography variant="h5" gutterBottom>
                Login
              </Typography>

              <form>
                  <FormControl variant="standard" fullWidth>
                    <InputLabel htmlFor="standard-adornment-username">
                      Username
                    </InputLabel>
                    <Input
                      className="text-black"
                      value={username ? username : ''} 
                      margin="dense"
                      id="standard-adornment-username"
                      type="text"
                      onChange={(e) => setUsername(e.target.value)}
                      endAdornment={
                        <InputAdornment position="end">
                          <AccountCircle />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl variant="standard" fullWidth>
                    <InputLabel
                      htmlFor="standard-adornment-password"
                      margin="dense"
                    >
                      Password
                    </InputLabel>
                    <Input
                      className="text-black"
                      value={password}
                      margin="dense"
                      id="standard-adornment-password"
                      type={showPassword ? "text" : "password"}
                      onChange={(e) => setPassword(e.target.value)}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                <Button
                 onClick={handleSubmit}
                  fullWidth
                  className="flex mt-4 bg-primary"
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                >
                  Login
                </Button>
              </form>
            </div>
          </div>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default LoginComponent;
