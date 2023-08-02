import React, { useId } from 'react'
import { useForm, Controller } from 'react-hook-form'
import MainContainer from 'components/MainContainer'
import { MenuItem, Grid, Stack } from '@mui/material'
import Input from 'components/Form/Input'
import Select from 'components/Form/Select'
import Button from 'components/Button'
import { useAppDispatch } from 'store/hooks'
import { addWildfireReport } from 'store/AppSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

interface FormData {
    textInput1: string
    select1: string
    select2: string
    textInput2: string
    textArea: string
}

const NewReport = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const id = useId()
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>()
    const onSubmit = (data: FormData) => {
        dispatch(
            addWildfireReport({
                id,
                userName: data.textInput1,
                location: {
                    city: data.select1,
                    option: data.select2,
                    long: 'long',
                    lat: 'lat',
                    address: data.textInput2,
                },
                description: data.textArea,
                date: Date.now(),
                type: 'solve',
            })
        )
        toast.error('New Wildfire added!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        })
        handleCancel()
    }

    const handleMySubmit = () => {
        handleSubmit(onSubmit)()
    }

    const handleCancel = () => {
        navigate('/reports')
    }
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                handleMySubmit()
            }}
            className="w-full flex flex-col gap-[23px]"
        >
            <MainContainer fixed={true}>
                <Grid container spacing={2} padding={'18px 23px'}>
                    <Grid item xs={12}>
                        <h6 className="text-white font-helvetica text-lg font-medium leading-10">
                            Location
                        </h6>
                    </Grid>
                    {/* First row */}
                    <Grid item xs={4}>
                        <Controller
                            name="textInput1"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'This field is required' }}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    fullWidth
                                    placeholder="Citizen Name"
                                    error={!!errors.textInput1}
                                    helperText={errors.textInput1?.message}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Controller
                            name="select1"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'This field is required' }}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    displayEmpty
                                    fullWidth
                                    error={!!errors.select1}
                                    renderValue={(value) =>
                                        value ? (
                                            <>{value}</>
                                        ) : (
                                            <em>Please Select value</em>
                                        )
                                    }
                                >
                                    <MenuItem value="option1">
                                        Option 1
                                    </MenuItem>
                                    <MenuItem value="option2">
                                        Option 2
                                    </MenuItem>
                                    {/* Add more options here */}
                                </Select>
                            )}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Controller
                            name="select2"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'This field is required' }}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    placeholder="Select some value"
                                    displayEmpty
                                    fullWidth
                                    error={!!errors.select2}
                                    renderValue={(value) =>
                                        value ? (
                                            <>{value}</>
                                        ) : (
                                            <em>Please Select value</em>
                                        )
                                    }
                                >
                                    <MenuItem value="option1">
                                        Option 1
                                    </MenuItem>
                                    <MenuItem value="option2">
                                        Option 2
                                    </MenuItem>
                                    {/* Add more options here */}
                                </Select>
                            )}
                        />
                    </Grid>

                    {/* Second row */}
                    <Grid item xs={12}>
                        <Controller
                            name="textInput2"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'This field is required' }}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="Address Line 1"
                                    fullWidth
                                    error={!!errors.textInput2}
                                    helperText={errors.textInput2?.message}
                                />
                            )}
                        />
                    </Grid>
                </Grid>
            </MainContainer>
            <MainContainer>
                <Grid container spacing={2} padding={'18px 23px'}>
                    <Grid item xs={12}>
                        <h6 className="text-white font-helvetica text-lg font-medium leading-10">
                            Description
                        </h6>
                    </Grid>
                    <Grid item xs={12}>
                        <p className="text-text-secondary font-jakartaSans text-xs leading-5 font-normal">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it
                            over 2000 years old. Richard McClintock, a Latin
                        </p>
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            name="textArea"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'This field is required' }}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="Description"
                                    fullWidth
                                    multiline
                                    rows={20}
                                    error={!!errors.textArea}
                                    helperText={errors.textArea?.message}
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Stack
                            direction={'row'}
                            justifyContent={'flex-end'}
                            spacing={2}
                        >
                            <Button
                                text="Cancel"
                                variant="outlined"
                                onClick={handleCancel}
                            />
                            <Button text="Submit" onClick={handleMySubmit} />
                        </Stack>
                    </Grid>
                </Grid>
            </MainContainer>
        </form>
    )
}

export default NewReport
