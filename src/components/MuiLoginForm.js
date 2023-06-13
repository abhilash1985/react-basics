import { TextField, Button, Stack } from "@mui/material";
import { Container } from "@mui/system";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools"

const MuiLoginForm = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // Destructure form
  const { register, handleSubmit, formState, control } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={2} width={400}>
          <TextField
            label="Email"
            type="email"
            {...register("email", {
              required: "Email is required",
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="Password"
            type="password"
            {...register("password", {
              required: "Password is required",
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button type="submit" variant="contained">
            Login
          </Button>
        </Stack>
      </form>
      <DevTool control={control} />
    </Container>
  );
};

export default MuiLoginForm;
