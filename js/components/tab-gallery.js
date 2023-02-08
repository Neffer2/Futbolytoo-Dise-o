function tabGallery (){
    return {
        previews: [], 
        imageVisor: null,
        currentIndex: 0,
        spinner: false,
        construct(){
            // Lista de previews
            this.previews = Array.from(document.getElementsByClassName('tab-preview'));
            // Hero elem
            this.imageVisor = document.getElementById('image-visor');
            this.changeMainImage(this.currentIndex);
        },
        nextImage(){
            if (this.currentIndex+1 < this.previews.length){
                this.currentIndex++;
                this.changeMainImage(this.currentIndex);
            }else {
                this.currentIndex = 0;
                this.changeMainImage(this.currentIndex);
            }
        },
        prevImage(){
            if (this.currentIndex-1 >= 0){
                this.currentIndex--;
                this.changeMainImage(this.currentIndex);
            }else {
                this.currentIndex = this.previews.length - 1;
                this.changeMainImage(this.currentIndex);
            }
        },
        // Espera a showImageVisor para mostrar el spinner
        async changeMainImage(index){
            this.spinner = !this.spinner;
            let response = await this.showImageVisor(index)
            if (response){
                this.spinner = !this.spinner;
            }
        },
        showImageVisor(index){
            return new Promise((resolve, rejcet) => {
                // Simula un pequeño dealy para que se alcance a ver el spinner
                setTimeout(() => {
                    this.imageVisor.src = this.previews[index].src;
                    this.currentIndex = index;
                    resolve(true);
                }, 250)
            })
        },
        showSpinner(){
            this.spinner = !this.spinner;
        },
    }
} 