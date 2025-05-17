namespace Infrastructure.Configurations
{
    public class AddBookingConfigurations : IEntityTypeConfiguration<Booking>
    {
        public void Configure(EntityTypeBuilder<Booking> builder)
        {
            builder
        .Property(b => b.BookingDate)
        .HasDefaultValueSql("GETUTCDATE()");

            builder

                .HasOne(b => b.User)
                .WithMany(u => u.Bookings)
                .HasForeignKey(b => b.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            builder
                .HasOne(b => b.Event) 
                .WithMany(e => e.Bookings) 
                .HasForeignKey(b => b.EventId) 
                .OnDelete(DeleteBehavior.Cascade);  
        }
    }
}
