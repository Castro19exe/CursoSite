window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            document.getElementById("navbar").style.padding = "5px 10px";
            document.getElementById("logo").style.fontSize = "25px";
        } else {
            document.getElementById("navbar").style.padding = "50px 10px";
            document.getElementById("logo").style.fontSize = "45px";
        }
    }