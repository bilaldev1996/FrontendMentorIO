addEventListener('load',()=>{
    

    //Seleccionar imagenes pequeñas
    const images = document.querySelectorAll('.img')
    const imagenPrincipal = document.querySelector('.imagenPrincipal')

    //Seleccionar imagenes modal 
    const imageModal = document.querySelectorAll('.image-modal')
    const restar = document.querySelector('.restar')
    const sumar = document.querySelector('.sumar')
    let count = document.querySelector('.count')
    let num = 0

    /* carrito */
    const cartBody = document.querySelector('.cartBody')
    const addCart = document.querySelector('.addCart')
    
    /* Boton cuantos productos hay */
    const badge = document.querySelector('.badge') 
    badge.style.display = 'none'

    count.textContent = num

    if(num === 0){
        restar.setAttribute('disabled', '')
        addCart.setAttribute('disabled', '')
    }
    restar.addEventListener('click',(e)=>{
        e.preventDefault()
        num--
        count.textContent = num
        if(count.textContent === '0'){
            restar.setAttribute('disabled', '')
            addCart.setAttribute('disabled','')
        }
    })

    sumar.addEventListener('click',(e)=>{
        e.preventDefault()
        num++
        count.textContent = num
        if(num > 0 ){
            restar.removeAttribute('disabled', '')
            addCart.removeAttribute('disabled','')
        }
        addToCart()
    })

    /* Mostramos carro vacío */
    cartBody.innerHTML = `<p class="my-3 text-center">Your cart is empty</p>` 

    /* Funcion añadir al carrito */


    const addToCart = () => {
        addCart.addEventListener('click',(e)=>{
            e.preventDefault();
            console.log('click');
            /* numProducts.textContent = num */
            cartBody.innerHTML = `
            <div class="row ">
                    <div class="col-2">
                      <img src="build/img/image-product-1-thumbnail.jpg" alt="" height="50" width="50">
                    </div>
                    <div class="col ms-2 m-md-0">
                      <p class="m-0">Fall Limited Edition Sneakers</p>
                      <p class="m-0">$125 x <span class="numProducts">${num}</span> <span class="fw-bold total text-dark">$${125*num}</span></p>
                    </div>
                    <div class="col-2">
                      <button class="btn delete">
                        <img src="build/img/icon-delete.svg" alt="">
                      </button>
                    </div>
                  </div>
            <button type="button" class="btn btn-primary w-100 mt-2">Checkout</button>
            `
            /* Mostrar cuantos productos tenemos en el carrito */
            

            badge.textContent = num
            badge.style.display = 'block'
            /* Boton eliminar contenido carrito */
            const deleteCart = document.querySelector('.delete')
            deleteCart.addEventListener('click',() =>{
                cartBody.innerHTML = `<p class="my-3 text-center">Your cart is empty</p>` 
                badge.style.display = 'none'
            })
        })
    }



    /*  data-bs-toggle="modal" data-bs-target="#imagenModal" */
    images.forEach(img =>{
        img.setAttribute('data-bs-toggle','modal')
        img.setAttribute('data-bs-target','#imagenModal')
        img.addEventListener('click',(e)=>{
            e.preventDefault();
            const rutaImagen = img.attributes[0].nodeValue.replace('-thumbnail','')
            console.log(rutaImagen);
            resetActive()
            img.classList.toggle('hov');
            imagenPrincipal.src = rutaImagen
        })
    })

    imageModal.forEach(img =>{
        img.addEventListener('click',(e)=>{
            e.preventDefault();
            imageModal.forEach(img=>img.classList.remove("hov"))
            img.classList.toggle('hov');
        })
    })
    function resetActive() {
        images.forEach(img => img.classList.remove("hov"));
    }



    /* Cambiar imagen principal por carrousel de imagenes */

    if(innerWidth < 578){
        imagenPrincipal.style.display = 'none'
        const imagen = document.querySelector('.imagen')

        imagen.innerHTML = `
        <div id="indicadores" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                      <img src="build/img/image-product-1.jpg" alt="slide 1" class="d-block w-100">
                  </div>
                  <div class="carousel-item">
                      <img src="build/img/image-product-2.jpg" alt="slide 1" class="d-block w-100">
                  </div>
                  <div class="carousel-item">
                      <img src="build/img/image-product-3.jpg" alt="slide 1" class="d-block w-100">
                  </div>
                  <div class="carousel-item">
                      <img src="build/img/image-product-4.jpg" alt="slide 1" class="d-block w-100">
                  </div>
                  <button type="button" class="carousel-control-prev" data-bs-target="#indicadores" data-bs-slide="prev">
                    <!-- <span class="carousel-control-prev-icon text"></span> -->
                    <img src="build/img/icon-previous.svg" alt=""  class="prev">
                </button>
                <button type="button" class="carousel-control-next" data-bs-target="#indicadores" data-bs-slide="next">
                    <!-- <span class="carousel-control-next-icon"></span> -->
                    <img src="build/img/icon-next.svg" alt="" class="next">
                </button>
            </div>
            </div>
        `
    }else{
        imagenPrincipal.style.display = 'block'
    }
})