using DAL.Model;
using EFLibCore;
using Microsoft.EntityFrameworkCore.SqlServer;
using System.Linq;

namespace ApartmentManagmentSystem.Controllers
{
    public class DBOperations
    {
        public ApartmentContext _context = new ApartmentContext();
        Logger _logger = new Logger();

        #region Apartment
        public void AddApartment(Apartment _apartment)
        {
            try
            {
                _context.Apartment.Add(_apartment);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                _logger.createLog("ADD APARTMENT ERROR " + ex.Message);
            }
        }

        public bool UpdateApartment(Apartment apt, int id)
        {
            var apartment = _context.Apartment.FirstOrDefault(a => a.Id == id);
            if (apartment is not null)
            {
                if (apt.ApartmentBlock != "string") apartment.ApartmentBlock = apt.ApartmentBlock;
                apartment.Status= apt.Status != default ? apt.Status : apartment.Status;
                if (apt.Type != "string") apt.Type = apt.Type;
                apartment.Floor = apt.Floor != default ? apt.Floor : apartment.Floor;
                apartment.ApartmentNumber = apt.ApartmentNumber != default ? apt.ApartmentNumber : apartment.ApartmentNumber;
                apartment.UserId = apt.UserId != default ? apt.UserId : apartment.UserId;

                _context.SaveChanges();
                return true;
            }
            else return false;
        }

        public bool DeleteApartment(int id)
        {
            try
            {
                _context.Apartment.Remove(GetApartment(id));
                _context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                _logger.createLog("DELETE APARTMENT ERROR. " + ex.Message);
                return false;
            }
        }

        public Apartment GetApartment(int id)
        {
            return _context.Apartment.FirstOrDefault(x =>x.Id == id);
        }

        public List<Apartment> GetApartments()
        {
            return _context.Apartment.ToList();
        }
        #endregion

        #region User
        public void AddUser(User _user)
        {
            try
            {
                _context.User.Add(_user);
                _context.SaveChanges();

            }
            catch (Exception ex)
            {
                _logger.createLog("ADD USER ERROR " + ex.Message);
            }

        }

        public User FindUser(string IdentityNumber= "")
        {
            if(!string.IsNullOrEmpty(IdentityNumber))
            {
                return _context.User.FirstOrDefault(x => x.IdentityNumber == IdentityNumber);   
            }
            else return null;
        }

        public bool UpdateUser(int id, User updatedUser)
        {
            var user = _context.User.FirstOrDefault(u => u.Id == id);
            if(user is not null)
            {
                if (updatedUser.Name != "string") user.Name = updatedUser.Name;
                if (updatedUser.Surname != "string") user.Surname = updatedUser.Surname;
                if (updatedUser.IdentityNumber != "string") user.IdentityNumber = updatedUser.IdentityNumber;
                if (updatedUser.Mail != "string") user.Mail = updatedUser.Mail;
                if (updatedUser.TelephoneNumber != "string") user.TelephoneNumber = updatedUser.TelephoneNumber;
                if (updatedUser.CarPlate != "string") user.CarPlate = updatedUser.CarPlate;
                if (updatedUser.Role != "string") user.Role = updatedUser.Role;
                _context.SaveChanges();
                return true;
            }
            else return false;
        }
        public User GetUser(int id)
        {
            return _context.User.FirstOrDefault(user => user.Id == id);
        }
        public bool DeleteUser(int id)
        {
            try
            {
                _context.User.Remove(GetUser(id));
                _context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                _logger.createLog("DELETE USER ERROR. " + ex.Message);
                return false;
            } 
        }

        public List<User> GetUsers()
        {
            return _context.User.ToList();
        }
        #endregion

        #region BILL
        public bool AddElectricity(Electricity _electricity, int apartmentId)
        {
            try
            {
                _context.Electricity.Add(_electricity);
                _context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                _logger.createLog("ADD ELECTRICITY BILL ERROR " + ex.Message);
                return false;            }
        }

        public bool AddWater(Water _water, int apartmentId)
        {
            try
            {
                _context.Water.Add(_water);
                _context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                _logger.createLog("ADD WATER BILL ERROR " + ex.Message);
                return false;
            }
        }
        public bool AddDue(Due _due, int apartmentId)
        {
            try
            {
                _context.Due.Add(_due);
                _context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                _logger.createLog("ADD DUE ERROR " + ex.Message);
                return false;
            }
        }

        public bool UpdateElec(int id,int statu)
        {
            var bill = _context.Electricity.FirstOrDefault(u => u.Id == id);
            
            if (bill is not null)
            {
                bill.IsPaid = statu;
                _context.SaveChanges();
                return true;
            }
            else return false;
        }

