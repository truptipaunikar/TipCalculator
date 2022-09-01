function calculate(){
let billamt = document.getElementById('bill-amt').value 
let rate = document.getElementById('rate').value 
document.getElementById('your-tip').innerHTML=(billamt*rate)/100
document.getElementById('your-amt').innerHTML=(billamt*rate)/100+ parseInt(billamt) 
}
function refresh(){
    window.location.reload('refresh')
}