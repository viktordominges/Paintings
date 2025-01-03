const scrolling = (upSelector) => {
    const upEleme = document.querySelector(upSelector);
    window.addEventListener('scroll', () => {
        //let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        if (document.documentElement.scrollTop > 1650) {
            upEleme.classList.add('animated', 'fadeIn');
            upEleme.classList.remove('fadeOut');
        } else {
            upEleme.classList.add('fadeOut');
            upEleme.classList.remove('fadeIn');
        }
    });

    //Scrolling with requestAnimationFrame
    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.3;

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;
            requestAnimationFrame(step);
            function step(time) {
                if (start === null) {
                    start = time;
                }
                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));
                document.documentElement.scrollTo(0, r);

                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {    
                    location.hash = hash;
                }
            }
        });
    });
            

    // Pure JS scrolling
    // const element = document.documentElement,
    //       body = document.body;
    // const calcScroll = () => {
    //     upEleme.addEventListener('click', function(event) {
    //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);
    //         if (this.hash !== '') {
    //             event.preventDefault();
    //             let hashElement = document.querySelector(this.hash);
    //             let hashElementTop = 0;

    //             while (hashElement.offsetParent) {
    //                 hashElementTop += hashElement.offsetTop;
    //                 hashElement = hashElement.offsetParent;
    //             }

    //             hashElementTop = Math.round(hashElementTop);
    //             smoothScroll(scrollTop, hashElementTop, this.hash);
    //         }
    //     });
    // };
    // function smoothScroll(from, to, hash) {
    //     let timeInterval = 1,
    //         prevScrollTop,
    //         speed;
    //     if (to > from) {
    //         speed = 30;    
    //     } else {
    //         speed = -30; 
    //     }

    //     let move = setInterval(function() {
    //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);
    //         if (
    //             prevScrollTop === scrollTop ||
    //             (to > from && scrollTop >= to) ||
    //             (to < from && scrollTop <= to)
    //         ) {
    //             clearInterval(move);
    //             history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
    //         } else {
    //             body.scrollTop += speed;
    //             element.scrollTop += speed;
    //             prevScrollTop = scrollTop;
    //         }
    //     }, timeInterval);
    // };

    // calcScroll();
};

 export default scrolling;