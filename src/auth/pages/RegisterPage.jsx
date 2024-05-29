import { Link as RouterLink } from "react-router-dom"
import { Button, Grid, Link, TextField } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
  return (
    <AuthLayout title='Register'>
      <form>
        <Grid container>
        <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              label="Full name"
              type="text"
              placeholder="Full name..."
              fullWidth>
            </TextField>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              label="Username"
              type="email"
              placeholder="email@company.com"
              fullWidth>
            </TextField>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              label="Password"
              type="password"
              fullWidth>                
            </TextField>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>Create account</Button>
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Already have an account?
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
