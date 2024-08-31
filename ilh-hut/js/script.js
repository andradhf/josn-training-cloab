function showAllMenu(){
    $.getJSON('data/pizza.json', (data)=>{
        let menu = data.menu;
        $.each(menu, function(i, data){
            $('#daftar-menu').append(`
                <div class="col-md-4">
                <div class="card mb-3" style="width: 18rem;">
                    <img src="img/pizza/${data.gambar}" class="card-img-top" alt="american favorite">
                    <div class="card-body">
                        <h5 class="card-title">${data.nama}</h5>
                        <p class="card-text">${data.deskripsi}</p>
                        <h5 class="card-title">${data.harga}</h5>
                        <a href="#" class="btn btn-primary">Pesan Sekarang</a>
                    </div>
                </div>
            </div>
                `);
        })
    })
}
showAllMenu();

$('.nav-link').on('click', function() {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let category = $(this).html();
    $('#menu-title').html(category);

    if(category == 'All Menu'){
        showAllMenu()
        return;
    }


    $.getJSON('data/pizza.json', function(data) {
        let content = '';

        $.each(menu, function(i, item) {
            console.log('Index item:',item);
            if (item.kategori == category){
                content += `
                <div class="col-md-4">
                <div class="card mb-3" style="width: 18rem;">
                    <img src="img/pizza/${item.gambar}" class="card-img-top" alt="american favorite">
                    <div class="card-body">
                        <h5 class="card-title">${item.nama}</h5>
                        <p class="card-text">${item.deskripsi}</p>
                        <h5 class="card-title">${item.harga}</h5>
                        <a href="#" class="btn btn-primary">Pesan Sekarang</a>
                    </div>
                </div>
            </div>
                `
            }
        });

        $('#daftar-menu').html(content);
    });
});

