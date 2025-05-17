namespace Application.MediatorHandler.MediatorQuery.Events
{
    public class GetEventByIdQuery: IRequest<Event>
    {
        public string Id { get; set; }
        public GetEventByIdQuery(string id)
        {
            Id = id;
        }
    }
}
