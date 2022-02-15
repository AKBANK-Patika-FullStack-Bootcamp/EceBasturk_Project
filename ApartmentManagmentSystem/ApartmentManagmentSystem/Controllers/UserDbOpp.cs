using DAL.Model;
using EFLibCore;

namespace ApartmentManagmentSystem.Controllers
{
    public class UserDbOpp
    {
        public ApartmentContext _context = new ApartmentContext();
        Logger _logger = new Logger();

        public List<Due> GetUnpaidDue(int id)
        {
            return _context.Due.Where(d => d.ApartmentId == id && d.IsPaid == 0).ToList();

        }

        public List<Electricity> GetUnpaidElec(int id)
        {
            return _context.Electricity.Where(d => d.ApartmentId == id && d.IsPaid == 0).ToList();
        }

        public List<Water> GetUnpaidWater(int id)
        {
            return _context.Water.Where(d => d.ApartmentId == id && d.IsPaid == 0).ToList();

        }

        public List<Due> GetPaidDue(int id)
        {
            return _context.Due.Where(d => d.ApartmentId == id && d.IsPaid == 1).ToList();
        }
        public List<Electricity> GetPaidElec(int id)
        {
            return _context.Electricity.Where(d => d.ApartmentId == id && d.IsPaid == 1).ToList();
        }
        public List<Water> GetPaidWater(int id)
        {
            return _context.Water.Where(d => d.ApartmentId == id && d.IsPaid == 1).ToList();
        }

    }
}