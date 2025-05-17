namespace Application.Validations.Users
{
    public class AddToRoleValidations: AbstractValidator<AddRole>
    {
        public AddToRoleValidations()
        {
            RuleFor(a => a.UserId).NotNull();
            RuleFor(a => a.Role).NotEmpty().WithMessage("you should choose the role");
        }
    }
}
