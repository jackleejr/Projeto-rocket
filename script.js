function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

    // pegar a tag img
    const img = document.querySelector('.profile img')

    // substituir a img

    if (html.classList.contains('light')){
        img.setAttribute('src', './assets/avatar-light.png')
    } else {
        img.setAttribute('src', './assets/avatar.png')
    }

}



//    if(html.classList.contains('light')){ if = se for ttrue
//        html.classList.remove('light')
//    }
//
//  else{   se n for true
//      html.classList.add('light')
//  }
//}
