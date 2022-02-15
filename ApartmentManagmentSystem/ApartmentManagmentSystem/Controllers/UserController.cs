using DAL.Model;
using Microsoft.AspNetCore.Mvc;

namespace ApartmentManagmentSystem.Controllers
{
    [ApiController]
    [Route("[controllers]s")]
    public class UserController : ControllerBase
    {
        Result result = new Result();
        UserDbOpp dbOpp = new UserDbOpp();

        [HttpGet("/UnpaidDueBills/{id}")]
        public List<Due> DueBills(int id)
        {
            return dbOpp.GetUnpaidDue(id);
        }

        [HttpGet("/UnpaidElectricityBills/{id}")]
        public List<Electricity> ElectricityBills(int id)
        {
            return dbOpp.GetUnpaidElec(id);
        }

        [HttpGet("/UnpaidWaterBills/{id}")]
        public List<Water> WaterBills(int id)
        {
            return dbOpp.GetUnpaidWater(id);
        }

        [HttpGet("/PaidDueBills/{id}")]
        public List<Due> PaidDueBills(int id)
        {
            return dbOpp.GetPaidDue(id);
        }


        [HttpGet("/PaidElectricityBills/{id}")]
        public List<Electricity> PaidElecBills(int id)
        {
            return dbOpp.GetPaidElec(id);
        }

        [HttpGet("/PaidWaterBills/{id}")]
        public List<Water> PaidWaterBills(int id)
        {
            return dbOpp.GetPaidWater(id);
        }

    }
}
