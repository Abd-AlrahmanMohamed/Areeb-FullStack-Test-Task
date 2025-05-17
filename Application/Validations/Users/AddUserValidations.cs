namespace Application.Validations.Users
{
    public class AddUserValidations: AbstractValidator<Registering>
    {
        public AddUserValidations()
        {
            RuleFor(r => r.FirstName).NotEmpty().WithMessage("the FirstName is required");
            RuleFor(r => r.LastName).NotEmpty().WithMessage("the LaststName is required");
            RuleFor(r => r.Username).NotEmpty().WithMessage("the username is required");
            RuleFor(r => r.Email).NotEmpty().WithMessage("the email is required");
            RuleFor(r => r.Password).NotNull().WithMessage("the password is required");
            RuleFor(r => r.Contact).NotNull().WithMessage("the number is required");
        }
    }
}
