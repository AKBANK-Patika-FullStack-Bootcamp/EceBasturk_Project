using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Model
{
    public class Water
    { 
        public int Id { get; set; }
        public string Month { get; set; }
        public int Year { get; set; }
        public double Amount { get; set; }
        public int IsPaid { get; set; }
        public int ApartmentId { get; set; }

    }
}
