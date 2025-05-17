namespace Application.MediatorHandler.MediatorCommand.Events
{
    public class UpdateEventCommand: IRequest<Event>
    {
        public string Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public DateTime Date { get; set; }
        public string Venue { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public IFormFile ImageUrl { get; set; }

        public UpdateEventCommand(EventDto dto)
        {
            Id = dto.Id;
            Name = dto.Name;
            Description = dto.Description;
            Category = dto.Category;
            Date = dto.Date;
            Venue = dto.Venue;
            Price = dto.Price;
            ImageUrl = dto.ImageUrl;
        }
    }
}
