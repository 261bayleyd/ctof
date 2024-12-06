function run(){
  let eoinput = document.getElementById("inputuser").value
  let far = eoinput*1.8+32 +" Farhenheit"
      console.log(far)
  document.getElementById("output").innerHTML=far
}