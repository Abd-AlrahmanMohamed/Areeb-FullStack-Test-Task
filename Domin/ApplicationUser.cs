
//using Microsoft.AspNet.Identity.EntityFramework;



namespace Domain
{
    public class ApplicationUser : IdentityUser
    {
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public  ICollection<Booking>? Bookings { get; set; } = new List<Booking>();

    }
}
