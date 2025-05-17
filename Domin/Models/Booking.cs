namespace Domain.Models
{
    public class Booking
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public string UserId { get; set; }
        public ApplicationUser User { get; set; }

        public string EventId { get; set; }
        public  Event Event { get; set; }

        public DateTime BookingDate { get; set; } = DateTime.UtcNow;
    }

}
