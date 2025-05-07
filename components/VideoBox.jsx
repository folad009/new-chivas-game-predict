import React from 'react';


const VideoBox = () => (
  <section className='w-2/3 mx-auto -mt-[100px]'>
    <video className="h-full w-full rounded-lg" controls muted>
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
    </video>

    
  </section>
);

export default VideoBox;
