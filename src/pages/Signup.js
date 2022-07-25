import {Box, Divider, Grid, Link, TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import { useForm, Controller} from 'react-hook-form';

const Signup = () => {
    const {control, handleSubmit, formState: {errors, isValid}} = useForm({mode: "onBlur", defaultValues: {
        firstName: "", lastName: "", phone: "", email: "", password: "", confirmPassword: ""}})

    const onSubmit = data => console.log(data);

    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3} direction={"column"}>
                <Grid item>
                    <Box py={2} textAlign={"center"}>
                        <Typography variant={"h4"}>
                            Sign Up
                        </Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <Controller
                        name={"firstName"}
                        control={control}
                        render={({ field }) => <TextField label={"First Name"} {...field} />}
                    />
                </Grid>
                <Grid item>
                    <Controller
                        name={"lastName"}
                        control={control}
                        render={({ field }) => <TextField label={"Last Name"} {...field} />}
                    />                </Grid>
                <Grid item>
                    <Controller
                        name={"email"}
                        control={control}
                        render={({ field }) => <TextField label={"Email"} {...field} />}
                    />                </Grid>
                <Grid item>
                    <Controller
                        name={"phone"}
                        control={control}
                        render={({ field }) => <TextField label={"Phone"} {...field} />}
                    />                </Grid>
                <Grid item>
                    <Controller
                        name={"password"}
                        control={control}
                        render={({ field }) => <TextField type={"password"} label={"Password"} {...field} />}
                    />                </Grid>
                <Grid item>
                    <Controller
                        name={"confirmPassword"}
                        control={control}
                        render={({ field }) => <TextField type={"password"} label={"Confirm Password"} {...field} />}
                    />                </Grid>
                <Grid item display={"flex"} justifyContent={"center"}>
                    <Button type={"submit"} disabled={!isValid} variant={"contained"}>Sign Up</Button>
                </Grid>
                <Grid item>
                    <Box>
                        <Typography variant={"caption"}>Already have an account? <Link underline={"hover"} href={"/login"}>Log in here.</Link></Typography>
                    </Box>
                </Grid>
                <Grid item><Divider /></Grid>
                <Grid item textAlign={'center'}> OR </Grid>
                <Grid item textAlign={'center'}> <Button variant={"outlined"}>
                    Sign up with Facebook
                </Button></Grid>
                <Grid item textAlign={'center'}> <Button variant={"outlined"}>
                    Sign up with Gmail
                </Button></Grid>
            </Grid>
            </form>

        </Box>
    )
}

export default Signup