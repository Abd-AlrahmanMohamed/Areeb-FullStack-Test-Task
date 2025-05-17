namespace Application.MediatorHandler.MediatorCommand.Events
{
    public class DeleteEventCommand: IRequest<Event>
    {
        public string Id { get; set; }
        

        public DeleteEventCommand(string id)
        {
            Id = id;
        }
    }
}
