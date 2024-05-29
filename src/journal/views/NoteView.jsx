import { Button, Grid, TextField, Typography } from '@mui/material';
import { SaveOutlined } from '@mui/icons-material';
import { ImageGallery } from '../components';


export const NoteView = () => {
  return (
    <Grid container
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{mb: 1}}
    >
        <Grid item>
            <Typography fontSize={39} fontWeight='light'>August 28th, 2023</Typography>
        </Grid>
        <Grid item sx={{marginBottom: 1}}>
            <Button color='primary' sx={{padding: 2}}>
                <SaveOutlined sx={{fontSize: 26, mr: 1}} />
                Save
            </Button>
        </Grid>

        <Grid container>
            <TextField
                type='text'
                variant='filled'
                fullWidth
                placeholder='Type a title'
                label='Title'
                sx={{ border: 'none', mb: 1}}
            />
            <TextField
                type='text'
                variant='filled'
                fullWidth
                multiline
                placeholder='Type anything you want...'
                minRows={5}
            />
        </Grid>
        <ImageGallery />
    </Grid>
  )
}
