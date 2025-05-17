namespace Domain.SignUp
{
    public class Registering
    {
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Username { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public int Contact { get; set; }
        public ICollection<Booking> Bookings { get; set; } = new List<Booking>();

    }
}
