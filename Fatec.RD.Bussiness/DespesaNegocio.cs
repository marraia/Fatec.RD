using Fatec.RD.Dominio.ViewModel;
using Fatec.RD.Infra.Repositorio.Base;

using System.Collections.Generic;


namespace Fatec.RD.Bussiness
{
    public sealed class DespesaNegocio
    {
        DespesaRepositorio _despesaRepositorio;

        public DespesaNegocio()
        {
            _despesaRepositorio = new DespesaRepositorio();
        }

        /// <summary>
        /// Método que seleciona uma lista de despesas...
        /// </summary>
        /// <returns></returns>
        public List<DespesaViewModel> Selecionar()
        {
            return _despesaRepositorio.Selecionar();
        }
    }
}
