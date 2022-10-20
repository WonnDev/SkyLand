
        function myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        }
    
    /** slick 1 **/
        $('.slide-items').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            infinite: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 1030,
                    settings: {
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2, 
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        autoplay: true,
                        autoplaySpeed: 5000,
                    }
                }]
        });

        if((480 < screen.width) && ( screen.width <= 1024 ))  {
            $('.slide-tablet-screen').slick({
                slidesToScroll: 1,
                arrows: false,
                infinite: false,
                dots: true,
                responsive: [
                    {
                        breakpoint: 800,
                        settings: {
                            slidesToShow: 2,
                        }
                    }]
            });
        }
        

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

        $(window).scroll(function(e){
            if ($(this).scrollTop() > 0) {
                $(".btn-go-top").css("display", "block");
            } else {
                $(".btn-go-top").css("display", "none");
            }
        });
        

        function browserName(){
            var Browser = navigator.userAgent;
            var uagent = navigator.userAgent.toLowerCase();
            if (Browser.indexOf('MSIE') >= 0){
             Browser = 'MSIE';
            }
            else if (Browser.indexOf('Firefox') >= 0){
             Browser = 'Firefox';
            }
            else if (Browser.indexOf('Chrome') >= 0){
             Browser = 'Chrome';
            }
            else if (Browser.indexOf('Safari') >= 0){
             Browser = 'Safari';
            }
            else if (Browser.indexOf('Opera') >= 0){
               Browser = 'Opera';
            }
            else{
                Browser = 'UNKNOWN';
            }
            if( screen.width <= 480 ) {
                if (uagent.search("iphone") > -1)
                    alert("You are used " + Browser + " on Iphone");
                else
                    alert("You are used " + Browser + " on MobilePhone");
                
            }else{
                return alert("You are used " + Browser);
            }  
        }
        console.log(browserName());