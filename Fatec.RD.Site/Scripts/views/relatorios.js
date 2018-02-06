/*********** Declarando variáveis para facilitar ***************/
var api = "http://localhost:63649/api/Relatorio/";
var formulario = $("#form-relatorios");
var body = $("#modal-generic");
var body = $("#modal-relatorio");
var bodyDespesa = $("#modal-despesa-relatorio");
var modalFooter = $("#modal-relatorio .modal-footer");
var titleModal = $("#modal-title");
var botaoSalvar = $("#salvar-relatorio");
var botaoSalvarDespesaRelatorio = $("#salvarDespesaRelatorio");
var tabela = $("#tabela-relatorios");

var tipoRelatorio = $("#tipoRelatorio");
var descricao = $("#descricao");
var comentario = $("#comentario");
var dataVisualizacao = $("#data-visualizacao");
var data = $("#data");

var date = new Date();

var elemento = '<button type="button" class="btn btn-info left" id="btn-add-despesa" onclick="adicionarDespesaRelatorio()">Adicionar Despesa</button>';

//var t = tabela.mDatatable({
//    translate: {
//        records: {
//            noRecords: "Nenhum resultado encontrado.",
//            processing: "Processando..."
//        },
//        toolbar: {
//            pagination: {
//                items: {
//                    default: {
//                        first: "Primeira",
//                        prev: "Anterior",
//                        next: "Próxima",
//                        last: "Última",
//                        more: "Mais",
//                        input: "Número da página",
//                        select: "Selecionar tamanho da página"
//                    },
//                    info: 'Exibindo' + ' {{start}} - {{end}} ' + 'de' + ' {{total}} ' + 'resultados'
//                },
//            }
//        }
//    },
//    data: {
//        type: "remote",
//        source: {
//            read: {
//                method: "GET",
//                url: api,
//                map: function (t) {
//                    var e = t;
//                    return void 0 !== t.data && (e = t.data), e
//                }
//            }
//        },
//        pageSize: 10,
//        serverPaging: !0,
//        serverFiltering: !0,
//        serverSorting: !0
//    },
//    layout: {
//        theme: "default",
//        class: "",
//        scroll: !1,
//        footer: !1
//    },
//    sortable: !0,
//    pagination: !0,
//    toolbar: {
//        items: {
//            pagination: {
//                pageSizeSelect: [10, 20, 30, 50, 100]
//            }
//        }
//    },
//    search: {
//        input: $("#generalSearch")
//    },
//    columns: [
//        {
//            field: "DataCriacao",
//            title: "Data",
//            width: 100,
//            selector: !1,
//            textAlign: "center",
//        },
//        {
//            field: "Descricao",
//            title: "Descrição",
//            filterable: true,
//        },
//        {
//            field: "TipoRelatorio",
//            title: "Tipo Relatório",
//        },
//        {
//            field: "Comentario",
//            title: "Comentario",
//            filterable: true,
//        },
//        {
//            field: "Acoes",
//            title: "Ações",
//            width: 50,
//            sortable: false,
//            overflow: "visible",
//            template: function (t, e, a) {
//                return '\
//                            <div class="dropdown">\
//                                <a href="#" class="btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="dropdown">\
//                                    <i class="la la-ellipsis-h"></i>\
//                                </a>\
//                                <div class="dropdown-menu dropdown-menu-right">\
//                                    <a class="dropdown-item" href="#" onclick="abrirModalAlterar(' + t.Id + ')">\
//                                        <i class="la la-edit"></i> Editar\
//                                    </a>\
//                                    <a class="dropdown-item" href="#" onclick="abrirModalExcluir('+ t.Id + ')">\
//                                        <i class="la la-leaf"></i> Excluir\
//                                    </a>\
//                                </div>\
//                            </div>';
//            }
//        }]
//}),
//   e = t.getDataSourceQuery();
////$("#m_form_status").on("change", function () {
////    var e = t.getDataSourceQuery();
////    e.Status = $(this).val().toLowerCase(),
////    t.setDataSourceQuery(e),
////    t.load()
////}).val(void 0 !== e.Status ? e.Status : ""),
////$("#m_form_type").on("change", function () {
////    var e = t.getDataSourceQuery();
////    e.Type = $(this).val().toLowerCase(),
////    t.setDataSourceQuery(e),
////    t.load()
////}).val(void 0 !== e.Type ? e.Type : ""),
////$("#m_form_status, #m_form_type").selectpicker();
/***************************************************************/


/************* Utilizando componentes em campos ****************/
$(".selecpicker").selectpicker();
/***************************************************************/

/************* Funções disparadas nos cliques ******************/
function novoRelatorio() {
    dataVisualizacao.val(date.toLocaleDateString());
    data.val(date.toJSON());
    formValidation();
    titleModal.html("Adicionar Relatório");
    body.modal('show');
}

function fechar() {
    formulario.validate().destroy();
    $("#btn-add-despesa").remove();
    botaoSalvar.removeAttr("disabled");
}

