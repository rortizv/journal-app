import { useDispatch } from "react-redux"
import { Link as RouterLink } from "react-router-dom"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Google } from "@mui/icons-material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { checkingAuth, startGoogleSignIn } from "../../store/auth"


export const LoginPage = () => {

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: 'gandalf@mail.com',
    password: '123456'
  });

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(checkingAuth());
  }

  const onGoogleSignIn = () => {
    console.log('Google sign in');
    dispatch(startGoogleSignIn());
  }

  return (
    <AuthLayout title='Login'>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              label="Username"
              placeholder="email@company.com"
              name="email"
              value={email}
              onInputChange={onInputChange}
              fullWidth>
            </TextField>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              label="Password"
              type="password"
              name="password"
              value={password}
              onInputChange={onInputChange}
              fullWidth>
            </TextField>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid item xs={12} sm={6}>
              <Button type="submit" variant="contained" fullWidth>Login</Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={onGoogleSignIn}
                variant="contained"
                fullWidth>
                <Google sx={{ mr: 1 }} />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to='/auth/register'>
              Create an account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
