using DAL.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ApartmentManagmentSystem.Controllers
{
    [ApiController]
    [Route("[controllers]s")]
    public class AdminController : ControllerBase
    {
        Result result = new Result();
        DBOperations DbOpp = new DBOperations();

        #region Apartment
        [HttpPost("/ApartmentInfo")]
        public Result AddApartment([FromBody] Apartment _apartment)
        {
            DbOpp.AddApartment(_apartment);
            result.success = true;
            result.message = "Apartment Eklendi.";
            return result;
        }

        [HttpPut("/Apartmentpdate")]
        public Result UpdateApartment([FromBody] Apartment updatedUser, int id)
        {
            if (DbOpp.UpdateApartment(updatedUser, id))
            {
                result.success = true;
                result.message = "Apartman Güncellendi.";
            }
            else
            {
                result.success = false;
                result.message = "Apartman Güncellenemedi.";
            }
            return result;
        }

        [HttpDelete("/ApartmentDelete/{id}")]
        public Result DeleteApartment(int id)
        {
            if (DbOpp.DeleteApartment(id))
            {
                result.success = true;
                result.message = "Apartman Silindi.";
            }
            else
            {
                result.success = false;
                result.message = "Apartman Silinemedi";
            }
            return result;
        }
        [HttpGet("/GetApartment")]
        public Apartment GetApartment(int id)
        {
            return DbOpp.GetApartment(id);
        }

        [HttpGet("/GetApartments")]
        public List<Apartment> GetApartments()
        {
            return DbOpp.GetApartments();
        }
        #endregion

        #region User
        [HttpPost("/UserInfo")]
        public Result AddUser([FromBody] User _user)
        {
            if (DbOpp.FindUser(_user.IdentityNumber) is not null)
            {
                result.success = false;
                result.message = "User Eklenemedi.";
            }
            else
            {
                DbOpp.AddUser(_user);
                result.success = true;
                result.message = "User Eklendi.";
            }
            return result;
        }
        [HttpPut("/UserUpdate/{id}")]
        public Result UpdateUser(int id, [FromBody] User updatedUser)
        {
            if (DbOpp.UpdateUser(id, updatedUser))
            {
                result.success = true;
                result.message = "Kullanıcı Güncellendi.";
            }
            else
            {
                result.success = false;
                result.message = "Kullanıcı Güncellenemedi.";
            }
            return result;
        }

        [HttpDelete("/UserDelete/{id}")]
        public Result DeleteUser(int id)
        {
            if (DbOpp.DeleteUser(id))
            {
                result.success = true;
                result.message = "Kullanıcı Silindi.";
            }
            else
            {
                result.success = false;
                result.message = "Kullanıcı Silinemedi";
            }
            return result;
        }


        [HttpGet("/GetUsers")]
        public List<User> GetUsers()
        {
            return DbOpp.GetUsers();
        }

        #endregion

        #region Bills
        [HttpPost("/ElectricityBill")]
        public Result AddElectricity([FromBody] Electricity _electricity, int apartmentId)
        {
            Electricity _isExist = new Electricity();
            if (_electricity.ApartmentId == apartmentId && DbOpp.AddElectricity(_electricity, apartmentId))
            {
                result.success = true;
                result.message = "Elektrik Faturası Eklendi.";
            }
            else
            {
                result.success = false;
                result.message = "Elektrik Faturası Eklenemedi.";
            }
            return result;
        }

        [HttpPost("/WaterBill")]
        public Result AddWater([FromBody] Water _water, int apartmentId)
        {
            Water _isExist = new Water();
            if (_water.ApartmentId == apartmentId && DbOpp.AddWater(_water, apartmentId))
            {
                result.success = true;
                result.message = "Su Faturası Eklendi.";
            }
            else
            {
                result.success = false;
                result.message = "Su Faturası Eklenemedi.";
            }
            return result;
        }

        [HttpPost("/DueBill")]
        public Result AddDue([FromBody] Due _due, int apartmentId)
        {
            Due _isExist = new Due();
            if (_due.ApartmentId == apartmentId && DbOpp.AddDue(_due, apartmentId))
            {
                result.success = true;
                result.message = "Aidat Eklendi.";
            }
            else
            {
                result.success = false;
                result.message = "Aidat Eklenemedi.";
            }
            return result;
        }

        [HttpPut("/UpdateElec")]
        public void UpdateElec(int id, int statu)
        {
            DbOpp.UpdateElec(id, statu);
        }

        [HttpPut("/UpdateWater")]
        public void UpdateWater(int id, int statu)
        {
            DbOpp.UpdateWater(id, statu);
        }

        [HttpPut("/UpdateDue")]
        public void UpdateDue(int id, int statu)
        {
            DbOpp.UpdateDue(id, statu);
        }

        [HttpGet("/AptElectricBill")]
        public List<Electricity> GetElecList(int id)
        {
            return DbOpp.GetElec(id);
        }

        [HttpGet("/AptWaterBill")]
        public List<Water> GetWaterList(int id)
        {
            return DbOpp.GetWater(id);
        }
        [HttpGet("/AptDueBill")]
        public List<Due> GetDueList(int id)
        {
            return DbOpp.GetDue(id);
        }




        [HttpGet("/AptElectricBills")]
        public List<Electricity> GetElecList()
        {
            return DbOpp.GetElec();
        }

        [HttpGet("/AptWaterBills")]
        public List<Water> GetWaterList()
        {
            return DbOpp.GetWater();
        }
        [HttpGet("/AptDueBills")]
        public List<Due> GetDueList()
        {
            return DbOpp.GetDue();
        }

        [HttpGet("/TotalDue")]
        public double TotalDue()
        {
            return DbOpp.TotalDue();
        }

        [HttpGet("/TotalWater")]
        public double TotalWater()
        {
            return DbOpp.TotalWater();
        }

        [HttpGet("/TotalElectricity")]
        public double TotalElectricity()
        {
            return DbOpp.TotalElect();
        }
        #endregion

        #region JOIN
        [HttpGet("/Detail")]
        public List<DataDetail> Detail()
        {
            return DbOpp.InnerJoinExample();
        }
        #endregion

    }
}
