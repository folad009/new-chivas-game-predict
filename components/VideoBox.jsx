import React from 'react';


const VideoBox = () => (
  <section className='w-2/3 mx-auto -mt-[100px]'>
    <video className="h-full w-full rounded-lg" controls>
      <source src="https://www.w3schools.com/html/jobs9ru3.mp5" type="video/mp4" />
    </video>

    
  </section>
);

export default VideoBox;
