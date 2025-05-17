namespace Application.Extensions
{
    public static class AddValidators
    {
        public static void Validators(this IServiceCollection services)
        {
            //Event
            services.AddValidatorsFromAssembly(typeof(AddEventCommand).Assembly);
            services.AddValidatorsFromAssembly(typeof(UpdateEventCommand).Assembly);
            services.AddValidatorsFromAssembly(typeof(DeleteEventCommand).Assembly);

            //Booking
            services.AddValidatorsFromAssembly(typeof(AddBookingCommand).Assembly);
            services.AddValidatorsFromAssembly(typeof(DeleteBookingCommand).Assembly);

            //User
            services.AddValidatorsFromAssembly(typeof(Registering).Assembly);
            services.AddValidatorsFromAssembly(typeof(AddRole).Assembly);
            services.AddValidatorsFromAssembly(typeof(SignIn).Assembly);



        }

    }
}
