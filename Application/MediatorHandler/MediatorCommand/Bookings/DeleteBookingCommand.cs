namespace Application.MediatorHandler.MediatorCommand.Bookings
{
    public class DeleteBookingCommand: IRequest<Booking>
    {
        public string Id { get; set; }

        public DeleteBookingCommand(string id)
        {
            Id = id;
        }
    }
}
