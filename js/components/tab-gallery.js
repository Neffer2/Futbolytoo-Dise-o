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
        },
        nextImage(){
            if (this.currentIndex+1 < this.previews.length){
                this.currentIndex++;
                this.imageVisor.src = this.previews[this.currentIndex].src;
            }else {
                this.currentIndex = 0;
                this.imageVisor.src = this.previews[this.currentIndex].src;
            }
        },
        prevImage(){
            if (this.currentIndex-1 >= 0){
                this.currentIndex--;
                this.imageVisor.src = this.previews[this.currentIndex].src;
            }else {
                this.currentIndex = this.previews.length - 1;
                this.imageVisor.src = this.previews[this.currentIndex].src;
            }
        },
        showImageVisor(index){
            this.imageVisor.src = this.previews[index].src;
            this.currentIndex = index;
        },
        showSpinner(){
            this.spinner = !this.spinner;
        },
    }
} 