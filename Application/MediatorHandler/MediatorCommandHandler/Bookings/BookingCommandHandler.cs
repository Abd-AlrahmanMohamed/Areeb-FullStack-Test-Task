using Application.MediatorHandler.MediatorCommand.Bookings;
using Domain;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.MediatorHandler.MediatorCommandHandler.Bookings
{
    public class BookingCommandHandler : IRequestHandler<AddBookingCommand, Booking>,
        IRequestHandler<DeleteBookingCommand, Booking>
    {
        private readonly ILogger _logger;
        private readonly IMediator _mediator;
        private readonly IUnityOfWork _unityOfWork;
        private readonly IMapper _mapper;

        public BookingCommandHandler(IMediator mediator, IUnityOfWork unityOfWork, IMapper mapper)
        {
            _mediator = mediator;
            _unityOfWork = unityOfWork;
            _mapper = mapper;
        }
        public async Task<Booking> Handle(AddBookingCommand request, CancellationToken cancellationToken)
        {
        //    var user = await _unityOfWork.Repository<ApplicationUser>()
        //.GetWithIncludeAsync(u => u.Id == request.userId, u => u.Bookings);
        //    _logger.LogInformation("Handling booking for UserId: {UserId}", request.userId);

        //    if (user == null)
        //    {
        //        throw new ArgumentException("User not found");
        //    }

        //    var booking = _mapper.Map<Booking>(request);
        //    booking.UserId = request.userId;
        //    user.Bookings.Add(booking);
        //    await _unityOfWork.Repository<Booking>().AddAsync(booking);
        //    await _unityOfWork.Complete();
        //    return booking;
            var booking = _mapper.Map<Booking>(request);
            await _unityOfWork.Repository<Booking>().AddAsync(booking);
            await _unityOfWork.Complete();
            return booking;
        }

        public async Task<Booking> Handle(DeleteBookingCommand request, CancellationToken cancellationToken)
        {
            var find = await _unityOfWork.Repository<Booking>().GetByidAsync(request.Id);
            await _unityOfWork.Repository<Booking>().DeleteAsync(request.Id);
            await _unityOfWork.Complete();
            return find;
        }
    }
}
