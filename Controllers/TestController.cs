using Microsoft.AspNetCore.Mvc;

namespace digital_ronin.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Backend Connected Successfully!");
        }
    }
}