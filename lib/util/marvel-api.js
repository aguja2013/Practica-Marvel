var $ = window.jQuery

class MarvelApi {
  constructor (key) {
    this.key = key
    this.baseUrl = 'http://gateway.marvel.com/v1/public/'
  }

  findSeries (title) {
    let url = `${this.baseUrl}series?title=${title}&apikey=${this.key}`
    
    if (localStorage[url]) {
      let datos = localStorage[url]
      datos = JSON.parse(datos)
      console.log("hola desde el cache")
      return Promise.resolve(datos)
    } else {
    return Promise.resolve($.get(url))
    .then((res) => {
      let datos = res.data.results[0]
      datos = JSON.stringify(datos)
      localStorage[url] = datos

      // return datos
      return Promise.resolve(datos)
    })
  }
}
  getResourceURI (resourceURI) {
    let url = `${resourceURI}?apikey=${this.key}`
    if (localStorage[url]) {
      let datos = localStorage[url]
      datos = JSON.parse(datos)
      console.log("hola desde el cache")
      return Promise.resolve(datos)
    }
    return Promise.resolve($.get(url))
    .then((res) => {
      let datos = res.data.results[0]
      datos = JSON.stringify(datos)
      localStorage[url] = datos
      return Promise.resolve(datos)
    })
  }
}

window.MarvelApi = MarvelApi