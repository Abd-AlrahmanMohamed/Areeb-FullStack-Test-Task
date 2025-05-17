namespace Application.Extensions
{
    public static class MediatorHandlers
    {
        public static void RegisterHandlers(this IServiceCollection services)
        {
            // Registering Mediator Handlers for Event
            services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblyContaining<AddEventCommand>());
            services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblyContaining<DeleteEventCommand>());
            services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblyContaining<UpdateEventCommand>()); 
            services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblyContaining<GetEventByIdQuery>());
            services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblyContaining<GetAllEventsQuery>());

            // Registering Mediator Handlers for Booking
            services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblyContaining<AddBookingCommand>());
            services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblyContaining<DeleteBookingCommand>());
            services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblyContaining<GetAllBookingsQueryHandler>());
            services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblyContaining<GetAllBookingsToSpecificUserByUserIdQueryHandler>());



        }
    }
}
