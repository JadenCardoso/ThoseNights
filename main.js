var VentDiv = document.getElementById("Vent");
var TasksDiv = document.getElementById("Tasks");
var MotionDiv = document.getElementById("Motion");
var EquipmentDiv = document.getElementById("Equipment");
var AdvertisingDiv = document.getElementById("Advertising");
var MaintenanceDiv = document.getElementById("Maintenance");
var SuppliesDiv = document.getElementById("Supplies");

document.getElementById("VentBtn").addEventListener("click",function()
{
    VentDiv.style.display="block";
    TasksDiv.style.display="none";
    MotionDiv.style.display="none";
    EquipmentDiv.style.display="none";
    AdvertisingDiv.style.display="none";
    MaintenanceDiv.style.display="none";
    SuppliesDiv.style.display="none";
});

document.getElementById("MotionBtn").addEventListener("click",function()
{
    MotionDiv.style.display="block";
    VentDiv.style.display="none";
    TasksDiv.style.display="none";
    EquipmentDiv.style.display="none";
    AdvertisingDiv.style.display="none";
    MaintenanceDiv.style.display="none";
    SuppliesDiv.style.display="none";
});

document.getElementById("TaskBtn").addEventListener("click",function()
{
    MotionDiv.style.display="none";
    VentDiv.style.display="none";
    TasksDiv.style.display="block";
    EquipmentDiv.style.display="none";
    AdvertisingDiv.style.display="none";
    MaintenanceDiv.style.display="none";
    SuppliesDiv.style.display="none";
});

document.getElementById("AdvertBtn").addEventListener("click",function()
{
    MotionDiv.style.display="none";
    VentDiv.style.display="none";
    TasksDiv.style.display="none";
    EquipmentDiv.style.display="none";
    AdvertisingDiv.style.display="block";
    MaintenanceDiv.style.display="none";
    SuppliesDiv.style.display="none";
});

document.getElementById("EquipBtn").addEventListener("click",function()
{
    MotionDiv.style.display="none";
    VentDiv.style.display="none";
    TasksDiv.style.display="none";
    EquipmentDiv.style.display="block";
    AdvertisingDiv.style.display="none";
    MaintenanceDiv.style.display="none";
    SuppliesDiv.style.display="none";
});

document.getElementById("MaintenanceBtn").addEventListener("click",function()
{
    MotionDiv.style.display="none";
    VentDiv.style.display="none";
    TasksDiv.style.display="none";
    EquipmentDiv.style.display="none";
    AdvertisingDiv.style.display="none";
    MaintenanceDiv.style.display="block";
    SuppliesDiv.style.display="none";
});

document.getElementById("SuppliesBtn").addEventListener("click",function()
{
    MotionDiv.style.display="none";
    VentDiv.style.display="none";
    TasksDiv.style.display="none";
    EquipmentDiv.style.display="none";
    AdvertisingDiv.style.display="none";
    MaintenanceDiv.style.display="none";
    SuppliesDiv.style.display="block";
});

document.getElementById("FanNoise").addEventListener("click",function()
{
    var audio = new Audio("Fan.mp3");
    audio.play();
});

document.getElementById("MotionNoiseBtn").addEventListener("click",function()
{
    var audio = new Audio("beep.mp3");
    audio.play();
    audio.play();
});

var Sound = new Audio("Vent.mp3");

Noise();

function Noise(){
    setTimeout(function(){
        Sound.play();
    },24);
    Noise();
}