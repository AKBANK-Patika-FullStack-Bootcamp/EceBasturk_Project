using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Model
{
    public class Apartment
    {
        public int Id { get; set; }
        public string? ApartmentBlock { get; set; }
        public int Status { get; set; }
        public string Type { get; set; }
        public int Floor {get; set; }
        public int ApartmentNumber { get; set; }
        public int UserId { get; set; }

    }
}
