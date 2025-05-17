namespace Application.MediatorHandler.MediatorQuery.Bookings
{
    public class GetAllBookingsToSpecificUserByUserIdQueryHandler: IRequest<IEnumerable<Booking>>
    {
        public string Id { get; set; }
        public GetAllBookingsToSpecificUserByUserIdQueryHandler(string id)
        {
            Id = id;
        }
    }
}
