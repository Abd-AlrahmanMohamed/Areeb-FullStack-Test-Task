namespace Application.MediatorHandler.MediatorCommand.Bookings
{
    public class AddBookingCommand: IRequest<Booking>
    {
        public string userId { get; set; }
        public string eventId { get; set; }
        public DateTime BookingDate { get; set; } = DateTime.UtcNow;

        public AddBookingCommand(BookingDto dto)
        {
            userId = dto.UserId;
            eventId = dto.EventId;
            BookingDate = dto.BookingDate;
        }
    }
}
