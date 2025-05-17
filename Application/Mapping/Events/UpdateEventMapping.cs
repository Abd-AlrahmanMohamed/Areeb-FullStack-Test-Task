using Application.MediatorHandler.MediatorCommand.Events;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Mapping.Events
{
    public class UpdateEventMapping: Profile
    {
        public UpdateEventMapping()
        {
            CreateMap<UpdateEventCommand, Event>()
                              .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
                              .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Name))
                              .ForMember(dest => dest.Description, opt => opt.MapFrom(src => src.Description))
                              .ForMember(dest => dest.Category, opt => opt.MapFrom(src => src.Category))
                              .ForMember(dest => dest.Date, opt => opt.MapFrom(src => src.Date))
                              .ForMember(dest => dest.Venue, opt => opt.MapFrom(src => src.Venue))
                              .ForMember(dest => dest.Price, opt => opt.MapFrom(src => src.Price))
                              .ForMember(dest => dest.ImageUrl, opt => opt.Ignore());

        }
    }
}
