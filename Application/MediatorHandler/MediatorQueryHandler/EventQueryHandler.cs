namespace Application.MediatorHandler.MediatorQueryHandler
{
    public class EventQueryHandler : IRequestHandler<GetAllEventsQuery, IEnumerable<Event>>,
        IRequestHandler<GetEventByIdQuery, Event>
    {
        private readonly IUnityOfWork _unityOfWork;
        public EventQueryHandler(IUnityOfWork unityOfWork)
        {
            _unityOfWork = unityOfWork;
        }
        public async Task<IEnumerable<Event>> Handle(GetAllEventsQuery request, CancellationToken cancellationToken)
        {
            return await _unityOfWork.Repository<Event>().GetAllAsync();
        }

        public async Task<Event> Handle(GetEventByIdQuery request, CancellationToken cancellationToken)
        {
            return await _unityOfWork.Repository<Event>().GetByidAsync(request.Id);
        }
    }
}
