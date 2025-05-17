namespace Application
{
    public static class ApplicationDependencies
    {
        public static IServiceCollection AddApplicationDependencie(this IServiceCollection services)
        {

            services.RegisterHandlers();

            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(MediatorRequest<,>));

            services.Validators();

            services.AddAutoMapper(Assembly.GetExecutingAssembly());

            return services;
        }
    }
}