function adicionarDespesaRelatorio() {
    body.modal('hide');
    bodyDespesa.modal('show');
}

function SalvarDespesaRelatorio() {
    console.log(tRelatorioDespesa.getRecord('#'))
    console.log(tRelatorioDespesa.getRecord('Id'));
}
/***************************************************************/

/************** Funções com requisições para a API *************/
function inserir(relatorio) {
    $.ajax({
        type: 'POST',
        url: '',
        data: relatorio,
        success: function () {
            modalFooter.append(elemento);
            botaoSalvar.attr("disabled", true);
            alert("Inserido com sucesso!");
        },
        error: function (error) {
            console.log(error);
        }
    })
}

function alterar(id, relatorio) {
    $.ajax({
        type: 'PUT',
        url: api + '/' + id,
        data: relatorio,
        success: function () {
            alert("Alterado com sucesso!");
        },
        error: function (error) {
            console.log(error);
        }
    })
}

function excluir(id) {
    $.ajax({
        type: 'DELETE',
        url: api + '/' + id,
        success: function () {
            alert("Deletado com sucesso!");
        },
        error: function (error) {
            console.log(error);
        }
    })
}

function selecionarPorId(id) {
    $.ajax({
        type: 'GET',
        url: api + '/' + id,
        success: function (relatorio) {
            console.log(relatorio);
        },
        error: function (error) {
            console.log(error);
        }
    })
}
/***************************************************************/

/*********************** Funções internas **********************/
function salvarRelatorio() {
    var id = $(this).attr("data-id");
    var relatorio = formulario.serialize();

    if (id != undefined)
        alterar(id, relatorio);
    else
        inserir(relatorio);
}

function preencherCampos(relatorio) {
    tipoRelatorio.val();
    descricao.val();
    comentario.val();
    dataCriacao.val();
}

function limparCampos() {
    formulario.each(function () {
        this.reset();
    });

    botaoSalvar.removeAttr('data-id');
}

/***************************************************************/

/************************* Validações **************************/
function formValidation() {
    formulario.validate({
        errorClass: "errorClass",
        rules: {
            tipoDespesa: { required: true },
            data: { required: true },
            tipoPagamento: { required: true },
            valor: { required: true }
        },
        messages: {
            tipoDespesa: { required: "Campo obrigatório." },
            data: { required: "Campo obrigatório." },
            tipoPagamento: { required: "Campo obrigatório." },
            valor: { required: "Campo obrigatório." /*, minlength: "Campo deve possuir no mínimo {0} caracteres", maxlength: "Campo deve possuir no máximo {0} caracteres"*/ }
        },
        submitHandler: function (form) {
            salvarRelatorio();
        }
    });
}

/***************** RelatórioDespesa Vinculada *****************/
var tabelaRelatorioDespesaAdicionada = $("#tabela-relatoriosDespesaAdicionada");

function listarTabelaRelatorioDespesaAdicionada() {
}
/***************************************************************/

/*********************** RelatórioDespesa Desvinculada **********************/
var tabelaRelatorioDespesa = $("#tabela-relatoriosDespesa");
var tRelatorioDespesa = tabelaRelatorioDespesa.mDatatable({
    translate: {
        records: {
            noRecords: "Nenhum resultado encontrado.",
            processing: "Processando..."
        },
        toolbar: {
            pagination: {
                items: {
                    default: {
                        first: "Primeira",
                        prev: "Anterior",
                        next: "Próxima",
                        last: "Última",
                        more: "Mais",
                        input: "Número da página",
                        select: "Selecionar tamanho da página"
                    },
                    info: 'Exibindo' + ' {{start}} - {{end}} ' + 'de' + ' {{total}} ' + 'resultados'
                },
            }
        }
    },
    data: {
        type: "remote",
        source: {
            read: {
                method: "GET",
                url: api + "Despesas",
                map: function (t) {
                    var e = t;
                    return void 0 !== t.data && (e = t.data), e
                }
            }
        },
        pageSize: 10,
        serverPaging: !0,
        serverFiltering: !0,
        serverSorting: !0
    },
    layout: {
        theme: "default",
        class: "",
        scroll: !1,
        footer: !1
    },
    sortable: !0,
    pagination: !0,
    toolbar: {
        items: {
            pagination: {
                pageSizeSelect: [10, 20, 30, 50, 100]
            }
        }
    },
    search: {
        input: $("#generalSearch")
    },
    columns: [
        {

            field:"Id",
            title:"#",
            width:50,
            sortable:!1,
            textAlign:"center",
            selector:{class:"m-checkbox--solid m-checkbox--brand"}
        },
        {
            field: "Data",
            title: "Data",
        },
        {
            field: "Valor",
            title: "Valor",
        },
        {
            field: "Comentario",
            title: "Comentario",
        }],
    extensions: { checkbox: { vars: { selectedAllRows: 'selectedAllRows', requestIds: 'requestIds', rowIds: 'meta.Id', }, }, }

});
/***************************************************************/