using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Model
{
    public class DataDetail
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string IdentityNumber { get; set; }
        public string Mail { get; set; }
        public string TelephoneNumber { get; set; }

        public string CarPlate { get; set; } = string.Empty;

        public string Role { get; set; }

        public string? ApartmentBlock { get; set; }
        public int Status { get; set; }
        public string Type { get; set; }
        public int Floor { get; set; }
        public int ApartmentNumber { get; set; }

        //public string EMonth { get; set; }
        //public int EYear { get; set; }
        //public double EAmount { get; set; }
        //public int EIsPaid { get; set; }

        //public string DMonth { get; set; }
        //public int DYear { get; set; }
        //public double DAmount { get; set; }
        //public int DIsPaid { get; set; }

        //public string WMonth { get; set; }
        //public int WYear { get; set; }
        //public double WAmount { get; set; }
        //public int WIsPaid { get; set; }


    }
}
