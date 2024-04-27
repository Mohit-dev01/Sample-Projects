    // const youtubeIcon = document.getElementById("video-icon");
    // const playButton = document.getElementById("play-video");

    // const closeButton = document.getElementById("close-video");

    // youtubeIcon.addEventListener("click", () => {
    //     playButton.classList.add("open");
    //     console.log('hello');
    // });

    // closeButton.addEventListener("click", () => {
    //     playButton.classList.remove("open");
    // });

    // // const videoIcon=document.getElementById('video-icon');

    // // videoIcon.addEventListener('click',()=>{
    // //       console.log('hello');
    // // });

    function logSubmit(event) {
        log.textContent = "Thank you ";
        event.preventDefault();
      }
      
      const form = document.getElementById("form");
      const log = document.getElementById("log");
      form.addEventListener("submit", logSubmit);
      