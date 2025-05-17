namespace Application.Mapping.Bookings
{
    public class AddBookingMapping: Profile
    {
        public AddBookingMapping()
        {
            CreateMap<AddBookingCommand, Booking>()
             .ForMember(dest => dest.UserId, opt => opt.MapFrom(src => src.userId))
            .ForMember(dest => dest.EventId, opt => opt.MapFrom(src => src.eventId))
            .ForMember(dest => dest.BookingDate, opt => opt.MapFrom(src => src.BookingDate));
        }
    }
}
