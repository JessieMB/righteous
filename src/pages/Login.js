import {Box, Divider, Grid, Link, TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import { useForm, Controller} from 'react-hook-form';

const Login = () => {
    const {control, handleSubmit, formState: {errors, isValid}} = useForm({mode: "onBlur", defaultValues: {
           email: "", password: ""}})

    const onSubmit = data => console.log(data);

    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3} direction={"column"}>
                    <Grid item>
                        <Box py={2} textAlign={"center"}>
                            <Typography variant={"h4"}>
                                Log In
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Controller
                            name={"email"}
                            control={control}
                            render={({ field }) => <TextField label={"Email"} {...field} />}
                        />
                    </Grid>
                    <Grid item>
                        <Controller
                            name={"password"}
                            control={control}
                            render={({ field }) => <TextField label={"Password"} type={'password'} {...field} />}
                        />                </Grid>
                    <Grid item display={"flex"} justifyContent={"center"}>
                        <Button type={"submit"} disabled={!isValid} variant={"contained"}>Log In</Button>
                    </Grid>
                    <Grid item>
                        <Box>
                            <Typography variant={"caption"}>Forgot your password? <Link underline={"hover"} href={"/login"}>Click here to reset it.</Link></Typography>
                        </Box>
                    </Grid>
                    <Grid item><Divider /></Grid>
                    <Grid item textAlign={'center'}> OR </Grid>
                    <Grid item textAlign={'center'}> <Button variant={"outlined"}>
                        Log in with Facebook
                    </Button></Grid>
                    <Grid item textAlign={'center'}> <Button variant={"outlined"}>
                        Log in with Gmail
                    </Button></Grid>
                </Grid>
            </form>

        </Box>
    )
}

export default Login