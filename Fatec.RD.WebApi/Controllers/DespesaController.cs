using Fatec.RD.Bussiness;
using Swashbuckle.Swagger.Annotations;
using System.Net;
using System.Web.Http;

namespace Fatec.RD.WebApi.Controllers
{
    /// <summary>
    /// 
    /// </summary>
    [RoutePrefix("api/Despesa")]
    public class DespesaController : ApiController
    {
        DespesaNegocio _appDespesa;

        /// <summary>
        /// 
        /// </summary>
        public DespesaController()
        {
            _appDespesa = new DespesaNegocio();
        }

        /// <summary>
        /// Método que obtem uma lista de despesa....
        /// </summary>
        /// <returns>Lista de Despesa</returns>
        /// <remarks>Obtem lista de depesa</remarks>
        /// <response code="200">Ok</response>
        /// <response code="400">BadRequest</response>
        /// <response code="500">InternalServerError</response>
        [SwaggerResponse(HttpStatusCode.OK)]
        [SwaggerResponse(HttpStatusCode.BadRequest, "BadRequest")]
        [SwaggerResponse(HttpStatusCode.InternalServerError, "InternalServerError")]
        [HttpGet]
        public IHttpActionResult Get()
        {
            return Ok(_appDespesa.Selecionar());
        }
    }
}
