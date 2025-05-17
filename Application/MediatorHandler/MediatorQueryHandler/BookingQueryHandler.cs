using System.Linq.Expressions;

namespace Application.MediatorHandler.MediatorQueryHandler
{
    public class BookingQueryHandler : IRequestHandler<GetAllBookingsQueryHandler, IEnumerable<Booking>>,
        IRequestHandler<GetAllBookingsToSpecificUserByUserIdQueryHandler, IEnumerable<Booking>>
    {
        private readonly IUnityOfWork _unityOfWork;

        public BookingQueryHandler(IUnityOfWork unityOfWork)
        {
            _unityOfWork = unityOfWork;
        }

        public async Task<IEnumerable<Booking>> Handle(GetAllBookingsQueryHandler request, CancellationToken cancellationToken)
        {
            return await _unityOfWork.Repository<Booking>().GetAllAsync();
        }



        public async Task<IEnumerable<Booking>> Handle(GetAllBookingsToSpecificUserByUserIdQueryHandler request, CancellationToken cancellationToken)
        {
            var includes = new List<Expression<Func<Booking, object>>>
    {
        b => b.Event,  // Include the related Event entity
        b => b.User    // Include the related User entity
    };

            // Convert the List to an array
            var includesArray = includes.ToArray();

            // Fetch bookings for the specified user with the included relations
            return await _unityOfWork.Repository<Booking>()
                                     .FindAllAsync(b => b.UserId == request.Id, includesArray);
        }

    }
}
