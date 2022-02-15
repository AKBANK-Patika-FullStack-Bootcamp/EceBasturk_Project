using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Model
{
    public class Message
    {
        public int id { get; set; }
        public string content { get; set; }
        public string sender { get; set; }
        public string receiver { get; set; }
    }
}
