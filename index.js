
        function myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        }
    
    
        $('.slide-items').slick({
            arrows: false,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1030,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        dots: false,
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: false,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        dots: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 5000,
                    }
                }]
        });

        function Function () {
            alert("Chúng tôi đã nhận được thông tin của bạn");
            alert("Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất có thể");
            alert("Cảm ơn!");
        }
        function onClickSearch() {
            alert("Tính năng đang trong quá trình cập nhật");
        }
        function gotoContact () {
            windown.location.href = "contact.html";
        }

        