using Application.Extensions;

namespace Application.MediatorHandler.MediatorCommandHandler.Events
{
    public class EventCommandHandler : IRequestHandler<AddEventCommand, Event>,
        IRequestHandler<UpdateEventCommand, Event>, IRequestHandler<DeleteEventCommand, Event>
    {
        private readonly IMediator _mediator;
        private readonly IUnityOfWork _unityOfWork;
        private readonly IMapper _mapper;
        public EventCommandHandler(IMediator mediator, IUnityOfWork unityOfWork, IMapper mapper)
        {
            _mediator = mediator;
            _unityOfWork = unityOfWork;
            _mapper = mapper;
        }
        public async Task<Event> Handle(AddEventCommand request, CancellationToken cancellationToken)
        {
            var eventMap = _mapper.Map<Event>(request);
            eventMap.ImageUrl = await ImageHandler.ImageConverterAsync(request.ImageUrl);
            await _unityOfWork.Repository<Event>().AddAsync(eventMap);
            await _unityOfWork.Complete();
            return eventMap;
        }

        public async Task<Event> Handle(UpdateEventCommand request, CancellationToken cancellationToken)
        {
            var find = await _unityOfWork.Repository<Event>().GetByidAsync(request.Id);
            var product = _mapper.Map(request, find);
            product.ImageUrl = await ImageHandler.ImageConverterAsync(request.ImageUrl);
            await _unityOfWork.Repository<Event>().UpdateAsync(find);
            await _unityOfWork.Complete();
            return find;
        }

        public async Task<Event> Handle(DeleteEventCommand request, CancellationToken cancellationToken)
        {
            var find = await _unityOfWork.Repository<Event>().GetByidAsync(request.Id);
            await _unityOfWork.Repository<Event>().DeleteAsync(request.Id);
            await _unityOfWork.Complete();
            return find;
        }
    }
}
