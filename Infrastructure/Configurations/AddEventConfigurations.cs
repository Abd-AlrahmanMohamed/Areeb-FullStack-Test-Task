namespace Infrastructure.Configurations
{
    public class AddEventConfigurations : IEntityTypeConfiguration<Event>

    {
        public void Configure(EntityTypeBuilder<Event> builder)
        {
            builder
                .Property(e => e.Name)
                .IsRequired()
                .HasMaxLength(50);

            builder
                .Property(e => e.Description)
                .IsRequired();
            builder
                .Property(e => e.Category)
                .IsRequired()
                .HasMaxLength(30);
            builder
                .Property(e => e.Venue)
                .IsRequired();
            builder
                .Property(e => e.Price)
                .IsRequired();
            builder
                .Property(e => e.ImageUrl)
                .IsRequired();

            builder
                .HasMany(e => e.Bookings)
                .WithOne(b => b.Event)
                .HasForeignKey(b => b.EventId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
