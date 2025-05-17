using Microsoft.AspNetCore.Authorization;

namespace Task.Api.Controllers.EventsController
{
    //[Route("api/[controller]")]
    [ApiController]
    public class EventsController : ControllerBase
    {
        private readonly IMediator _mediator;

        public EventsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet(Router.EventRouter.GetEventById)]
        public async Task<Event> GetByIdAsync(string id)
        {
            var find = new GetEventByIdQuery(id);
            return await _mediator.Send(find);
        }

        [HttpGet(Router.EventRouter.GetAllEvents)]
        public async Task<IEnumerable<Event>> GetAllAsync()
        {
            var getAll = new GetAllEventsQuery();
            return await _mediator.Send(getAll);

        }

        [Authorize(Roles = "Admin")]
        [HttpPost(Router.EventRouter.AddEvent)]
        public async Task<Event> AddAsync(EventDto eventDto)
        {
            var addEvent = new AddEventCommand(eventDto);
            return await _mediator.Send(addEvent);


        }

        [Authorize(Roles = "Admin")]
        [HttpPut(Router.EventRouter.UpdateEvent)]
        public async Task<Event> UpdateAsync([FromForm] EventDto eventDto)
        {
            var updateEvent = new UpdateEventCommand(eventDto);
            return await _mediator.Send(updateEvent);
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete(Router.EventRouter.DeleteEvent)]

        public async Task<Event> DeleteAsync(string id)
        {
            var find = new DeleteEventCommand(id);
            return await _mediator.Send(find);
        }
    }
}
