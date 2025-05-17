using Microsoft.AspNetCore.Authorization;

namespace Task.Api.Controllers.BookingController
{
    //[Route("api/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        private readonly IMediator _mediator;

        public BookingController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [Authorize(Roles = "User")]
        [HttpGet(Router.BookingRouter.GetBookingtById)]
        public async Task<IEnumerable<Booking>> GetByIdAsync(string id)
        {
            var find = new GetAllBookingsToSpecificUserByUserIdQueryHandler(id);
            return await _mediator.Send(find);
        }

        [Authorize(Roles = "Admin")]
        [HttpGet(Router.BookingRouter.GetAllBookings)]
        public async Task<IEnumerable<Booking>> GetAllAsync()
        {
            var getAll = new GetAllBookingsQueryHandler();
            return await _mediator.Send(getAll);

        }

        [Authorize(Roles = "User")]
        [HttpPost(Router.BookingRouter.AddBooking)]
        public async Task<Booking> AddAsync(BookingDto BookingDto)
        {
            var addBooking = new AddBookingCommand(BookingDto);
            return await _mediator.Send(addBooking);


        }

        [HttpDelete(Router.BookingRouter.DeleteBooking)]

        public async Task<Booking> DeleteAsync(string id)
        {
            var find = new DeleteBookingCommand(id);
            return await _mediator.Send(find);
        }
    }
}
