using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Model
{
    public class User
    {
  

        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string IdentityNumber { get; set; }
        public string Mail { get; set; }
        public string TelephoneNumber { get; set; }

        public string CarPlate { get; set; } 

        public string Role { get; set; }

        
        
    }
}
