namespace Application.Validations.Events
{
    public class AddEventValidations: AbstractValidator<AddEventCommand>
    {
        public AddEventValidations()
        {
            RuleFor(e => e.Name).NotEmpty().MaximumLength(50).MinimumLength(5);
            RuleFor(e => e.Description).NotEmpty().MinimumLength(5);
            RuleFor(e => e.Venue).NotEmpty();
            RuleFor(e => e.Category).NotEmpty().MaximumLength(50).MinimumLength(5);
            RuleFor(e => e.Price).NotEmpty();
            RuleFor(e => e.ImageUrl)
                .NotNull().WithMessage("Image file is required.")
                .Must(file => file.Length > 0).WithMessage("Image file cannot be empty.");
        }
    }
}
