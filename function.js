var a = 3



function getUser(id, name, email){
    var id = id
    var name = name
    var email = email

    console.log(`this users name ${name}`)
}
//getUser("AB1234", "Yair","y.m@gmail.com")

function sendBack(x){
    return x * 3
}
var b = sendBack(a)
document.querySelector