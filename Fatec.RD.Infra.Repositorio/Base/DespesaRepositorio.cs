using Dapper;
using Fatec.RD.Dominio.ViewModel;
using Fatec.RD.Infra.Repositorio.Contexto;

using System.Collections.Generic;
using System.Data;
using System.Linq;


namespace Fatec.RD.Infra.Repositorio.Base
{
    public sealed class DespesaRepositorio
    {
        readonly DapperContexto _db;
        readonly IDbConnection _connection;

        public DespesaRepositorio()
        {
            _db = new DapperContexto();
            _connection = _db.Connection;
        }

        public List<DespesaViewModel> Selecionar()
        {
            var sqlCommand = @"SELECT d.Id, td.Descricao as TipoDespesa, tp.Descricao as TipoPagamento, d.Data, d.Valor, d.Comentario
                                    FROM Despesa d
                                        INNER JOIN TipoPagamento tp ON d.IdTipoPagamento = tp.Id
                                        INNER JOIN TipoDespesa td ON d.IdTipoDespesa = td.Id";

            return _connection.Query<DespesaViewModel>(sqlCommand).ToList();
        }
    }
}
