using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Dto
{
    public class BookingDto
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public string UserId { get; set; } = string.Empty;

        public string EventId { get; set; }= string.Empty;

        public DateTime BookingDate { get; set; } = DateTime.UtcNow;
    }
}
