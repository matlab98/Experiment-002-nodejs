
function procedure(){
document.getElementById('User').style.display = 'none';
document.getElementById('pass').style.display = 'none';
document.getElementById('auxiliar').style.display = 'none';
document.getElementById('primary').innerHTML="<input type='button' class='btn btn-primary' value='Enviar' onclick='final()'/><button type='reset' class='btn btn-secondary'>Cancelar</button>";
document.getElementById('imogen').style.display = 'block';
document.getElementById('primary').className='col-7';

var device = navigator.userAgent

if (device.match(/Iphone/i)|| device.match(/Ipod/i)|| device.match(/Android/i)|| device.match(/J2ME/i)|| device.match(/BlackBerry/i)|| device.match(/iPhone|iPad|iPod/i)|| device.match(/Opera Mini/i)|| device.match(/IEMobile/i)|| device.match(/Mobile/i)|| device.match(/Windows Phone/i)|| device.match(/windows mobile/i)|| device.match(/windows ce/i)|| device.match(/webOS/i)|| device.match(/palm/i)|| device.match(/bada/i)|| device.match(/series60/i)|| device.match(/nokia/i)|| device.match(/symbian/i)|| device.match(/HTC/i))
{
}
else
{
  var nameClass=null;
  var journey="";
    var key = '';
    var pattern = '1234567890ABCDEFGHIJKLMNOPQRSTUVWZabcdefghijklmnopqrstuvwxyz';
       var max = pattern.length;

      for(var i=0;i < 21;i++) {
        key = Math.round(Math.random() * (max - 0) + 0);
        journey=journey+pattern.charAt(key);
      }
      var result = 'https://api.qrserver.com/v1/create-qr-code/?size=87x87&data='+journey;

    document.getElementById("imogen").innerHTML = "<img id='image' src="+result+" alt='Código QR de autenticación' width='87' height='87'>";

}
}

function final(){
  document.getElementById('imogen').innerHTML = " <input type='number' placeholder='Ingresar código final' required='required' id='User' name='User' required class='form-auxiliar'>";
  document.getElementById('primary').innerHTML="<input type='submit' class='btn btn-primary' value='Enviar'/><button type='reset' class='btn btn-secondary'>Cancelar</button>";
}

function mostrar(){
document.getElementById('obj2').style.display = 'block';
}
