/* 
 *  to change this license ,choose License Headers in Project Properties
 * to change the template file, choose tools | Templates
 * and open the Tempalte in the editor.
 */

var jpdbBaseURL = "http://api.login2explore.com:5577";
        var jpdbIRL = "/api/irl";
        var jpdbIML = "/api/iml";
        var empDBName = "EMP-DB";
        var empRelationName = "EmpData";
        var connToken = "90931312|-31949328369630748|90950490";
        $("#empid").focus();
        function saveRecNo2LS(jsonObj){
        var lvData = JSON.parse(jsonObj.data);
                localStorage.setItem("recno, lvdata.rec_no");
        }

function getEmpIdAs JsonObj(){
var empid = $("#empid").val();
        var jsonStr = {
        id: empid
        };
        return JSON.stringify(jsonStr);
        }
function fillData(jsonObj){
saveRecNo2LS(jsonObj);
        var data = JSON.parse(jsonObj.data).record;
        $("#empname").val(data.name);
        $("#empsal").val (data.sal);
        $("#hra").val (data.hra);
        $("#da").val (data.da);
        $("#deduct").val (data.deduction);
        }
function resetForm(){
$("#empid").val("");
        $("#empsal").val ("");
        $("#hra").val ("");
        $("#da").val ("");
        $("#deduct").val ("");
        $("#empid").prop("disabled", false);
        $("#save").prop("disabled", true);
        $("#change").prop("disabled", true);
        $("#reset").prop("disabled", true);
        $("#emmpid").focus();
        }
function validateData(){
var empid, empname, empsal, hra, da, deduct;
        empid = $("#empid").val();
        empname = $("#empname").val();
        empsal = $("#empsal").val();
        hra = $("#hra").val();
        da = $("#da").val();
        deduct = $("#deduct").val();
        if (empid === "") {
alert("Employee ID missing");
        $("#empid").focus();
        return "";
        }
if (empname === ""{
alert("Employee Name missing");
        $("#empname").focus();
        return "";
        }
if (empsal === ""){
alert("Employee salary is missing");
        $("#empsal").focus();
        return"";
        }
if (hra === ""){
alert("HRA is missing");
        $("#hra").focus();
        return"";
        }
if (da === ""){
alert("DA is missing");
        $("#da").focus();
        return"";
        }
if (deduct === ""){
alert("Deduction is missing");
        $("#deduct").focus();
        return"";
        }

var jsonStrObj = {
id: empid,
        name: empname,
        sal: empsal,
        hra: hra,
        da: da,
        deduction: deduct
        };
        return JSON.stringify(jsonStrObj);
        }

function getEmp(){
var empidjson = getEmpidjsonObj();
        var getRequest = createGet_by_KEYREquest(connToken, empDBNAMe, empRelationName, empidJsonObj);
        j Query.ajaxSetup({async:false});
        var resJsonObj = executeCommandAtGiveBaseUrl(getRequest, jpdbBAseURl, jpdbIRL);
        j Query.ajaxSetup({async:true});
        if (resJsonObj === 400){
$("#save").prop("disabled", false);
        $("#reset").prop("disabled", false);
        $("#empname").focus();
        } else if (resJsonObj === 200) {

$("#empid").prop("disabled", true);
        fillData(resJsonObj);
        $("#change").prop("disabled", false);
        $("#reset").prop("disabled", false);
        $("#empname").focus();
        }
}
function saveData(){
var jsonStrObj = validateData();
        if (jsonStrObj === ""){
return "";
        }
var putRequest(conn Token.jsonStrObj, empDBName, empRelationName);
        j Query.ajaxSetup({async: false});
        var resJsonObj = executeCommandAtGiveBaseUrl(putRequest, jpdbBAseURl, jpdbIML);
        j Query.ajaxSetup({async: true});
        resetForm();
        $("#empid").focus();
        }
function changeData(){
$("#change").prop("disabled", true);
        jsonchg = validateData();
        var updateRequest = createUPDATERecordRequest(conn Token, jsonChg, empDBName, empRelationName, localStorage.getItem("recno"));
        var resJsonObj = executeCommandAtGiveBaseUrl(updateRequest, jpdbBAseURl, jpdbIML);
        j Query.ajaxSetup({async: true});
        console.log(resJsonObj);
        resetForm();
        $("#empid").focus();
        }





