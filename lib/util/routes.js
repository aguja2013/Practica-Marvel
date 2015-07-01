var $ = window.jQuery
var page = window.page



var homeTemplate = ` <section class="Layout">
      <section class="Layout-antagonist"> 
        <div class="Card">		
          <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">
          <div class="Card-description">Wolverine es muy poderoso</div>
          <div class="Card-attack">500puntos de ataque</div>
        </div>
        <div class="Card">		
          <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">
          <div class="Card-description">Wolverine es muy poderoso</div>
          <div class="Card-attack">500puntos de ataque</div>
        </div>
        <div class="Card">		
          <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">
          <div class="Card-description">Wolverine es muy poderoso</div>
          <div class="Card-attack">500puntos de ataque</div>
        </div>
        <div class="Card">		
          <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">
          <div class="Card-description">Wolverine es muy poderoso</div>
          <div class="Card-attack">500puntos de ataque</div>
        </div>
        <div class="Card">		
          <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">
          <div class="Card-description">Wolverine es muy poderoso</div>
          <div class="Card-attack">500puntos de ataque</div>
        </div>
      </section>
      <section class="Layout-main">
        <div class="Layout-status">
          <div class="Status">
            <h3 class="Status-player">Aguja</h3>
            <p class="Status-points">10000</p>
          </div>
          <div class="Status">
            <h3 class="Status-player">Andre</h3>
            <p class="Status-points">10000</p>
          </div>
        </div>
        <div class="Layout-battle"> 
          <div class="Battle">
            <div class="Battle-antagonist">
              <div class="Card">		
                <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">
                <div class="Card-description">Wolverine es muy poderoso</div>
                <div class="Card-attack">500puntos de ataque</div>
              </div>
              <div class="Card">		
                <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">
                <div class="Card-description">Wolverine es muy poderoso</div>
                <div class="Card-attack">500puntos de ataque</div>
              </div>
              <div class="Card">		
                <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">
                <div class="Card-description">Wolverine es muy poderoso</div>
                <div class="Card-attack">500puntos de ataque</div>
              </div>
              <div class="Card">		
                <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">
                <div class="Card-description">Wolverine es muy poderoso</div>
                <div class="Card-attack">500puntos de ataque</div>
              </div>
              <div class="Card">		
                <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">
                <div class="Card-description">Wolverine es muy poderoso</div>
                <div class="Card-attack">500puntos de ataque</div>
              </div>
            </div>
            <div class="Battle-player">
              <div class="Card">		
                <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">
                <div class="Card-description">Wolverine es muy poderoso</div>
                <div class="Card-attack">500puntos de ataque</div>
              </div>
              <div class="Card">		
                <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">
                <div class="Card-description">Wolverine es muy poderoso</div>
                <div class="Card-attack">500puntos de ataque</div>
              </div>
              <div class="Card">		
                <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">
                <div class="Card-description">Wolverine es muy poderoso</div>
                <div class="Card-attack">500puntos de ataque</div>
              </div>
              <div class="Card">		
                <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">
                <div class="Card-description">Wolverine es muy poderoso</div>
                <div class="Card-attack">500puntos de ataque</div>
              </div>
              <div class="Card">		
                <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">
                <div class="Card-description">Wolverine es muy poderoso</div>
                <div class="Card-attack">500puntos de ataque</div>
              </div>
            </div>
          </div>
        </div>
        <div class="Layout-phases"> 
          <div class="Phases">
            <p>OMG que ataque fuerte, le quitaste 300 puntos</p>
          </div>
        </div>
      </section>
      <section class="Layout-player"> 
        <div class="Card">		
          <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">
          <div class="Card-description">Wolverine es muy poderoso</div>
          <div class="Card-attack">500puntos de ataque</div>
        </div>
        <div class="Card">		
          <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">
          <div class="Card-description">Wolverine es muy poderoso</div>
          <div class="Card-attack">500puntos de ataque</div>
        </div>
        <div class="Card">		
          <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">
          <div class="Card-description">Wolverine es muy poderoso</div>
          <div class="Card-attack">500puntos de ataque</div>
        </div>
        <div class="Card">		
          <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">
          <div class="Card-description">Wolverine es muy poderoso</div>
          <div class="Card-attack">500puntos de ataque</div>
        </div>
        <div class="Card">		
          <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">
          <div class="Card-description">Wolverine es muy poderoso</div>
          <div class="Card-attack">500puntos de ataque</div>
        </div>
      </section>
    </section> ` 

var signinTemplate = ` <label>Ingresa tu nombre</label>
    <input type="text" id="firstName" name="firstName" tabindex="1" placeholder="aguja, agil" class="Signin-name-input"/>
    <button tabindex="2" class="Signin-button">Ingresar</button> ` 
//page('ruta destino', lo que quiero que pase)

// page('/', function() {
// 	console.log('Estoy navegando al home')
// })
// El código anterior se puede mejorar:
page('/', restrict, home)
page('/signin', signin)
//todo listo, ahora a trabajar, page!
page()

function restrict(ctx, next) {
  console.log('Restricting!')
  console.log('Context :' + JSON.stringify(ctx))
  console.log('window.user :' + window.user)
  if (!window.user) return page('/signin')

  next();
}

function home() {
	console.log('Estoy navegando al home')
	$('.app-container').html($(homeTemplate))
}

function signin() {
	//inyecto el html de signin en el app-container
	$('.app-container').html(signinTemplate)
	$('.Signin-button').on('click', function (event) {
		event.preventDefault()
		// obtengo el contenido del input
		var username = $('.Signin-name-input')[0].value
		if (!username) return alert('ingrese un nombre válido')
		//window.location = '/' //ordeno que vaya al home(ojo! vuelve al servidor)
		window.user = { username: username }
		page('/')
	})
}

