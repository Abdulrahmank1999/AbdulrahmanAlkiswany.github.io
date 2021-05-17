const scrollElements = document.querySelectorAll(".js-scroll");

scrollElements.forEach((el) => {
    el.style.opacity = 0
  })

  const elementInView = (el) => {
    const elementTop = el.getBoundingClientRect().top;//the distance between el and top
   
    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight)//view distance)
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("scrolled");
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el)) {
        displayScrollElement(el);
      }else if(!elementInView(el)){
        hideScrollElement(el);
      }
    })
  }

  const hideScrollElement = (el) => {
    el.classList.remove('scrolled');
    el.classList.add('js-scroll');

  }

  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  })
  
  window.addEventListener('load', () => {
    if(window.location.href.indexOf("#")>-1){
      url="file:///C:/Users/ABD0172788/Desktop/Portfolio/index.html";
      window.location.href=url;
    }
    history.scrollRestoration = "manual"
  })
