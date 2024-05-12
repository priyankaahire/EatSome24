import { Button, FormControl, InputLabel, TextField, Typography } from "@mui/material";

export const ContactComponent = () => {
  return (
    <>
      <main className="main-container  flex-1 overflow-y-auto min-h-[87vh] mt-24">
        <div className="flex justify-around pt-3">
        <div className="contact-left"></div>
          <div className="contact-right ">
          <Typography variant="h5">
                Contact Us
              </Typography>
            <form className="pt-5">
          
            <TextField
            fullWidth
                id="outlined-name-input"
                label="Name"
                type="text"
                autoComplete="current-name"
                margin="dense"
                />
            <TextField
            fullWidth
                id="outlined-email-input"
                label="Email"
                type="text"
                autoComplete="current-email"
                margin="dense"
                />
            <TextField
            fullWidth
                id="outlined-multiline-static"
                label="Comment"
                multiline
                rows={4}
                defaultValue=""
                margin="dense"
             />
              <Button
                  fullWidth
                  className="flex mt-4 bg-primary"
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                >
                  Send
                </Button>
          

            </form>

          </div>
        </div>
      </main>
    </>
  );
};
