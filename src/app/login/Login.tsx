"use client"
import { Box, Button, Card, CardActions, CardContent, FormControl, FormHelperText, TextField } from '@mui/material'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
type Inputs = {
    email: string
    password: string
}
const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors },
    } = useForm<Inputs>({
        defaultValues: {
            email: '',
            password: ''
        }
    })
    const handleLogin = (data: any) => {
        console.log(data, "data")
    }
    
    return (
        <Box mt="10vh">
            <Card sx={{ minWidth: 275 }}>
                <Box component="form" onSubmit={handleSubmit(handleLogin)} autoComplete="off">
                    <CardContent>
                        <FormControl sx={{ p: 1 }}>
                            <Controller
                                name="email"
                                control={control}
                                rules={{ required: true }}
                                render={({ field: { onChange, value, ref } }) => <TextField id="outlined-basic" label="email" variant="outlined"
                                    {...register("email", {
                                        required: "This Field is required",
                                        validate: {
                                            maxLength: (v) =>
                                                v.length <= 50 ||
                                                "The email should have at most 50 characters",
                                            matchPattern: (v) =>
                                                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                                                "Email address must be a valid address",
                                        },
                                    })}
                                    onChange={onChange}
                                    value={value}
                                    error={!!errors?.email}
                                    helperText={!!errors?.email && errors?.email.message}
                                />}
                            />
                        </FormControl>
                        <FormControl sx={{ p: 1 }}>
                            <Controller
                                name="password"
                                control={control}
                                rules={{ required: true }}
                                render={({ field: { onChange, value } }) => <TextField id="outlined-basic" label="password" type='password' variant="outlined"
                                    {...register("password", {
                                        required: "This Field is required", validate: {
                                            maxLength: (v) =>
                                                v.length > 2 || "Your password should contain Atleast 3 Characters"
                                        }
                                    })}
                                    onChange={onChange}
                                    value={value}
                                    error={!!errors?.password}
                                    helperText={!!errors?.email && errors?.password?.message}
                                />}
                            />
                        </FormControl>
                    </CardContent>
                    <CardActions sx={{p:2}}>
                        <Button size="small" type='submit' variant='contained'>Learn More</Button>
                    </CardActions>
                </Box>
            </Card>
        </Box>

    )
}

export default Login