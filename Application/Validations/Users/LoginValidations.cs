namespace Application.Validations.Users
{
    public class LoginValidations: AbstractValidator<SignIn>
    {
        public LoginValidations() 
        {
            RuleFor(r => r.Email).NotEmpty().WithMessage("the email is required");
            RuleFor(r => r.Password).NotNull().WithMessage("the password is required");
        }
    }
}