        public bool UpdateWater(int id, int statu)
        {
            var bill = _context.Water.FirstOrDefault(u => u.Id == id);

            if (bill is not null)
            {
                bill.IsPaid = statu;
                _context.SaveChanges();
                return true;
            }
            else return false;
        }
        public bool UpdateDue(int id, int statu)
        {
            var bill = _context.Due.FirstOrDefault(u => u.Id == id);

            if (bill is not null)
            {
                bill.IsPaid = statu;
                _context.SaveChanges();
                return true;
            }
            else return false;
        }

        public List<Due> GetDue(int id)
        {
            return _context.Due.Where(d => d.ApartmentId == id).ToList();

        }

        public List<Electricity> GetElec(int id)
        {
            return _context.Electricity.Where(d => d.ApartmentId == id).ToList();

        }

        public List<Water> GetWater(int id)
        {
            return _context.Water.Where(d => d.ApartmentId == id).ToList();

        }

        public List<Due> GetDue()
        {
            return _context.Due.ToList();

        }

        public List<Electricity> GetElec()
        {
            return _context.Electricity.ToList();

        }

        public List<Water> GetWater()
        {
            return _context.Water.ToList();

        }

        #endregion

        #region JOIN
        public List<DataDetail> InnerJoinExample()
        {
            
            List<User> user = _context.User.ToList();
            List<Apartment> apartment = _context.Apartment.ToList();
            //List<Electricity> elec = _context.Electricity.ToList();
            //List<Due> due = _context.Due.ToList();
            //List<Water> water = _context.Water.ToList();

               var detail = (from u in user
                                                          join a in apartment on u.Id equals a.UserId
                                                          //join e in elec on a.Id equals e.ApartmentId
                                                          //join d in due on a.Id equals d.ApartmentId
                                                          //join w in water on a.Id equals w.ApartmentId
                                                          select new DataDetail
                                                          {
                                                              Id = u.Id,
                                                              Name = u.Name,
                                                              Surname = u.Surname,
                                                              IdentityNumber = u.IdentityNumber,
                                                              Mail = u.Mail,
                                                              TelephoneNumber = u.TelephoneNumber,
                                                              CarPlate = u.CarPlate,
                                                              Role = u.Role,
                                                              ApartmentBlock = a.ApartmentBlock,
                                                              Status = a.Status,
                                                              Type = a.Type,
                                                              Floor = a.Floor,
                                                              ApartmentNumber = a.ApartmentNumber,
                                                              //EMonth = e.Month,
                                                              //EYear = e.Year,
                                                              //EAmount = e.Amount,
                                                              //EIsPaid = e.IsPaid,
                                                          
                                                              //DMonth = d.Month,
                                                              //DYear = d.Year,
                                                              //DAmount = d.Amount,
                                                              //DIsPaid = d.IsPaid,

                                                              //WMonth = w.Month,
                                                              //WYear = w.Year,
                                                              //WAmount = w.Amount,
                                                              //WIsPaid = w.IsPaid,

                                                          });

            List<DataDetail> data = detail.ToList();
            return data;
                                 
            
   
        }
        #endregion


        #region TOKEN FONKSİYONLARI

        public void CreateLogin(APIAuthority loginUser)
        {
            try
            {
                _context.APIAuthority.Add(loginUser);
                _context.SaveChanges(); 
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
           
        }

        public APIAuthority GetLogin(APIAuthority loginUser)
        {
            APIAuthority? user = new APIAuthority();
            if (!string.IsNullOrEmpty(loginUser.EMail) && !string.IsNullOrEmpty(loginUser.Password))
            {
                user = _context.APIAuthority.FirstOrDefault(m => m.EMail== loginUser.EMail && m.Password == loginUser.Password);
            }

            return user;
        }
        #endregion

        public double TotalDue()
        {
            double total = 0;
            List<Due> bills = _context.Due.Where(b => b.IsPaid == 0).ToList();
            foreach (Due due in bills)
            {
                total += due.Amount;
            }
            return total;
        }

        public double TotalWater()
        {
            double total = 0;
            List<Water> bills = _context.Water.Where(b => b.IsPaid == 0).ToList();
            foreach (Water water in bills)
            {
                total += water.Amount;
            }
            return total;
        }

        public double TotalElect()
        {
            double total = 0;
            List<Electricity> bills = _context.Electricity.Where(b => b.IsPaid == 0).ToList();
            foreach (Electricity elec in bills)
            {
                total += elec.Amount;
            }
            return total;
        }
    }
}
