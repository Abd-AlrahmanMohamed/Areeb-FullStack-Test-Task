namespace Application.Validations.Bookings
{
    public class AddBookingValidations: AbstractValidator<AddBookingCommand>
    {
        public AddBookingValidations()
        {
            RuleFor(e => e.userId).NotEmpty().WithMessage("Id must not be null");
            RuleFor(e => e.eventId).NotEmpty().WithMessage("Id must not be null");
        }
    }
}
